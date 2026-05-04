# nextjs-mysql-devops-assessment
nextjs-mysql-devops-assessment

# Next.js + MySQL DevOps Assessment

## Tech Stack
Next.js 14, MySQL 8, Docker, Nginx, GitHub Actions, AWS EC2, DuckDNS, knex@3.2.10, 
Docker version 29.1.3, build 29.1.3-0ubuntu3~24.04.1
docker-compose version 1.29.2, build unknown

## Project Structure
├── app/                        # Next.js source files
├── nginx/default.conf            # Reverse proxy config
├── .github/workflows/          # CI/CD pipeline
├── Dockerfile                  # Dockerfile
├── docker-compose.yml          # Multi-container setup
└── .env                        # Environment variables (not committed)

## Setup Steps
1. SSH into provided server
2. Install Docker and Docker Compose plugin
3. Create non-root deploy user and configure SSH
4. Configure firewall — allow ports 22, 80, 443 only
5. Add SSH_KEY to GitHub Secrets
6. Configure DuckDNS domain pointing to provided IP
7. Push to main — GitHub Actions auto-deploys via SSH

## Docker
- Dockerfile (deps → builder → runner)
- Runs as non-root user inside container
- NODE_ENV=production set in final stage
- Nginx proxies port 80 → Next.js on port 3000
- MySQL port 3306 internal only (not exposed)

## CI/CD Flow
Push to main → SSH into server → git pull → docker-compose up --build

## Security
- Non-root deploy user for SSH
- Non-root user inside Docker container
- Only ports 22, 80, 443 open (UFW + AWS Security Group)
- Secrets stored in GitHub Secrets, not in code