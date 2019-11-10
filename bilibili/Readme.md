# bilibili

```conf
[MITM]
hostname = api.bilibili.com

[Script]
http-request api\.bilibili\.com\/pgc\/player\/api\/playurl script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/bilibili/playurl_redirect.js,script-update-interval=0
http-response api\.bilibili\.com\/pgc\/view\/app\/season\? requires-body=1,max-size=262144,script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/bilibili/bangumi_download.js,script-update-interval=0
rule 哔哩哔哩港澳台 script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/bilibili/region_unlock.js,script-update-interval=0
```