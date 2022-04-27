---
title: 日期转换方法集合
date: 2022-04-27
---
```javascript
// 格式化日期函数
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ""
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function reTime(value, format) {
  function padLeftZero(str) {
    return ("00" + str).substr(str.length)
  }
  function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ""
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
      }
    }
    return fmt
  }
  if (!value) return ""
  format = format || "yyyy-MM-dd hh:mm:ss"
  return formatDate(new Date(value), format)
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length)
}
// 日期转换为Number
function DateToNumber(date) {
  let dateNum = date.replace(/-/g, "")
  return dateNum
}

// Number转换为日期
function NumberToDate(number) {
  // (typeof (number) =="number")
  let num = number.toString()
  let result = num.slice(0, 4) + "-" + num.slice(4, 6) + "-" + num.slice(6, 8)
  return result
}
/**
     * 转换成正常时间
     * @param {*} format
     */
function timestampToTime(format) {
  var date = new Date(format)
  var y = 1900 + date.getYear()
  var m = "0" + (date.getMonth() + 1)
  var d = "0" + date.getDate()
  return (
    y +
     "-" +
     m.substring(m.length - 2, m.length) +
     "-" +
     d.substring(d.length - 2, d.length)
  )
}
/**
 * 获取一段时间
 * @param {*} type day:当天; preWeek:上个星期; nowWeek:这个星期; nowMonth: 当前月
 */
function getAperiodOfTime(type) {
  const nowData = new Date()
  let time = []
  switch (type) {
    case "day":
      time = [
        new Date(),
        new Date()
      ]
      break
    case "preWeek":
      time = [
        new Date(nowData.setDate(nowData.getDate() - nowData.getDay() - 6)),
        new Date(nowData.setDate(nowData.getDate() - nowData.getDay() + 7)) // 这里+7是因为这里的nowDate变为了上周一的时间
      ]
      break
    case "nowWeek":
      time = [
        new Date(nowData.setDate(nowData.getDate() - nowData.getDay() + 1)),
        new Date(nowData.setDate(nowData.getDate() - nowData.getDay() + 7)) // 这里+7的原因同上
      ]
      break
    case "nowMonth":
      const nextMonth = new Date()
      nextMonth.setDate(1)
      nextMonth.setMonth(nextMonth.getMonth() + 1)
      time = [
        new Date(nowData.setDate(1)),
        new Date(nextMonth - 60 * 60 * 24 * 1000)
      ]
      break
    default:
      break
  }
  return time
}
function add0(m) {
  return m < 10 ? "0" + m : m
}
/*
  timestampToTime 时间戳转换时间
*/
function timestampToTime2(timestamp) {
  var time = new Date(timestamp)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  return (
    y +
    "-" +
    add0(m) +
    "-" +
    add0(d) +
    " " +
    add0(h) +
    ":" +
    add0(mm) +
    ":" +
    add0(s)
  )
}
```
