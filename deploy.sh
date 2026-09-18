#!/bin/bash
#===========================================================================
#Script Name    : deploy.sh
#Descriptions   : Clones the React app from GitHub, builds it,
#                 and deploys it via Nginx on this EC2 server.
#Author         : Qualibytes IT Academy
#Usage          : sudo bash deploy.sh <GITHUB_REPO_URL>
#Example        : sudo bash deploy.sh <GITHUB_REPO_URL>
#===========================================================================

# Stop the script immidiately if any command fails
set -e

# -- Color codes for terminal output --
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RED='\033[0;31m'
RESET='\033[0m'

# -- Helper functions --
info()    { echo -e "${CYAN}[INFO]${RESET} $1"; }
success() { echo -e "${GREEN}[OK]${RESET} $1"; }
error()   { echo -e "${RED}[ERROR]${RESET} $1"; exit 1; }

# -- Read the Github repo URL from the first argument ($1) --
GITHUB_REPO="$1"

if [ -z "$GITHUB_REPO" ]; then
  error "GitHub repo URL missing. Usage: bash deploy.sh <GITHUB_REPO_URL>"
fi

# -- Directory where the app will be cloned on EC2 --
APP_DIR="/home/ubuntu/qualibytes"

# -- Nginx web root where the final build will be served from --
WEB_DIR="/var/www/qualibytes"

echo ""
echo "=============================================================="
echo "Qualibytes IT Academy - Deployment Script"
echo "=============================================================="
echo " Repo: $GITHUB_REPO"
echo ""

# -- Step 1: Get the latest code from GitHub --
info "Step 1: Getting latest code from GitHub..."
if [ -d "$APP_DIR/.git" ]; then
   # Repo already exists on server - just pull the latest changes
   cd "$APP_DIR"
   git pull origin main
else
    # First time - clone the full repo
    git clone "$GITHUB_REPO" "$APP_DIR"
    cd "$APP_DIR"
fi
success "Latest code fetched from GitHub."

# -- Step 2: Install Node.js dependencies --
info "Step 2: Installing npm packages..."
cd "$APP_DIR"
npm install --silent
success "npm packages installed."

# -- Step 3: Build the React app for production --
info "Step 3: Building the React app..."
npm run build
success "React app built for production."

# -- Step 4: Copy the build output to the Nginx web root --
info "Step 4: Copying build to web root..."
sudo rm -rf "$WEB_DIR"/*
sudo cp -r "$APP_DIR"/build/. "$WEB_DIR"/
sudo chown -R www-data:www-data "$WEB_DIR"
success "Build deployed to $WEB_DIR."

# --Step 5: Reload Nginx to serve the new files --
info "Step 5: Reloading Nginx..."
sudo systemctl reload nginx
success "Nginx reloaded."

echo ""
echo "=============================================================="
echo "Deployment completed successfully!"
echo "You can now access the app via the server's public IP or domain."
echo "=============================================================="
echo ""