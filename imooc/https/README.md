## 怎么生成https密钥文件和证书文件

### why
在创建https服务器时必须提供这两个文件

### how
使用 openssl 命令创建 privatekey.pem 和 certificate.pem：

      openssl genrsa -out privatekey.pem 1024 
      openssl req -new -key privatekey.pem -out certrequest.csr
      openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem -days 365 //控制有效期限为365天，默认为30天

#### 出现错误
在win7下使用openssl
openssl genrsa -out privatekey.pem 1024   //成功创建

openssl req -new -key privatekey.pem -out certrequest.csr  //报错，信息如下
unable to load config info from /usr/local/ssl/openssl.cnf
原因为找不到openssl.cnf文件

#### 解决方案
1. 在Git/usr/ssl/下可找到该文件
2. 将该文件复制到c盘根目录下
3. 执行命令openssl req -new -key privatekey.pem -out certrequest.csr -config C:\openssl.cnf
