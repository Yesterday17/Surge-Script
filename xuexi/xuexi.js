const result = {};

if ($response.body) {
  let body = $response.body.replace("iPad", "mitm");

  let match;
  for (let [_, title] of body.matchAll(/'([^']+完成[^']+)'/g)) {
    if (title.includes("及格") || title.includes("良好")) continue;
    if (title.includes("满分") || title.includes("优秀")) {
      match = title;
      break;
    }
  }

  if (match) {
    body = body.replace(/'([^']+学习[^']+)'/g, "'" + match + "'");
    $notification.post("青年大学习", "注入成功", match);
  }

  result.body = body;
}

$done(result);
