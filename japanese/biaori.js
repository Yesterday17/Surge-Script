let url = $request.url;
let body = $request.body;

const result = {};

if (url && url === "http://ebookdomainry.pep.com.cn/api/" && body) {
  const json = JSON.parse(body);
  if (json.action === "GetActivateBookList") {
    result.response = { status: 200 }
    result.response.body = JSON.stringify({
      status: 0,
      data: [
        {
          book_title: "标准日本语初级",
          activation_date: "2016-02-21 22:40",
          activation_status: 2,
          activation_code: "000000000000000000",
          book_id: 10001
        },
        {
          book_title: "标准日本语中级",
          activation_date: "2016-02-21 22:40",
          activation_status: 2,
          activation_code: "000000000000000000",
          book_id: 10002
        },
        {
          book_title: "标准日本语高级",
          activation_date: "2016-02-21 22:40",
          activation_status: 2,
          activation_code: "000000000000000000",
          book_id: 10003
        }
      ]
    });
  } else if (json.action === "advertisement") {
    result.response = { status: 200 }
    result.response.body = JSON.stringify({
      status: "1",
      data: [],
      message: "广告图片获取成功",
      count: 0
    });
  }
}

$done(result);
