// https://search.bilibili.com/bangumi?keyword=%E5%83%85%E9%99%90%E6%B8%AF%E6%BE%B3%E5%8F%B0%E5%9C%B0%E5%8D%80&page=5

const bangumi = new Map();

async function fetchPage(page) {
  let text = await fetch(
    `https://search.bilibili.com/bangumi?keyword=%E5%83%85%E9%99%90%E6%B8%AF%E6%BE%B3%E5%8F%B0%E5%9C%B0%E5%8D%80&page=${page}`
  ).then(resp => resp.text());
  const flow = JSON.parse(text.match(/window\.__INITIAL_STATE__=([^;]+);/)[1])
    .flow;
  return flow[Object.keys(flow)[0]];
}

function handlePage(flow) {
  flow.result.forEach(r => {
    bangumi.set(r.season_id, {
      season_id: r.season_id,
      title: r.title.replace(
        '（\u003Cem class="keyword"\u003E僅限港澳台地區\u003C\u002Fem\u003E）',
        ""
      ),
      org_title: r.org_title,
      eps: r.eps.map(e => e.id)
    });
  });
}

(async function() {
  const p1 = await fetchPage(1);
  handlePage(p1);

  for (let i = 2; i <= p1.extra.pagesize; i++) {
    const p = await fetchPage(i);
    handlePage(p);
  }
})();
