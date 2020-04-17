const body = $response.body;
const result = {};

if (body) {
  try {
    const resp = JSON.parse(body);
    resp.expired = false;
    resp.subscription = true;
    resp.expireDate = 114514;
    result.body = JSON.stringify(resp);
  } catch (e) {
    console.log(e);
  }
}

$done(result);
