# Vue.js PWA Service Worker Demo


# standalone test
vue/cli-plugin-pwa is not development friendly.
so how to test it?

- 1 install http-server: ```npm install http-server -g```
- 2 build the production app: ```npm run build```
- 3 start http-server: ```http-server dist```

on each vuejs app build the new service-worker.js is detected on app and refresh button is displayed.

# docker test
- 1 build the production app: ```npm run build```
- 2 start the container: ```docker-compose up -d```