let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer I5JHQNOsLGGa4aTo3GirxbnPKF3Z");

fetch("https://sandbox.safaricom.co.ke/mpesa/b2c/v3/paymentrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "OriginatorConversationID": "a6e27425-b702-49a2-aad4-f147124ad37f",
    "InitiatorName": "testapi",
    "SecurityCredential": "H28JJ7bFAtb/1WOgsT/4Z+0dj3fmqAwDep6jwdTSxCCbub/07OLaho1Qgsv8rqBycdHBgYu58HfsfqbIwYWDCZtkk9K7I5HA6KWiohF2Y2SpVudxMi+kH63nV0izfRiEF2d3fv24w6BwypyLqCLPNnBrrA0ge7Zzdt1L1SuX5IFn713qGnX9iI0WuIDCGNrXiY4oi4lkQViQqmVuW6d9Ay+UIxZ1mae0NFhsZWqNHDt/yP+sOq/dyBL+g+RVodt5dSPkY6I4bHe1PbWzwfGowA5IlXmPjY/NHUHCgoRPKHeVul+MNV3Zy18fQqgGCv7xbgdeYHFXWcDx9sZj/2X+SA==",
    "CommandID": "BusinessPayment",
    "Amount": 10,
    "PartyA": 600978,
    "PartyB": 254708374149,
    "Remarks": "Test remarks",
    "QueueTimeOutURL": "https://mydomain.com/b2c/queue",
    "ResultURL": "https://mydomain.com/b2c/result",
    "Occasion": "offers",
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));