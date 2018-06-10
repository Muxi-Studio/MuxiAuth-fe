//设置cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  exdays = exdays || 365;
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString() + ";path = /";
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}
//清除cookie
function clearCookie(name) {
  setCookie(name, "", -1);
}

//删除cookie
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie =
      name + "=" + cval + ";expires=" + exp.toGMTString() + ";path = /";
}

function checkCookie(val) {
  var key = getCookie(val);
  if (key) {
    return key;
  } else {
    return false;
  }
}

function getToken() {
  var auth = {};
  if (cookie.getCookie("token")) {
    var token = btoa(cookie.getCookie("token") + ":");
    //var token = cookie.getCookie("token");
    var auth = { Authorization: "Basic " + token };
  }
  return auth;
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

var cookie = {
  setCookie: setCookie,
  getCookie: getCookie,
  clearCookie: clearCookie,
  checkCookie: checkCookie,
  getToken: getToken,
  getQueryString: getQueryString,
  delCookie: delCookie
};
module.exports = cookie;
