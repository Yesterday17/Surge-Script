function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

const toInsert = `
<script>
(function () {
  const script = document.createElement("script");
  script.src = "https://blhx.danmu9.com/blhxfy/extension.user.js";
  document.head.appendChild(script);
})();
</script>
`;

let { body, headers } = $response;
const result = {};

if (
  body &&
  headers &&
  typeof headers["Content-Type"] === "string" &&
  headers["Content-Type"].includes("text/html") &&
  body.lastIndexOf("</head>") !== -1
) {
  result.body = insert(body, body.lastIndexOf("</head>"), toInsert);
  result.headers = headers;
}

$done(result);
