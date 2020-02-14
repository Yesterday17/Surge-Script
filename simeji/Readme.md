# simeji

```conf
[MITM]
hostname = api.simeji.me

[Script]
http-response https://api.simeji.me/passport/(sectbind%7Cmobile) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/simeji/simeji.js,script-update-interval=0
```