// https://search.bilibili.com/bangumi?keyword=%E5%83%85%E9%99%90

const bangumi = new Map();

async function fetchPage(page) {
  let text = await fetch(
    `https://search.bilibili.com/bangumi?keyword=%E5%83%85%E9%99%90&page=${page}`
  ).then((resp) => resp.text());
  const flow = JSON.parse(text.match(/window\.__INITIAL_STATE__=([^;]+);/)[1])
    .flow;
  return flow[Object.keys(flow)[0]];
}

function handlePage(flow) {
  flow.result.forEach((r) => {
    bangumi.set(r.season_id, {
      season_id: r.season_id,
      title: r.title.replace(
        /（\u003Cem class="keyword"\u003E僅限\u003C\u002Fem\u003E[^地]+地區）/,
        ""
      ),
      type: r.title.includes("港")
        ? "hk"
        : r.title.includes("台")
        ? "tw"
        : "sg",
      org_title: r.org_title,
      eps: r.eps.map((e) => e.id),
    });
  });
}

(async function () {
  const p1 = await fetchPage(1);
  handlePage(p1);

  for (let i = 2; i <= p1.extra.pagesize; i++) {
    const p = await fetchPage(i);
    handlePage(p);
  }
})();
