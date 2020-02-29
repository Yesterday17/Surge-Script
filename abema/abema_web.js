const body = $response.body;
const result = {};

if (body) {
  try {
    result.body = body.replace(
      '"isAllowed":false,"status":true',
      '"isAllowed":true,"status":false'
    );
  } catch (e) {
    console.log(e);
  }
}

$done(result);
