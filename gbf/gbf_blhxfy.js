function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

const toInsert = `
<script>
function GM_xmlhttpRequest({
  method,
  url,
  headers,
  responseType,
  data,
  onload,
  onerror,
}) {
  var xhr = new XMLHttpRequest();
  xhr.onload = onload;
  xhr.onerror = onerror;

  xhr.open(method, url);
  xhr.responseType = responseType;

  // Set headers
  for (let key in headers) {
    xhr.setRequestHeader(key, headers[key]);
  }

  xhr.send(data);
}

window.GM_xmlhttpRequest = GM_xmlhttpRequest;

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
  headers["Content-Type"].includes("text/html")
) {
  result.body;
  result.body = insert(body, body.lastIndexOf("</head>"), toInsert);
  result.headers = headers;
}

$done(result);
