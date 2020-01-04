const body = $response.body;
const result = {};

if (body) {
  try {
    const resp = JSON.parse(body);
    if (resp["subscriptionState"]) {
      result.body = JSON.stringify({
        isEligibleForIntroPeriod: false,
        originalTransactionId: "861145141919810",
        subscriptionExpirationDate: "23:59 31/12/9999",
        subscriptionState: "active",
        subscriptionReceiptId: "1145141919810",
        isPDFExpert6User: false,
        subscriptionAutoRenewStatus: "autoRenewOff",
        isInGracePeriod: false
      });
    }
  } catch (e) {
    console.log(e);
  }
}

$done(result);
