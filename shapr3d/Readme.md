# Shapr3D

```conf
[MITM]
hostname = prod.api.shapr3d.com

[Script]
http-response prod.api.shapr3d.com/user-management/profile-with-device requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/shapr3d/shapr3d.js,script-update-interval=0
```