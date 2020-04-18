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
