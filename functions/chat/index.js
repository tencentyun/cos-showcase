// 云函数入口文件
const cloud = require('wx-server-sdk')
const fs = require('fs')

const mediaIds = {
  'official_qrCode': 'XweXGE-osewvxKMePYrj3RYk4R9V9XuLJM_zKMcCv-pxwpVZWMGMtmZfiTf_G737',
  'demo_qrCode': 'ZyVrNAyKZKRfKPknoAad5T-5u4xFaUnlLTo19VCC0Pbbw2WaB3iBjtiP7h8KIF1H'
} 

cloud.init()

function sleep(seconds) {
  return new Promise(done => setTimeout(done, seconds * 1000));
}

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function uploadMediaIfNecessary(mediaName) {
  const mediaId = mediaIds[mediaName];
  try {
    const result = await cloud.openapi.customerServiceMessage.getTempMedia({
      mediaId: mediaId
    })
    console.log("getTempMedia = ", result)
    if (result.errCode == 0) {
      return mediaId
    }
  } catch (err) {
    // no such media
  }
  try {
    const data = await readFile(mediaName + '.jpg')
    const upload = await cloud.openapi.customerServiceMessage.uploadTempMedia({
      type: 'image',
      media: {
        contentType: 'image/jpeg',
        value: data
      }
    })
    console.log("uploadTempMedia = ", upload)
    if (upload.errCode == 0) {
      return upload.mediaId
    } else {
      throw Error(upload.errMsg)
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const mediaName = event.mediaName
    const mediaId = await uploadMediaIfNecessary(mediaName)
    console.log('media id = ', mediaId)
    await sleep(0.5)
    var result;
    var error;
    for (var i = 0; i < 5; i++) {
      var errCode = -1;

      try {
        // result 结构
        // { errCode: 0, errMsg: 'openapi.customerServiceMessage.send:ok' }
        result = await cloud.openapi.customerServiceMessage.send({
          touser: cloud.getWXContext().OPENID, // 通过 getWXContext 获取 OPENID
          msgtype: 'image',
          image: {
            mediaId: mediaId
          }
        })
        console.log(result)
        errCode = result.errCode
      } catch (err) {
        console.log(err)
        error = err
        errCode = err.errCode
      }

      console.log('errCode = ', errCode)
      if (errCode == 45015 || errCode == 45047 || errCode == -1) {
        await sleep(1)
      } else {
        break
      }
    }
    if (error) {
      throw error
    } else {
      return result
    }
  } catch (err) {
    console.log("final error = ", err)
    throw err
  }
}