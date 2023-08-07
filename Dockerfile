FROM node:alpine as builder

# 指定工作目录
RUN mkdir -p /app/client
WORKDIR /app/client

# 复制目录文件
COPY . .

# 安装依赖并执行相关操作
RUN npm install --registry=https://registry.npm.taobao.org && npm run build && rm -rf node_modules

FROM nginx:alpine

# 复制打包后的产物
COPY --from=builder /app/client/dist /usr/share/nginx/html

# 复制自定义的nginx.conf文件
COPY --from=builder /app/client/BuildScript/nginx.conf /etc/nginx/nginx.conf

# 暴露80端口
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]


