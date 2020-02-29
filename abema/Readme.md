# AbemaTV

```conf
[MITM]
hostname = api.abema.io, abema.tv

[Script]
http-response api\.abema\.io\/v1\/ip\/check script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/abema/abema_client.js,script-update-interval=0
http-response abema\.tv requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/abema/abema_web.js,script-update-interval=0
```