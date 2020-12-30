# qwer
`基于vue3.0`

## 项目运行
```shell
yarn install
yarn serve
```
## 运行ssr
```shell
yarn build
yarn dev:ssr
```
## 打包
```shell
yarn build
```


## 项目部署
```shell
# 打包镜像
docker build -t qwer:v1.0.0 .
# 运行镜像
docker run -itd --name qwer -p 8089:8089 qwer:v1.0.0
```

## TODO list
- [ ] 增加nginx配置
- [ ] 页面开发