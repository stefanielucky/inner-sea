nginx代理
windows nginx version 1.16.0
第一步：
添加当前站点配置文件
cd nginx/conf文件夹  新建site文件夹  创建resou.conf文件
resou.conf
server {
    listen 80;
    server_name h5local.funji.club;
    if ($request_uri ~* "^/$"){
        return 403;
    }
    location /resou {
        proxy_pass http://localhost:8080;
        index  index.html index.htm;
    }
   location ^~ /api/ {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://192.168.127.51:8082;   # 后端接口地址
    }
}
第二步：
修改nginx原始配置文件
编辑conf文件夹下的nginx.conf文件
在 http{} 里添加 include site/*.conf;
第三步：
给本机添加域名
cd C:\Windows\System32\drivers\etc
编辑 hosts
在最后一行添加
127.0.0.1 h5local.funji.club
第四步：
vue里配置
config里的index.js
proxyTable: {
      '/api': {
        target: 'https://h5local.funji.club/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
},
重启vue项目