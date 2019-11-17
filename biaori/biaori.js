let body = $response.body;

const result = {};

if (body) {
  const json = JSON.parse(body);
  if (json.message === "获取图书列表成功") {
    result.body = JSON.stringify({
      message: json.message,
      status: json.status,
      data: [
        {
          book_title: "标准日本语初级",
          activation_date: "2000-01-01 00:00",
          activation_status: 2,
          activation_code: "000000000000000000",
          book_id: 10001
        },
        {
          book_title: "标准日本语中级",
          activation_date: "2000-01-01 00:00",
          activation_status: 2,
          activation_code: "000000000000000000",
          book_id: 10002
        },
        {
          book_title: "标准日本语高级",
          activation_date: "2000-01-01 00:00",
          activation_status: 2,
          activation_code: "000000000000000000",
          book_id: 10003
        }
      ]
    });
  } else if (json.message === "广告图片获取成功") {
    result.body = JSON.stringify({
      message: json.message,
      status: json.status,
      data: [],
      count: 0
    });
  }
}

$done(result);
