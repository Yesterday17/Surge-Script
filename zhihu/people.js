const body = $response.body;
const result = {};

if (body) {
  try {
    const resp = JSON.parse(body);
    delete resp["mcn_user_info"];
    result.body = JSON.stringify(resp);
  } catch (e) {
    console.log(e);
  }
}

$done(result);
