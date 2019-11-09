const body = $response.body;
const result = {};

if (body) {
  try {
    const resp = JSON.parse(body);
    resp.subscriptionExpires = "9999-12-31T23:59:59.999Z";
    resp.subscriptionType = "pro_year";
    result.body = JSON.stringify(resp);
  } catch (e) {
    console.log(e);
  }
}

$done(result);
