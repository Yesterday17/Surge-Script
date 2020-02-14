const fin = {};
if ($response.body) {
  const body = JSON.parse($response.body);
  if (body["data"]) {
    body["data"]["vip"]["current_vip"] = "ios";
    body["data"]["vip"]["current_ad_vip"] = "ios";

    body["data"]["vip"]["current_vip_start"] = 1581678104;
    body["data"]["vip"]["current_ad_vip_start"] = 1581678104;

    body["data"]["vip"]["current_vip_end"] = 2147483647;
    body["data"]["vip"]["current_ad_vip_end"] = 2147483647;
    body["data"]["vip"]["current_svip_end"] = 2147483647;

    body["data"]["vip"]["bill_type"] = "subscribe";
    body["data"]["vip"]["ad_bill_type"] = "subscribe";

    body["data"]["vip"]["is_expired"] = 0;
    body["data"]["vip"]["is_ad_vip_expired"] = 0;
    body["data"]["vip"]["is_svip_expired"] = 0;

    fin.body = JSON.stringify(body);
  }
}

$done(fin);
