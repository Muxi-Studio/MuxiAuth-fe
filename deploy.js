var qiniu = require("qiniu");
//需要填写你的 Access Key 和 Secret Key
console.log(qiniu.conf)
qiniu.conf.UP_HOST = "http://up-na0.qiniu.com"
qiniu.conf.UP_HTTPS_HOST = "https://up-na0.qbox.me"
qiniu.conf.ACCESS_KEY = process.env.Access_Key
qiniu.conf.SECRET_KEY = process.env.Secret_Key
//要上传的空间
var bucket = 'ccnustatic';
//上传到七牛后保存的文件名
var key = 'muxiauthfe/' + Date.now() + '.tar';
//构建上传策略函数
function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}
//生成上传 Token
var token = uptoken(bucket, key);
//要上传文件的本地路径
var filePath = './bundle.tar'
//构造上传函数
function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log("url: http://static.muxixyz.com/" + key);       
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}
//调用uploadFile上传
uploadFile(token, key, filePath);