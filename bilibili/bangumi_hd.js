let { body } = $response;

if (body) {
  let json = JSON.parse(body);
  json["quality"] = json["accept_quality"][0];
  body = JSON.stringify(json);
}

$done({ body });
