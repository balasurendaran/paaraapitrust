#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# ═════════════════════════════════════════════════════════════
#  CPANEL SSH/RSYNC DEPLOYMENT CONFIGURATION
# ═════════════════════════════════════════════════════════════
USER="your_cpanel_username"
HOST="your_cpanel_domain_or_ip"
PORT="22"  # Change to your cPanel SSH port (often 22, 2222, or 21098)
REMOTE_DIR="/home/$USER/public_html"
LOCAL_DIR="dist/"
# ═════════════════════════════════════════════════════════════

# Color output helper
green() {
  echo -e "\033[0;32m$1\033[0m"
}

echo "Step 1: Building production bundle..."
npm run build

echo ""
green "Step 2: Deploying files via rsync to cPanel..."
# -a: archive mode (preserves permissions, timestamps, etc.)
# -v: verbose output
# -z: compress file data during transfer
# --delete: delete extraneous files from destination directories (keep remote synced with local)
rsync -avz --delete -e "ssh -p $PORT" "$LOCAL_DIR" "$USER@$HOST:$REMOTE_DIR"

echo ""
green "═════════════════════════════════════════════════════"
green " SUCCESS: Deployment completed successfully!"
green "═════════════════════════════════════════════════════"
