# Vue.js PWA Service Worker Demo


# standalone test
vue/cli-plugin-pwa is not development friendly.
so how to test it?

- 1 install http-server:
```shell
npm install http-server -g
```
- 2 build the production app:
```shell
npm run build
```
- 3 start http-server:
```
http-server dist
```

on each vuejs app build the new service-worker.js is detected on app and refresh button is displayed.

# docker test
- 1 build the production app: 
```shell
npm run build
```
- 2 start the container: 
```shell
docker-compose up -d
```

# if you've go an error on ssl validity cert/key, just run :
```shell
openssl req -x509 -out ssl/localhost.crt -keyout ssl/localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```