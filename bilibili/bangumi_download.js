const body = $response.body;
const result = {};

function toDownload(t) {
  t.rights.allow_download = 1;
}

if (body) {
  try {
    const resp = JSON.parse(body);
    resp.result.rights.can_watch = 1;
    toDownload(resp.result);

    if (Array.isArray(resp.result.episodes)) {
      resp.result.episodes.forEach((t) => toDownload(t));
    }
    result.body = JSON.stringify(resp);
  } catch (e) {
    console.log(e);
  }
}

$done(result);
