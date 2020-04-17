const body = $response.body;
const result = {};

if (body && $request.url.match(/hb_answer_ad=\d+/)) {
  try {
    const resp = JSON.parse(body);
    resp.data = resp.data.filter(d => d.type !== "ad");
    result.body = JSON.stringify(resp);
  } catch {}
}

$done(result);
