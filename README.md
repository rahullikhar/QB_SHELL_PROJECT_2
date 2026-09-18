# Qualibytes IT Academy — Project 6
## React Website + Shell Script Deployment on AWS EC2

---

## Project Structure

```
qualibytes/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Sticky navbar with mobile menu
│   │   ├── Navbar.css
│   │   ├── Footer.js       # Full footer with links & contact
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js         # Hero, courses, testimonials, CTA
│   │   ├── Home.css
│   │   ├── AboutUs.js      # Mission, timeline, team, stats
│   │   ├── AboutUs.css
│   │   ├── OurServices.js  # Interactive course explorer
│   │   ├── OurServices.css
│   │   ├── Contact.js      # Form with validation
│   │   └── Contact.css
│   ├── App.js              # Router setup
│   ├── index.js            # Entry point
│   └── index.css           # Global design system
├── package.json
├── server_setup.sh         # Runs ONCE on fresh EC2
└── deploy.sh               # Runs every deployment
```

---

## Part 1 — Run Locally (Testing)

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Start development server
```bash
npm start
```
Open the application in your browser at: `http://localhost:3000`

---

## Part 2 — Server Setup (Run Once on EC2)

### Pre-requisites
- AWS EC2 instance (Ubuntu 22.04 LTS recommended)
- Security Group inbound rules:
  - Port 22  (SSH)
  - Port 80  (HTTP)
- Your `.pem` key file downloaded

### Step 1: Connect to EC2
```bash
ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP>
```

### Step 2: Upload server_setup.sh to EC2
```bash
# Copy the script from your local machine to EC2
scp -i your-key.pem server_setup.sh ubuntu@<EC2_IP>:~/
```

### Step 3: Run the setup script
```bash
# Run these commands on the EC2 server
chmod +x server_setup.sh
sudo bash server_setup.sh
```

**What the script does:**
1. System update (apt update & upgrade)
2. curl install
3. Installs Node.js v20 LTS from NodeSource
4. Nginx install
5. Creates the web root directory: `/var/www/qualibytes`
6. Writes the Nginx configuration with React Router support
7. Enables the site
8. Starts Nginx and enables it at system startup
9. Configures the firewall rules

---

## Part 3 — Deploy the Website

### Pre-requisite: Project GitHub pe push hona chahiye

```bash
# Agar naya repo hai to GitHub pe push karo pehle:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Run deploy.sh from your LOCAL machine (from the project folder)

```bash
# Make executable
chmod +x deploy.sh

# Deploy the application (3 arguments required)
bash deploy.sh <EC2_PUBLIC_IP> <PATH_TO_KEY.pem> <GITHUB_REPO_URL>

# Example:
bash deploy.sh 13.233.45.67 ~/.ssh/my-key.pem https://github.com/yourname/qualibytes.git
```

**What the script does:**
1. Tests the SSH connection to EC2
2. Checks/installs git on EC2
3. Clones the GitHub repo on EC2 (or pulls latest if already cloned)
4. Runs `npm install` on EC2
5. Runs `npm run build` on EC2 to build the React application
6. Copies build files to `/var/www/qualibytes` (web root)
7. Fixes file permissions
8. Reloads Nginx
9. Verifies the HTTP status with curl
10. Saves a deployment log

### Website live hogi:
```
http://<EC2_PUBLIC_IP>
```

---

## Pages Overview

| Page | Route | Key Features |
|------|-------|-------------|
| Home | `/` | Hero with terminal animation, stats, courses, testimonials, CTA |
| About Us | `/about` | Mission/vision, timeline, team cards, numbers |
| Our Services | `/services` | Interactive course explorer with sidebar |
| Contact | `/contact` | Form with validation, success state, info cards |

---

## Shell Script Concepts Used

### server_setup.sh
| Concept | Used For |
|---------|----------|
| `$EUID` variable | Check if running as root |
| `if [ condition ]` | All validation checks |
| `$?` exit code | check_error() function |
| Functions | `log_info`, `log_success`, `log_error`, `check_error` |
| `command -v` | Check if tool is installed |
| `systemctl` | Start/enable/check Nginx |
| `cat > file << 'EOF'` | Write Nginx config file |
| `ln -sf` | Create symlink to enable site |
| Color codes (`\033[...m`) | Colored terminal output |

### deploy.sh
| Concept | Used For |
|---------|----------|
| `$1`, `$2` | Command-line arguments (IP and key) |
| `for` loop | Check all required tools |
| Arrays | `REQUIRED_TOOLS=("node" "npm" "ssh" "scp")` |
| `ssh` command | Remote server operations |
| `scp` command | Copy files to EC2 |
| `curl` | Verify deployment (HTTP check) |
| `du -sh` | Check build folder size |
| `date` | Timestamp in deploy log |
| `echo >> file` | Append to log file |

---

## Troubleshooting

### Nginx not serving the site
```bash
# Check Nginx status
sudo systemctl status nginx

# Check error logs
sudo tail -f /var/log/nginx/error.log

# Test config
sudo nginx -t
```

### React Router 404 on refresh
Make sure the Nginx config has this line:
```nginx
try_files $uri $uri/ /index.html;
```
(server_setup.sh already adds this automatically)

### Permission denied during deploy
```bash
# On EC2
sudo chown -R ubuntu:ubuntu /var/www/qualibytes
```

### Port 80 not accessible
- Check EC2 Security Group → Inbound Rules → Add HTTP (port 80) for 0.0.0.0/0

---

## Quick Command Reference

```bash
# Local: start the development server
npm start

# Local: build for production
npm run build

# EC2: check the Nginx status
sudo systemctl status nginx

# EC2: reload Nginx after a configuration change
sudo systemctl reload nginx

# EC2: view the Nginx error log
sudo tail -f /var/log/nginx/error.log

# Deploy (run from the project folder)
bash deploy.sh <IP> <KEY.pem>
```

---

*Qualibytes IT Academy Pvt. Limited — Noida, Uttar Pradesh*
*Project 6: React App + Shell Script Deployment on AWS EC2*
