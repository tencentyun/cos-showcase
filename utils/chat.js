var endlessSend = true;
var isSending = false;

function sendQRCode(mediaName) {
  if (isSending) {
    return;
  }
  endlessSend = true;
  internalSend(mediaName)
}

function internalSend(mediaName) {
  isSending = true;
  wx.cloud.callFunction({
    name: "chat",
    data: {
      mediaName: mediaName
    },
    success: res => {
      console.log("发送二维码成功", res.result)
      isSending = false;
    },
    fail: err => {
      console.log(err)
      const errCode = err.errCode
      if ((errCode == 45015 || errCode == 45047 || errCode == -1 || errCode == -404011) && endlessSend) {
        setTimeout(function () {
          if (endlessSend) {
            internalSend(mediaName);
          } else {
            isSending = false;
          }
        }, 500)
      } else {
        isSending = false;
      }
    }
  })
}

function quitEndlessSend() {
  endlessSend = false;
}


module.exports = {
  sendQRCode: sendQRCode,
  quitEndlessSend: quitEndlessSend
}