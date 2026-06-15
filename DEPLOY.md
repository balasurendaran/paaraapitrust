# cPanel Deployment Guide

This project includes three options for deploying your production built files (`dist/` directory) directly to your cPanel hosting environment.

> [!NOTE]
> We have moved `.htaccess` to the `public/` directory so that it is automatically copied into the `dist/` directory on every build. This ensures that Apache configurations (HTTPS force redirects, browser caching, and Gzip compression) deploy correctly.

---

## Option 1: FTP Deployment (No Dependencies, Recommended for FTP)
Uses a Python script to deploy the files. Since Python is pre-installed on macOS, it runs without needing to install any external npm dependencies.

1. Open [deploy-ftp.py](file:///Users/suren/Documents/workspace/paaraapi-trust/deploy-ftp.py) and update the configuration variables at the top of the file:
   ```python
   FTP_HOST = "ftp.yourdomain.com"
   FTP_USER = "your_username@yourdomain.com"
   FTP_PASS = "your_ftp_password"
   REMOTE_DIR = "public_html"  # Target directory on cPanel (usually public_html)
   ```
2. Run the deployment script from your terminal:
   ```bash
   python3 deploy-ftp.py
   ```

---

## Option 2: SSH / rsync Deployment (Fastest & Most Secure)
If you have SSH access enabled on your cPanel account, this bash script uses `rsync` to sync files. It is extremely fast and securely transfers files.

1. Open [deploy-ssh.sh](file:///Users/suren/Documents/workspace/paaraapi-trust/deploy-ssh.sh) and update the configuration variables at the top of the file:
   ```bash
   USER="your_cpanel_username"
   HOST="your_cpanel_domain_or_ip"
   PORT="22"  # Change to your cPanel SSH port if different
   REMOTE_DIR="/home/$USER/public_html"
   ```
2. Run the deployment script from your terminal:
   ```bash
   bash deploy-ssh.sh
   ```

---

## Option 3: cPanel Git Deployment (Automated)
If you are using cPanel's built-in **Git Version Control** interface to manage your repository directly on the server:

1. Open [.cpanel.yml](file:///Users/suren/Documents/workspace/paaraapi-trust/.cpanel.yml) and replace `your_cpanel_username` with your actual cPanel username:
   ```yaml
   export DEPLOYPATH=/home/your_cpanel_username/public_html
   ```
2. Commit and push [.cpanel.yml](file:///Users/suren/Documents/workspace/paaraapi-trust/.cpanel.yml) to your remote repository.
3. In your cPanel interface under **Git Version Control**, link your repository and click **Deploy Head Commit** to trigger the deployment.

---

## Option 4: ZIP File Manual Upload (cPanel File Manager)
If you want to manually upload a single ZIP file and extract it directly inside cPanel's File Manager:

1. Generate the zip file from your terminal:
   ```bash
   npm run zip
   ```
2. This creates a file called `dist.zip` in your project root containing the production built files (including `.htaccess`) directly at the zip root level.
3. Go to **cPanel > File Manager**, navigate to your target web directory (e.g., `public_html`), and click **Upload**.
4. Upload `dist.zip`.
5. Select `dist.zip` in the File Manager list and click **Extract** to deploy all files instantly.

