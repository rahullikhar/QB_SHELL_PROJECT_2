#!/bin/bash
#===========================================================================
#Script Name    : server_setup.sh
#Descriptions   : Installs Node.js and Nginx on fresh EC2
#Author         : Qualibytes IT Academy
#Usage          : sudo bash server_setup.sh
#Run            : Only once on a fresh EC2 server
#===========================================================================

# Stop the script immidiately if any command fails
set -e


#-- Color codes for terminal output --
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RED='\033[0;31m'
RESET='\033[0m'

# -- Helper functions --
info()    { echo -e "${CYAN}[INFO]${RESET} $1"; }
success() { echo -e "${GREEN}[OK]${RESET} $1"; }
error()   { echo -e "${RED}[ERROR]${RESET} $1"; exit 1; }

echo ""
echo "=============================================================="
echo "Qualibytes IT Academy - Server Setup Script"
echo "=============================================================="   
echo ""

# -- Step 1: Make sure the script is running as root --
info "Step 1: Checking root permissions..."
if [ "$EUID" -ne 0 ]; then
    error "Please run with sudo: sudo bash server_setup.sh"
fi
success "Running as root."

# -- Step 2: Update system packages --
info "Step 2: Updating system packages..."
apt update -y > /dev/null 2>&1
apt upgrade -y > /dev/null 2>&1
success "System packages updated."

# -- Step 3: Install curl (needed to download Node.js setup script) --
info "Step 3: Installing curl..."
apt install curl -y > /dev/null 2>&1
success "Curl installed."

# -- Step 4: Install Node.js v20 LTS --
info "Step 4: Installing Node.js v20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - > /dev/null 2>&1
apt install -y nodejs > /dev/null 2>&1
success " Node.js $(node --version) and npm $(npm --version) installed."

# -- Step 5: Install Nginx web server --
info "Step 5: Installing Nginx..."
apt install nginx -y > /dev/null 2>&1
success "Nginx installed."

# -- Step 6: Create the web root directory for our app --
info "Step 6: Creating web root directory..."
mkdir -p /var/www/qualibytes
chown -R www-data:www-data /var/www/qualibytes
success "Web root directory created at /var/www/qualibytes."

# -- Step 7: Write the Nginx config file --
info "Step 7: Writing Nginx config file..."
cat > /etc/nginx/sites-available/qualibytes << 'EOF'
server {
    listen 80;
    server_name _;

    root /var/www/qualibytes;
    index index.html;

    # Send all routes to index.html (required for React Router)
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF
success "Nginx config file created."

# -- Step 8: Enable the site by creating a symlink --
info "Step 8: Enabling the site..."
rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/qualibytes /etc/nginx/sites-enabled/qualibytes
success "Site enabled."

# -- Step 9: Test Nginx config, then start it --
info "Step 9: Starting Nginx..."
nginx -t
systemctl start nginx
systemctl enable nginx > /dev/null 2>&1
success "Nginx is running."

echo ""
echo "=============================================================="
echo "Server setup COMPLETED!"
echo "=============================================================="
echo ""
echo " Node.js  : $(node --version)"
echo " NPM      : $(npm --version)"
echo " Nginx    : $(nginx -v 2>&1)"
echo ""
echo " Next step: run deploy.sh to deploy the app."
echo ""