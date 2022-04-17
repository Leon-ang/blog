---
title: js基础操作
date: 2020-05-29
---
请叫我帅比

# Date对象的使用

### 1、获取日期

var date = new Date();//new一个时间对象

var year = date.getFullYear(); //获取今年

var month = date.getMonth(); //获取当前月份 0-11 最好+1

var dates = date.getDate(); //获取当前几号

var day = date.getDay(); //获取今天周几 周末的下标是0 是从周末开始的

附赠: 将获取到的阿拉伯数字改成国内大写数字

var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

console.log('今天是' + year + '年' + month + '月' + dates + '日' + arr[day]);

### 2、获取格式化时间

function getTime() {

 var date = new Date();

 var h = date.getHours();

 var m = date.getMonth();

 var s = date.getSeconds();

 h = h < 10 ? '0' + h : h;

 m = m < 10 ? '0' + m : m;

 s = s < 10 ? '0' + s : s;

 return h + ':' + m + ':' + s;

}

 console.log(getTime());

### 3、获取从现在到1970年1月1号

console.log(Date.now());

# Math的使用

### 1、圆周率

console.log(Math.PI);

### 2、最大值和最小值

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));//最大值

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));//取最小值

数组取最大值

var arr = [9, 342, 4563, 2345, 6, 23];

console.log(Math.max(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]));

### 3、绝对值

console.log(Math.abs(-123));

### 4、向上取整和向下取整

console.log(Math.ceil(1.5));

console.log(Math.floor(1.5));

### 5、取绝对值和三个取整的方法

console.log(Math.abs(-100));//取绝对值

console.log(Math.floor(1.3));//向下取整

console.log(Math.ceil(1.3));//向上取整

console.log(Math.round(1.3));//四舍五入

### 6、取随机数

Math.random();//取0~1(但不包含1)的一个随机小数

附赠: 1~10之间的随机整数

取传进的两个数字的之间的数

function fun(max, min) {

 return Math.floor(Math.random() * (max - min + 1) + min);

 }

# 数组常规基础操作

### 1、创建数组的两种方式

1. 第一种

var arr = new Array();

arr[0] = 1;

arr[1] = 2;

arr[2] = 3;

通过下标往数组中添加数据

console.log(arr);//打印在控制台

1. 第二种

var arr2 = [1, 2, 3];

console.log(arr2);

### 2、检测数组

var arr = [1, 2, 3];

var obj = {};

//typeof 检测数据类型 数组上不合适

console.log(typeof arr);

console.log(typeof obj);

console.log('-------------');

//instanceof 检测是否为数组

console.log(arr instanceof Array);

console.log(obj instanceof Array);

console.log('-------------');

// object.prototype.tostring.call 可以检查所有数据类型

console.log(Object.prototype.toString.call(arr));

console.log(Object.prototype.toString.call(obj));

### 3、添加删除数组元素方法

var arr = [1, 2, 3, 4];

//1. push方法：在数组后面添加元素，返回添加后的长度

console.log(arr.push(5, 6));

console.log(arr);

console.log('-----------');

//2. unshift方法：在数组的前面添加元素，返回添加后的数组长度

console.log(arr.unshift(0));

console.log(arr);

console.log('-----------');

//3. pop方法：删除数组的最后一位，返回被删除的数据

console.log(arr.pop());

console.log(arr);

console.log('-----------');

//4. shift方法：删除数组的第0位，返回被删除的数据

console.log(arr.shift());

console.log(arr);

console.log('-----------');

### 4、数组排序

var arr = [1, 4, 2, 3, 6, 7, 8, 9];

//1. 翻转数组: reverse()

console.log(arr.reverse());

console.log('----------------');

//2. 数组的排序: sort()

console.log(arr.sort(function(a, b) {

 return a - b;

}));

//3. indexOf: 获取数据在数组中对应的下标，如果不存在返回-1

console.log(arr.indexOf(4));

console.log(arr.indexOf(123));

### 5、数组去重

将arr数组中的字符遍历放入到新的数组中，且判断新的数组中是否以存在，存在则不放入

var arr = ['leon', 'leon', 'gl', 'hh', 'gl', 'mm', 'jm', 'hh'];

function getArr(arr) {

var newArr = [];

for (var i = 0; i < arr.length; i++) {

 if (newArr.indexOf(arr[i]) === -1) {

 newArr.push(arr[i]);

 }

}

 return newArr;

}

console.log(getArr(arr));

### 6、将数组转换为字符串

var arr = [1, 2, 3, 4, 5, 6];

console.log(arr.toString()); //将数组转换为字符串

# 字符串对象的使用

字符串的恒定性：不管你对一个字符串做任何操作，对原来的字符串都不会有影响，会在内存中开辟新的空间来保存修改后的值

### 1、根据字符返回位置(即下标)

var str = 'waqkdhaiofhaskgf‘;

var index = str.indexOf('h');//获取h字符在字符串中的下标

### 2、根据下标获取字符

var str = 'leon';

//1. 直接利用[下标],把字符串看做是数组(伪数组)

console.log(str[3]);

//2. charAt()

console.log(str.charAt(3));

//3. charCodeAt()----->先了解,返回ASCII码表

console.log(str.charCodeAt(3)); //110 代表在ASCII码表中的n

### 3、获得字符串中每个字符出现的次数，并且求出其中的最大值

<script>

    var str = 'acbdfghdffrqwr';

    var strObj = {};

    for (var i = 0; i < str.length; i++) {

        var chars = str.charAt(i);

        if (strObj[chars]) {

            strObj[chars]++;

        } else {

            strObj[chars] = 1;

        }

    }

    console.log(strObj);

</script>

### 4、字符串操作

1、concat//合并多个字符串(相当于+)或者合并数组

2、substr(‘截取的起始位置’,‘截取几个字符’);

var str = 'leon,ad,ap,mt';

console.log(str.substr(4,2));//从下标4开始，截取两个字符

console.log(str.substr(2));//从下标2开始，把后面的字符都截取出来

3、str.replace('0','1');//将字符串中的o转换成1(注意该代码一次只能改一个字符，如果需要修改多个则需要遍历)

4、split:将字符串转成数组

var str2 = 'leon,gl,hh,mm,jm';//字符串以逗号分割则下面填写逗号

console.log(str2.split(','));//每个元素以逗号隔开(如果不写分割号则会以一个元素展示全部
