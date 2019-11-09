const body = $response.body;
const result = {};

if (body) {
  try {
    const resp = JSON.parse(body);
    resp.result.rights.can_watch = 1;
    resp.result.rights.allow_download = 1;
    result.body = JSON.stringify(resp);
  } catch (e) {
    console.log(e);
  }
}

$done(result);
