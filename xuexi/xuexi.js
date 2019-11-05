if ($response.body) {
  let body = $response.body.replace("iPad", "mitm");

  let title, match;
  while ((title = /'([^']+完成[^']+)'/g.exec(body)) !== null) {
    if (title[1].includes("及格") || title[1].includes("良好")) continue;
    match = title[1];
    if (title[1].includes("满分") || title[1].includes("优秀")) break;
  }

  if (match) {
    body = body.replace(/'([^']+学习[^']+)'/g, "'" + match + "'");
    $notification.post("青年大学习", "注入成功", match);
  }

  $done({ body });
} else {
  $done({});
}
