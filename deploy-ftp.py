#!/usr/bin/env python3
import os
import sys
from ftplib import FTP

# ═════════════════════════════════════════════════════════════
#  CPANEL FTP DEPLOYMENT CONFIGURATION
# ═════════════════════════════════════════════════════════════
FTP_HOST = "ftp.yourdomain.com"
FTP_USER = "your_username@yourdomain.com"
FTP_PASS = "your_ftp_password"
REMOTE_DIR = "public_html"  # Target directory on cPanel
LOCAL_DIR = "dist"
# ═════════════════════════════════════════════════════════════

def upload_directory(ftp, local_path, remote_path):
    """Recursively upload a directory via FTP"""
    for name in os.listdir(local_path):
        local_item = os.path.join(local_path, name)
        remote_item = f"{remote_path}/{name}" if remote_path != "." else name
        
        if os.path.isdir(local_item):
            try:
                ftp.mkd(remote_item)
                print(f"Created remote directory: {remote_item}")
            except Exception:
                # Directory likely already exists
                pass
            upload_directory(ftp, local_item, remote_item)
        else:
            # Upload files in binary mode
            with open(local_item, 'rb') as f:
                ftp.storbinary(f'STOR {remote_item}', f)
                print(f"Uploaded: {local_item} -> {remote_item}")

def main():
    print("Step 1: Building production bundle...")
    build_exit_code = os.system("npm run build")
    if build_exit_code != 0:
        print("Error: Build failed. Aborting deployment.")
        sys.exit(1)
        
    print(f"\nStep 2: Connecting to FTP server {FTP_HOST}...")
    try:
        ftp = FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Logged in successfully.")
        
        # Enable passive mode (required by most cPanel firewalls)
        ftp.set_pasv(True)
        
        # Navigate to target directory
        try:
            ftp.cwd(REMOTE_DIR)
        except Exception:
            print(f"Directory {REMOTE_DIR} not found, creating it...")
            ftp.mkd(REMOTE_DIR)
            ftp.cwd(REMOTE_DIR)
            
        print(f"\nStep 3: Uploading files from '{LOCAL_DIR}' to remote '{REMOTE_DIR}'...")
        upload_directory(ftp, LOCAL_DIR, ".")
        
        ftp.quit()
        print("\n═════════════════════════════════════════════════════")
        print(" SUCCESS: Deployment completed successfully!")
        print("═════════════════════════════════════════════════════")
    except Exception as e:
        print(f"\nFTP Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
