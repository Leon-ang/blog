(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{480:function(_,v,r){"use strict";r.r(v);var a=r(481),t=r.n(a);for(var o in a)["default"].indexOf(o)<0&&function(_){r.d(v,_,(function(){return a[_]}))}(o);v.default=t.a},481:function(_,v){for(var r="acbdfghdffrqwr",a={},t=0;t<r.length;t++){var o=r.charAt(t);a[o]?a[o]++:a[o]=1}console.log(a)},558:function(_,v,r){"use strict";r.d(v,"a",(function(){return a})),r.d(v,"b",(function(){return t}));var a=function(){var _=this,v=_.$createElement,r=_._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("p",[_._v("请叫我帅比")]),_._v(" "),r("h1",{attrs:{id:"date对象的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#date对象的使用"}},[_._v("#")]),_._v(" Date对象的使用")]),_._v(" "),r("h3",{attrs:{id:"_1、获取日期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取日期"}},[_._v("#")]),_._v(" 1、获取日期")]),_._v(" "),r("p",[_._v("var date = new Date();//new一个时间对象")]),_._v(" "),r("p",[_._v("var year = date.getFullYear(); //获取今年")]),_._v(" "),r("p",[_._v("var month = date.getMonth(); //获取当前月份 0-11 最好+1")]),_._v(" "),r("p",[_._v("var dates = date.getDate(); //获取当前几号")]),_._v(" "),r("p",[_._v("var day = date.getDay(); //获取今天周几 周末的下标是0 是从周末开始的")]),_._v(" "),r("p",[_._v("附赠: 将获取到的阿拉伯数字改成国内大写数字")]),_._v(" "),r("p",[_._v("var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];")]),_._v(" "),r("p",[_._v("console.log('今天是' + year + '年' + month + '月' + dates + '日' + arr[day]);")]),_._v(" "),r("h3",{attrs:{id:"_2、获取格式化时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、获取格式化时间"}},[_._v("#")]),_._v(" 2、获取格式化时间")]),_._v(" "),r("p",[_._v("function getTime() {")]),_._v(" "),r("p",[_._v("var date = new Date();")]),_._v(" "),r("p",[_._v("var h = date.getHours();")]),_._v(" "),r("p",[_._v("var m = date.getMonth();")]),_._v(" "),r("p",[_._v("var s = date.getSeconds();")]),_._v(" "),r("p",[_._v("h = h < 10 ? '0' + h : h;")]),_._v(" "),r("p",[_._v("m = m < 10 ? '0' + m : m;")]),_._v(" "),r("p",[_._v("s = s < 10 ? '0' + s : s;")]),_._v(" "),r("p",[_._v("return h + ':' + m + ':' + s;")]),_._v(" "),r("p",[_._v("}")]),_._v(" "),r("p",[_._v("console.log(getTime());")]),_._v(" "),r("h3",{attrs:{id:"_3、获取从现在到1970年1月1号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、获取从现在到1970年1月1号"}},[_._v("#")]),_._v(" 3、获取从现在到1970年1月1号")]),_._v(" "),r("p",[_._v("console.log(Date.now());")]),_._v(" "),r("h1",{attrs:{id:"math的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#math的使用"}},[_._v("#")]),_._v(" Math的使用")]),_._v(" "),r("h3",{attrs:{id:"_1、圆周率"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、圆周率"}},[_._v("#")]),_._v(" 1、圆周率")]),_._v(" "),r("p",[_._v("console.log(Math.PI);")]),_._v(" "),r("h3",{attrs:{id:"_2、最大值和最小值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、最大值和最小值"}},[_._v("#")]),_._v(" 2、最大值和最小值")]),_._v(" "),r("p",[_._v("console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));//最大值")]),_._v(" "),r("p",[_._v("console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));//取最小值")]),_._v(" "),r("p",[_._v("数组取最大值")]),_._v(" "),r("p",[_._v("var arr = [9, 342, 4563, 2345, 6, 23];")]),_._v(" "),r("p",[_._v("console.log(Math.max(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]));")]),_._v(" "),r("h3",{attrs:{id:"_3、绝对值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、绝对值"}},[_._v("#")]),_._v(" 3、绝对值")]),_._v(" "),r("p",[_._v("console.log(Math.abs(-123));")]),_._v(" "),r("h3",{attrs:{id:"_4、向上取整和向下取整"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、向上取整和向下取整"}},[_._v("#")]),_._v(" 4、向上取整和向下取整")]),_._v(" "),r("p",[_._v("console.log(Math.ceil(1.5));")]),_._v(" "),r("p",[_._v("console.log(Math.floor(1.5));")]),_._v(" "),r("h3",{attrs:{id:"_5、取绝对值和三个取整的方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、取绝对值和三个取整的方法"}},[_._v("#")]),_._v(" 5、取绝对值和三个取整的方法")]),_._v(" "),r("p",[_._v("console.log(Math.abs(-100));//取绝对值")]),_._v(" "),r("p",[_._v("console.log(Math.floor(1.3));//向下取整")]),_._v(" "),r("p",[_._v("console.log(Math.ceil(1.3));//向上取整")]),_._v(" "),r("p",[_._v("console.log(Math.round(1.3));//四舍五入")]),_._v(" "),r("h3",{attrs:{id:"_6、取随机数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、取随机数"}},[_._v("#")]),_._v(" 6、取随机数")]),_._v(" "),r("p",[_._v("Math.random();//取0~1(但不包含1)的一个随机小数")]),_._v(" "),r("p",[_._v("附赠: 1~10之间的随机整数")]),_._v(" "),r("p",[_._v("取传进的两个数字的之间的数")]),_._v(" "),r("p",[_._v("function fun(max, min) {")]),_._v(" "),r("p",[_._v("return Math.floor(Math.random() * (max - min + 1) + min);")]),_._v(" "),r("p",[_._v("}")]),_._v(" "),r("h1",{attrs:{id:"数组常规基础操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组常规基础操作"}},[_._v("#")]),_._v(" 数组常规基础操作")]),_._v(" "),r("h3",{attrs:{id:"_1、创建数组的两种方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建数组的两种方式"}},[_._v("#")]),_._v(" 1、创建数组的两种方式")]),_._v(" "),r("ol",[r("li",[_._v("第一种")])]),_._v(" "),r("p",[_._v("var arr = new Array();")]),_._v(" "),r("p",[_._v("arr[0] = 1;")]),_._v(" "),r("p",[_._v("arr[1] = 2;")]),_._v(" "),r("p",[_._v("arr[2] = 3;")]),_._v(" "),r("p",[_._v("通过下标往数组中添加数据")]),_._v(" "),r("p",[_._v("console.log(arr);//打印在控制台")]),_._v(" "),r("ol",[r("li",[_._v("第二种")])]),_._v(" "),r("p",[_._v("var arr2 = [1, 2, 3];")]),_._v(" "),r("p",[_._v("console.log(arr2);")]),_._v(" "),r("h3",{attrs:{id:"_2、检测数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、检测数组"}},[_._v("#")]),_._v(" 2、检测数组")]),_._v(" "),r("p",[_._v("var arr = [1, 2, 3];")]),_._v(" "),r("p",[_._v("var obj = {};")]),_._v(" "),r("p",[_._v("//typeof 检测数据类型 数组上不合适")]),_._v(" "),r("p",[_._v("console.log(typeof arr);")]),_._v(" "),r("p",[_._v("console.log(typeof obj);")]),_._v(" "),r("p",[_._v("console.log('-------------');")]),_._v(" "),r("p",[_._v("//instanceof 检测是否为数组")]),_._v(" "),r("p",[_._v("console.log(arr instanceof Array);")]),_._v(" "),r("p",[_._v("console.log(obj instanceof Array);")]),_._v(" "),r("p",[_._v("console.log('-------------');")]),_._v(" "),r("p",[_._v("// object.prototype.tostring.call 可以检查所有数据类型")]),_._v(" "),r("p",[_._v("console.log(Object.prototype.toString.call(arr));")]),_._v(" "),r("p",[_._v("console.log(Object.prototype.toString.call(obj));")]),_._v(" "),r("h3",{attrs:{id:"_3、添加删除数组元素方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加删除数组元素方法"}},[_._v("#")]),_._v(" 3、添加删除数组元素方法")]),_._v(" "),r("p",[_._v("var arr = [1, 2, 3, 4];")]),_._v(" "),r("p",[_._v("//1. push方法：在数组后面添加元素，返回添加后的长度")]),_._v(" "),r("p",[_._v("console.log(arr.push(5, 6));")]),_._v(" "),r("p",[_._v("console.log(arr);")]),_._v(" "),r("p",[_._v("console.log('-----------');")]),_._v(" "),r("p",[_._v("//2. unshift方法：在数组的前面添加元素，返回添加后的数组长度")]),_._v(" "),r("p",[_._v("console.log(arr.unshift(0));")]),_._v(" "),r("p",[_._v("console.log(arr);")]),_._v(" "),r("p",[_._v("console.log('-----------');")]),_._v(" "),r("p",[_._v("//3. pop方法：删除数组的最后一位，返回被删除的数据")]),_._v(" "),r("p",[_._v("console.log(arr.pop());")]),_._v(" "),r("p",[_._v("console.log(arr);")]),_._v(" "),r("p",[_._v("console.log('-----------');")]),_._v(" "),r("p",[_._v("//4. shift方法：删除数组的第0位，返回被删除的数据")]),_._v(" "),r("p",[_._v("console.log(arr.shift());")]),_._v(" "),r("p",[_._v("console.log(arr);")]),_._v(" "),r("p",[_._v("console.log('-----------');")]),_._v(" "),r("h3",{attrs:{id:"_4、数组排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、数组排序"}},[_._v("#")]),_._v(" 4、数组排序")]),_._v(" "),r("p",[_._v("var arr = [1, 4, 2, 3, 6, 7, 8, 9];")]),_._v(" "),r("p",[_._v("//1. 翻转数组: reverse()")]),_._v(" "),r("p",[_._v("console.log(arr.reverse());")]),_._v(" "),r("p",[_._v("console.log('----------------');")]),_._v(" "),r("p",[_._v("//2. 数组的排序: sort()")]),_._v(" "),r("p",[_._v("console.log(arr.sort(function(a, b) {")]),_._v(" "),r("p",[_._v("return a - b;")]),_._v(" "),r("p",[_._v("}));")]),_._v(" "),r("p",[_._v("//3. indexOf: 获取数据在数组中对应的下标，如果不存在返回-1")]),_._v(" "),r("p",[_._v("console.log(arr.indexOf(4));")]),_._v(" "),r("p",[_._v("console.log(arr.indexOf(123));")]),_._v(" "),r("h3",{attrs:{id:"_5、数组去重"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、数组去重"}},[_._v("#")]),_._v(" 5、数组去重")]),_._v(" "),r("p",[_._v("将arr数组中的字符遍历放入到新的数组中，且判断新的数组中是否以存在，存在则不放入")]),_._v(" "),r("p",[_._v("var arr = ['leon', 'leon', 'gl', 'hh', 'gl', 'mm', 'jm', 'hh'];")]),_._v(" "),r("p",[_._v("function getArr(arr) {")]),_._v(" "),r("p",[_._v("var newArr = [];")]),_._v(" "),r("p",[_._v("for (var i = 0; i < arr.length; i++) {")]),_._v(" "),r("p",[_._v("if (newArr.indexOf(arr[i]) === -1) {")]),_._v(" "),r("p",[_._v("newArr.push(arr[i]);")]),_._v(" "),r("p",[_._v("}")]),_._v(" "),r("p",[_._v("}")]),_._v(" "),r("p",[_._v("return newArr;")]),_._v(" "),r("p",[_._v("}")]),_._v(" "),r("p",[_._v("console.log(getArr(arr));")]),_._v(" "),r("h3",{attrs:{id:"_6、将数组转换为字符串"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、将数组转换为字符串"}},[_._v("#")]),_._v(" 6、将数组转换为字符串")]),_._v(" "),r("p",[_._v("var arr = [1, 2, 3, 4, 5, 6];")]),_._v(" "),r("p",[_._v("console.log(arr.toString()); //将数组转换为字符串")]),_._v(" "),r("h1",{attrs:{id:"字符串对象的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串对象的使用"}},[_._v("#")]),_._v(" 字符串对象的使用")]),_._v(" "),r("p",[_._v("字符串的恒定性：不管你对一个字符串做任何操作，对原来的字符串都不会有影响，会在内存中开辟新的空间来保存修改后的值")]),_._v(" "),r("h3",{attrs:{id:"_1、根据字符返回位置-即下标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、根据字符返回位置-即下标"}},[_._v("#")]),_._v(" 1、根据字符返回位置(即下标)")]),_._v(" "),r("p",[_._v("var str = 'waqkdhaiofhaskgf‘;")]),_._v(" "),r("p",[_._v("var index = str.indexOf('h');//获取h字符在字符串中的下标")]),_._v(" "),r("h3",{attrs:{id:"_2、根据下标获取字符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、根据下标获取字符"}},[_._v("#")]),_._v(" 2、根据下标获取字符")]),_._v(" "),r("p",[_._v("var str = 'leon';")]),_._v(" "),r("p",[_._v("//1. 直接利用[下标],把字符串看做是数组(伪数组)")]),_._v(" "),r("p",[_._v("console.log(str[3]);")]),_._v(" "),r("p",[_._v("//2. charAt()")]),_._v(" "),r("p",[_._v("console.log(str.charAt(3));")]),_._v(" "),r("p",[_._v("//3. charCodeAt()-----\x3e先了解,返回ASCII码表")]),_._v(" "),r("p",[_._v("console.log(str.charCodeAt(3)); //110 代表在ASCII码表中的n")]),_._v(" "),r("h3",{attrs:{id:"_3、获得字符串中每个字符出现的次数-并且求出其中的最大值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、获得字符串中每个字符出现的次数-并且求出其中的最大值"}},[_._v("#")]),_._v(" 3、获得字符串中每个字符出现的次数，并且求出其中的最大值")]),_._v(" "),r("h3",{attrs:{id:"_4、字符串操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、字符串操作"}},[_._v("#")]),_._v(" 4、字符串操作")]),_._v(" "),r("p",[_._v("1、concat//合并多个字符串(相当于+)或者合并数组")]),_._v(" "),r("p",[_._v("2、substr(‘截取的起始位置’,‘截取几个字符’);")]),_._v(" "),r("p",[_._v("var str = 'leon,ad,ap,mt';")]),_._v(" "),r("p",[_._v("console.log(str.substr(4,2));//从下标4开始，截取两个字符")]),_._v(" "),r("p",[_._v("console.log(str.substr(2));//从下标2开始，把后面的字符都截取出来")]),_._v(" "),r("p",[_._v("3、str.replace('0','1');//将字符串中的o转换成1(注意该代码一次只能改一个字符，如果需要修改多个则需要遍历)")]),_._v(" "),r("p",[_._v("4、split:将字符串转成数组")]),_._v(" "),r("p",[_._v("var str2 = 'leon,gl,hh,mm,jm';//字符串以逗号分割则下面填写逗号")]),_._v(" "),r("p",[_._v("console.log(str2.split(','));//每个元素以逗号隔开(如果不写分割号则会以一个元素展示全部")])])},t=[]},559:function(_,v,r){"use strict";r.r(v);var a=r(558),t=r(480);for(var o in t)["default"].indexOf(o)<0&&function(_){r.d(v,_,(function(){return t[_]}))}(o);var e=r(13),s=Object(e.a)(t.default,a.a,a.b,!1,null,null,null);v.default=s.exports}}]);