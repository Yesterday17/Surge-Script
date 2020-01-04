# PDFExpert 7

```conf
[MITM]
hostname = license.pdfexpert.com

[Script]
http-response license.pdfexpert.com/api/1.0/pdfexpert6/subscription/refresh requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Yesterday17/Surge-Script/master/pdfexpert/pdfexpert.js,script-update-interval=0
```