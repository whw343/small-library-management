#!/bin/bash

# 退出脚本时，如果有错误会立即退出
set -e

# 输出一些信息
echo "Deploying to Heroku..."

# 确保你已经在项目目录里
echo "Making sure we're on the correct branch"
git checkout main

# 获取最新的代码
echo "Pulling the latest changes from GitHub"
git pull origin main

# 安装项目依赖
echo "Installing dependencies"
npm install

# 构建前端应用
echo "Building the frontend application"
npm run build

# 推送代码到 Heroku
echo "Pushing to Heroku"
git push heroku main

# 迁移数据库（如果有需要）
echo "Running database migrations"
heroku run npm run migrate

# 完成部署
echo "Deployment complete!"

# 打开应用
heroku open
