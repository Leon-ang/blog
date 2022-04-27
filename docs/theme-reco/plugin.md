---
title: 验证常用规则
date: 2022-04-27
---
```javascript
/**
  * 除空格和中文之外的正则校验
  * @param rule
  * @param value
  * @param callback
  */
  noChinese(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let reg = /^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]{0,}$/
    if (!reg.test(value)) {
      callback(new Error('该输入项有空格或中文'))
    }
    callback()
  },

  /**
     * 身份证校验
     * @param rule
     * @param value
     * @param callback
     * @constructor
     */
  isIDCard(rule, value, callback) {
    const city = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江 ',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北 ',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏 ',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外 '
    }
    const reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/
    let province = value.substr(0, 2)
    // 是否为空
    if (value === '') {
      callback(new Error('身份证号不能为空'))
    }
    // 校验长度，类型
    if (!reg.test(value)) {
      callback(new Error('您输入的身份证号码不正确，请重新输入'))
    }
    // 检查省份
    if (city[province] === undefined) {
      callback(new Error('您输入的身份证号码不正确,请重新输入'))
    }
    callback()
  },
  /**
     * 身份证校验
     * @param rule
     * @param value
     * @param callback
     */
  perfectIdCard(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的证件号码'))
    }
    callback()
  },
  cardType(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let regtwo = /^[0-9A-Z]{1,22}$/
    if (!regtwo.test(value)) {
      callback(new Error('请输入正确的证件号码'))
    }
  },
  /**
     * 邮箱校验
     * @param rule
     * @param value
     * @param callback
     */
  isEmail(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    const reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
    if (!reg.test(value)) {
      callback(new Error('您输入的邮箱地址不正确，请重新输入'))
    }
    callback()
  },

  /**
     * 手机号码校验
     * @param rule
     * @param value
     * @param callback
     */
  mobile(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    const reg = /^1[3456789][0-9]\d{8}$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的手机号码'))
    }
    callback()
  },
  /**
    *金额校验
    * @param rule
    * @param value
    * @param callback
    */
  newMoney(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    const reg = /^(\d+\.\d{1,2})$/
    if (!reg.test(value) || Number(value) > Number(100000000)) {
      callback(new Error('请输入正确的金额(小数点2位,最大一亿)'))
    }
    callback()
  },
  /**
   *数字或英文字母校验
   * @param rule
   * @param value
   * @param callback
   */
  numCodeReg(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    // ^[A-Za-z0-9\\-]+$
    const reg = /^[A-Za-z0-9\\-]+$/
    if (!reg.test(value)) {
      callback(new Error('请输入数字或英文字母'))
    }
    callback()
  },
  /**
     * 是否六位行政区划
     * @param rule
     * @param value
     * @param callback
     */
  isRegionCode(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    const reg = /^[0-9]+$/
    if (!reg.test(value) || value.length !== 6) {
      callback(new Error('请输入正确的行政区划'))
    }
    callback()
  },


  /**
    * 手机号码和固定电话校验
    * @param rule
    * @param value
    * @param callback
    */
  phone(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let reg = /(^\d{3}\-\d{7,8}$)|(^\d{4}\-\d{7,8}$)|(^\d{3}\d{7,8}$)|(^\d{4}\d{7,8}$)|(^\d{7,8}$)|(^\d{3}\-\d{7,8}\-\d+$)|(^\d{4}\-\d{7,8}\-\d+$)|(^\d{3}\d{7,8}\-\d+$)|(^\d{4}\d{7,8}\-\d+$)|(^\d{7,8}\-\d+$)/
    let phone = /^1[3456789][0-9]\d{8}$/// 手机号

    if (reg.test(value) || phone.test(value)) {
    } else {
      callback(new Error('请输入正确的联系方式'))
    }
    callback()
  },
  /**
    * 工资校验
    * @param rule
    * @param value
    * @param callback
   */
  salary(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    const reg = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的金额'))
    }
    callback()
  },


  /**
     * 数字校验
     * @param rule
     * @param value
     * @param callback
     */
  num(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^\d+$/.test(value)) {
      callback(new Error('该输入项只允许为0-9的数字'))
    }
    callback()
  },

  num_two(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let reg = /^[1-9]\d*$/
    if (!reg.test(value[1]) || !reg.test(value[0])) {
      callback(new Error('请正确输入月份'))
    }
    callback()
  },
  // 0-1不超过两位小数
  num_zero(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    // 0-1不超过两位小数
    let reg = /^(0(\.\d{1,2})?|1(\.0{1,2})?)$/
    if (!reg.test(value)) {
      callback(new Error('该输入项只允许为0-1的数字(不得超过两位小数)'))
    }
    callback()
  },
  is083(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(value)) {
      callback(new Error('该输入项只允许输入数字'))
    } else if (value > 3 || value < 0.6) {
      callback(new Error('该输入项您输入的缴费基数比例不对，应该是0.6-3'))
    }
    callback()
  },
  is055(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(value)) {
      callback(new Error('该输入项只允许输入数字'))
    } else if (value > 3 || value < 0.55) {
      callback(new Error('该输入项您输入的缴费基数比例不对，应该是0.55-3'))
    }
    callback()
  },
  /**
    * 不超过100年认证
    * @param rule
    * @param value
    * @param callback
    */
  isYears(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^\d+$/.test(value)) {
      callback(new Error('该输入项只允许输入数字'))
    } else if (value > 100) {
      callback(new Error('该输入项不能超过100'))
    }
    callback()
  },

  /**
   * 数字大于0认证
   * @param rule
   * @param value
   * @param callback
   */
  isNum_0(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(value) || value <= 0) {
      callback(new Error('该输入项只允许输入大于0的数字'))
    }
    callback()
  },

  /**
  * 不超过500认证
  * @param rule
  * @param value
  * @param callback
  */
  is500(rule, value, callback) {
    console.log(value)
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^\d+$/.test(value)) {
      callback(new Error('该输入项只允许输入数字'))
    } else if (value > 500) {
      callback(new Error('该输入项不能超过500'))
    }
    callback()
  },
  /**
    * 月份认证
    * @param rule
    * @param value
    * @param callback
    */
  isMonth(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^\d+$/.test(value)) {
      callback(new Error('该输入项只允许输入数字'))
    } else if (value >= 12) {
      callback(new Error('该输入项不能超过11'))
    }
    callback()
  },
  /**
   * 银行账号校验，只能输入数字或横杠-
   * @param rule
   * @param value
   * @param callback
   */
  bankNumber(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (value && !/^[\d\-]+$/.test(value)) {
      callback(new Error('该输入项存在特殊字符'))
    }
    callback()
  },
  /**
     *金额校验（最多两位小数的实数）
     * @param rule
     * @param value
     * @param callback
     */
  numx(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(value)) {
      callback(new Error('请输入最多两位小数的实数'))
    }
    callback()
  },
  /**
*发票张数
* @param rule
* @param value
* @param callback
*/
  invoice(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    // const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;、
    const reg = /^(500|[1-4]{0,1}\d{0,1}\d)$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的张数(0-500)'))
    }
    callback()
  },
  /**
*金额校验
* @param rule
* @param value
* @param callback
*/
  money(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    const reg = /(^([-]?)[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^([-]?)(0){1}$)|(^([-]?)[0-9]\.[0-9]([0-9])?$)/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的金额(小数点后最多2位)'))
    }
    callback()
  },
  // 可以输入数字，1位小数，2位小数
  money1(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    const reg = /^[0-9]+(.?[0-9]{1,2})?$/
    if (!reg.test(value)) {
      callback(new Error('请输入正确的金额'))
    }
    callback()
  },
  /**
*金额校验
* @param rule
* @param value
* @param callback
*/
  wanMoney(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (value.indexOf('.') > 0) {
      if (value.indexOf('.') === (value.length - 1)) {
        callback(new Error('请输入正确的金额(小数点后最多6位)'))
      }
    }
    callback()
  },
  /**
   * 整数校验
   * @param rule
   * @param value
   * @param callback
   */
  moneyNum(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    const reg = /^[0-9]+(.?[0]{1,2})?$/
    const reg1 = /^\d+$/
    if (!(reg.test(value) || reg1.test(value))) {
      callback(new Error('请输入整数金额'))
    }
    callback()
  },

  /**
     * 年龄
     * @param rule
     * @param value
     * @param callback
     */
  age(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!/^\d+$/.test(value)) {
      callback(new Error('年龄格式出错！！格式例如：20'))
    }
    callback()
  },

  /**
     * 邮政编码
     * @param rule
     * @param value
     * @param callback
     */
  postcode(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let reg = /^[0-9]\d{5}$/
    if (!reg.test(value)) {
      callback(new Error('该输入项目必须是邮政编码格式，例如：330101'))
    }
    callback()
  },

  /**
     *  IP地址验证
     * @param rule
     * @param value
     * @param callback
     */
  ip(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    if (!reg.test(value)) {
      callback(new Error('该输入项目必须是IP地址格式，例如：192.168.1.1'))
    }
    callback()
  },

  /**
     * 固定电话及小灵通
     * @param rule
     * @param value
     * @param callback
     */
  telephone(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let reg = /(^\d{3}\-\d{7,8}$)|(^\d{4}\-\d{7,8}$)|(^\d{3}\d{7,8}$)|(^\d{4}\d{7,8}$)|(^\d{7,8}$)|(^\d{3}\-\d{7,8}\-\d+$)|(^\d{4}\-\d{7,8}\-\d+$)|(^\d{3}\d{7,8}\-\d+$)|(^\d{4}\d{7,8}\-\d+$)|(^\d{7,8}\-\d+$)/
    if (!reg.test(value)) {
      callback(new Error('该输入项目必须是电话号码格式。'))
    }
    callback()
  },

  /**
     * 组织机构代码
     * @param rule
     * @param value
     * @param callback
     */
  inscode(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    let reg = /^([0-9A-Z]){9}$/
    if (!reg.test(value)) {
      callback(new Error('该输入项目必须是组织机构代码格式，例如：32082919X'))
    }
    callback()
  },

  /**
    * 证件号码
    * @param rule
    * @param value
    * @param callback
    */
  isId(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (isCardID(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的证件号码'))
    }
    callback()
  },
  /**
    * 证件号码不校验结尾是W
    * @param rule
    * @param value
    * @param callback
    */
  isIdNoW(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (checkIDCard(value) || checkCode15_two(value) || value.charAt(value.length - 1) === 'W') {
      callback()
    } else {
      callback(new Error('请输入正确的证件号码'))
    }
    callback()
  },
  isDate(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (checkDateYYYYMMDD(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的日期格式，如20010101'))
    }
    callback()
  },
  /**
    * 外国人护照
    * @param rule
    * @param value
    * @param callback
    */
  otherId(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (value.length === 9) {
      callback()
    } else {
      callback(new Error('请输入正确的证件号码'))
    }
    callback()
  },

  /**
  * 证件号码
  * @param rule
  * @param value
  * @param callback
  */
  feikuan(rule, value, callback) {
    callback()
  },

  /**
    * 证件号码
    * @param rule
    * @param value
    * @param callback
    */
  isInsuranceNumber(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (checkIDCard(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的社会保障号码'))
    }
    callback()
  },

  /**
 * 统一社会信用码
 * @param rule
 * @param value
 * @param callback
 */
  isCredit(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (CheckSocialCreditCode(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的统一社会信用代码'))
    }
    callback()
  },
  /**
   * 无校验
   * @param rule
   * @param value
   * @param callback
   */
  wu(rule, value, callback) {
    callback()
  },

  /**
     * 判断输入框第一个字符不能空格 已改
     * @param rule
     * @param value
     * @param callback
     */
  test_noBlank(rule, value, callback) {
    if (typeof (value) === 'object' && value.length === 2) {
      if (value[0] === '' || value[1] === '') {
        callback(new Error('必填项，不能为空'))
      }
    }
    if (typeof (value) === 'object' && value.length === 0) {
      callback(new Error('必填项，不能为空'))
    } else {
      if (!rule.required && !(value)) {
        callback()
      }
      if (value === '' || value == null) {
        callback(new Error('必填项，不能为空'))
      }
    }
    callback()
  },

  /**
   * 输入年限不能为0
   * @param rule
   * @param value
   * @param callback
   */
  test_noBlank_0(rule, value, callback) {
    if (typeof (value) === 'object' && value.length === 2) {
      if (value[0] === '' || value[1] === '') {
        callback(new Error('必填项，不能为空'))
      } else if (value[0] === '0' && value[1] === '0') {
        callback(new Error('不能为0'))
      }
    }
    if (typeof (value) === 'object' && value.length === 0) {
      callback(new Error('必填项，不能为空'))
    } else {
      if (!rule.required && !(value)) {
        callback()
      }
      if (value === '' || value == null) {
        callback(new Error('必填项，不能为空'))
      }
    }
    callback()
  },
  // 适用于下拉框，防止报错
  selecTest_noBlank(rule, value, callback) {
    if (typeof (value) === 'object') {
      callback(new Error('必填项，不能为空'))
    } else {
      if (!rule.required && !(value)) {
        callback()
      }
      if (value === '' || value == null) {
        callback(new Error('必填项，不能为空'))
      }
    }
    callback()
  },
  /**
     * 判断输入框第一个字符不能空格 已改
     * @param rule
     * @param value
     * @param callback
     */
  test_noBlank1(rule, value, callback) {
    if (value === '' || value == null) {
      callback(new Error('必填项，不能为空'))
    }
    if (typeof (value) === 'object' && value !== null && value.length === 2) {
      if (value[0] === '' || value[1] === '') {
        callback(new Error('必填项，不能为空'))
      }
    }
    if (typeof (value) === 'object' && value !== null && value.length === 0) {
      callback(new Error('必填项，不能为空'))
    } else {
      if (!rule.required && !(value)) {
        callback()
      }
    }
    callback()
  },
  // 先判断为空或null，dataRange类型不会报length错误
  test_noBlankNew(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (value === '' || value == null) {
      callback(new Error('必填项，不能为空'))
    } else {
      if (typeof (value) === 'object' && value.length === 2) {
        if (value[0] === '' || value[1] === '') {
          callback(new Error('必填项，不能为空'))
        }
      }
      if (typeof (value) === 'object' && value.length === 0) {
        callback(new Error('必填项，不能为空'))
      }
    }
    callback()
  },
  // 18位限制
  digit18(rule, value, callback) {
    if (value.length !== 18) {
      callback(new Error('请输入正确的统一社会信用代码'))
    }
    callback()
  },
  // 最多18位限制
  max18(rule, value, callback) {
    if (!value) {
      callback(new Error('请输入正确的统一社会信用代码'))
    }
    if (value.length > 18) {
      callback(new Error('请输入正确的统一社会信用代码'))
    }
    callback()
  },
  /**
     * 事故时间(暂时没用到)
     * @param rule
     * @param value
     * @param callback
     */
  test_time(rule, value, callback) {
    let timeDot = new Date(value.replace(/-/g, '/')).getTime()
    let _now = Date.now()
    let oneDays = 1 * 24 * 60 * 60 * 1000
    if (timeDot >= _now) {
      callback(new Error('事故时间不能晚于当日时间'))
    }
    if (timeDot + oneDays <= _now) {
      callback(new Error('事故时间不能早于24小时'))
    }
    if (!rule.required && !(value)) {
      callback()
    }
    if (value.value === '' || value.value == null) {
      callback(new Error('必填项，不能为空'))
    }
    callback()
  },
  checkYYYY(rule, value, callback) {
    if (rule.required && !(value)) {
      callback(new Error('必填项，不能为空'))
    }
    let nowDate = new Date(Vue.prototype.$currentDate)
    let year = nowDate.getFullYear().toString()
    if (!isBlank(value)) {
      if (value.length === 4) {
        if (year - value < 0) {
          callback(new Error('输入年度不得大于当前年度'))
        } else if (year - value > 50) {
          callback(new Error('请输入有效的年度'))
        }
      } else {
        callback(new Error('请输入合法的年度'))
      }
    }
    callback()
  },
  checkBetweenYYYY(rule, value, callback) {
    callback(new Error('开始年度不得大于结束年度'))
  },
  checkBetweenYYYY2(rule, value, callback) {
    callback(new Error('结束年度不得小于开始年度'))
  },
  checkYYYYMM(rule, value, callback) {
    if (rule.required && !(value)) {
      callback(new Error('必填项，不能为空'))
    }
    let nowDate = new Date(Vue.prototype.$currentDate)
    let year = nowDate.getFullYear().toString()
    var mon = nowDate.getMonth() + 1 < 10 ? ('0' + (nowDate.getMonth() + 1)).toString()
      : (nowDate.getMonth() + 1).toString()
    let currentYearMon = year + mon
    if (!isBlank(value)) {
      if (value.length === 6 && value.substr(4, 2) >= 1 && value.substr(4, 2) <= 12) {
        if (value > currentYearMon) {
          callback(new Error('输入年月不能晚于当前年月'))
        } else if ((year - value.substr(0, 4)) >= 50) {
          callback(new Error('请输入有效的日期'))
        }
      } else {
        callback(new Error('请输入合法的日期'))
      }
    }
    callback()
  },
  checkYYYYMMOver(rule, value, callback) {
    callback(new Error('开始年月和终止年月不能跨年'))
  },
  checkBetweenYYYYMM(rule, value, callback) {
    callback(new Error('开始年月不得大于终止年月'))
  },
  checkBetweenYYYYMM2(rule, value, callback) {
    callback(new Error('终止年月不得小于开始年月'))
  },
  checkYYYYMMDD(rule, value, callback) {
    if (rule.required && !(value)) {
      callback(new Error('必填项，不能为空'))
    }
    let nowDate = new Date(Vue.prototype.$currentDate)
    let year = nowDate.getFullYear().toString()
    var mon = nowDate.getMonth() + 1 < 10 ? ('0' + (nowDate.getMonth() + 1)).toString()
      : (nowDate.getMonth() + 1).toString()
    var day = nowDate.getDate() < 10 ? ('0' + nowDate.getDate()).toString() : (nowDate
      .getDate()).toString()
    let currentYearMonDay = year + mon + day
    let realDate = getDaysOfEveryMonth(value.substr(0, 4), (Number(value.substr(4, 2)) - 1)).length
    if (!isBlank(value)) {
      if (value.length === 8 && value.substr(4, 2) >= 1 && value.substr(4, 2) <= 12 && value.substr(6, 2) >= 1 && value.substr(6, 2) <= 31) {
        if (realDate - value.substr(6, 2) < 0) {
          callback(new Error('请输入合法的日期'))
        } else if (value > currentYearMonDay) {
          callback(new Error('输入日期不能晚于当前日期'))
        } else if ((year - value.substr(0, 4)) >= 50) {
          callback(new Error('请输入有效的日期'))
        }
      } else {
        callback(new Error('请输入合法的日期'))
      }
    }
    callback()
  },
  checkBetweenYYYYMMDD(rule, value, callback) {
    callback(new Error('开始日期不得大于终止日期'))
  },
  checkBetweenYYYYMMDD2(rule, value, callback) {
    callback(new Error('终止日期不得小于开始日期'))
  },
  isCurrentMonth(rule, value, callback) {
    callback(new Error('军队实际缴费月数不得大于根据军队服役起止时间计算出来的月数'))
  },
  isCurrentMonth2(rule, value, callback) {
    if (rule.required && !(value)) {
      callback(new Error('必填项，不能为空'))
    }
    callback()
  },
  isCurrentMonth3(rule, value, callback) {
    callback(new Error('本地实际缴费月数不得大于根据本地缴费起止时间计算出来的月数'))
  },
  isFourNumber(rule, value, callback) {
    if (!rule.required && !(value)) {
      callback()
    }
    if (!isBlank(value)) {
      if (Number(value) >= 10) {
        callback(new Error('缴费指数必须小于10'))
      } else if (Number(value) < 0) {
        callback(new Error('缴费指数必须大于等于0'))
      } else if (value.indexOf('.') !== -1 && (value.substr(value.indexOf('.')).length - 1) > 4) {
        callback(new Error('缴费指数小数点后最多保留四位数字，如0.1234'))
      } else if (value.indexOf('.') !== -1 && (value.substr(value.indexOf('.')).length - 1) <= 0) {
        callback(new Error('请输入合法的缴费指数，如0.1234'))
      }
    }
    callback()
  },
  isIdOrCredit(rule, value, callback) {
    if (!(value)) {
      callback()
    }
    if (checkIDCard(value)) {
      callback()
    } else if (CheckSocialCreditCode(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的身份证或社会信用代码'))
    }
    callback()
  },
  isIdOrCredit2(rule, value, callback) {
    if (!(value)) {
      callback()
    }
    if (checkIDCard(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的身份证或社会保障号'))
    }
    callback()
  }
}
function isCardID(sId) {
  // 身份证校验白名单,公安校验出错，实际有该人员
  let whiteList = [
    '34232619690917651X'
  ]
  if (whiteList.includes(sId)) {
    return true
  }
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    // console.log('你输入的身份证长度或格式错误')
    return false
  }
  // 身份证城市
  var aCity = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    // console.log('你的身份证地区非法')
    return false
  }

  // 出生日期验证
  var sBirthday = (sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))).replace(/-/g, '/')
  var d = new Date(sBirthday)
  if (sBirthday !== (d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate())) {
    // console.log('身份证上的出生日期非法')
    return false
  }

  // 身份证号码校验
  var sum = 0
  var weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  var codes = '10X98765432'
  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i]
  }
  var last = codes[sum % 11] // 计算出来的最后一位身份证号码
  if (sId[sId.length - 1] !== last) {
    // console.log('你输入的身份证号非法')
    return false
  }
  return true
}
function checkIDCard(value) {
  // 加权因子
  let weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  // 校验码
  let check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  let code = value + ''
  let last = value[17]// 最后一个
  let seventeen = code.substring(0, 17)
  // ISO 7064:1983.MOD 11-2
  // 判断最后一位校验码是否正确
  let arr = seventeen.split('')
  let len = arr.length
  let num = 0
  for (let i = 0; i < len; i++) {
    num = num + arr[i] * weight_factor[i]
  }
  // 获取余数
  let resisue = num % 11
  let last_no = check_code[resisue]
  let idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/

  // 判断格式是否正确
  let format = idcard_patter.test(value)

  // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
  return !!(last === last_no && format)
}
function checkCode15_two(value) {
  let value18 = ''
  let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  let cardTemp = 0
  let i
  value18 = value.substr(0, 6) + '19' + value.substr(6, value.length - 6)
  for (i = 0; i < 17; i++) {
    cardTemp += value18.substr(i, 1) * arrInt[i]
  }
  value18 += arrCh[cardTemp % 11]
  return checkIDCard(value18)
}

function CheckSocialCreditCode(value) {
  // 虚拟单位放开检验
  if (value.indexOf('X') === 0) {
    return true
  }
  let patrn = /^[0-9A-Z]+$/
  // 18位校验及大写校验
  if ((value.length !== 18) || (patrn.test(value) === false)) {
    return false
  } else {
    let Ancode// 统一社会信用代码的每一个值
    let Ancodevalue// 统一社会信用代码每一个值的权重
    let total = 0
    let weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]// 加权因子
    let str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
    // 不用I、O、S、V、Z
    for (let i = 0; i < value.length - 1; i++) {
      Ancode = value.substring(i, i + 1)
      Ancodevalue = str.indexOf(Ancode)
      total = total + Ancodevalue * weightedfactors[i]
      // 权重与加权因子相乘之和
    }
    let logiccheckcode = 31 - total % 31
    if (logiccheckcode === 31) {
      logiccheckcode = 0
    }
    let Str = '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y'
    let Array_Str = Str.split(',')
    logiccheckcode = Array_Str[logiccheckcode]
    let checkcode = value.substring(17, 18)
    if (logiccheckcode !== checkcode) {
      return false
    }
    return true
  }
}
function checkDateYYYYMMDD(value) {
  let arr = value.split('-')
  if (arr.length === 3) {
    let intYear = parseInt(arr[0], 10)
    let intMonth = parseInt(arr[1], 10)
    let intDay = parseInt(arr[2], 10)
    if (isNaN(intYear) || isNaN(intMonth) || isNaN(intDay)) {
      return false
    }
    if (intYear > 2100 || intYear < 1900 || intMonth > 12 || intMonth < 0 || intDay > 31 || intDay < 0) {
      return false
    }
    if ((intMonth === 4 || intMonth === 6 || intMonth === 9 || intMonth === 11) && intDay > 30) {
      return false
    }
    if ((intYear % 100 !== 0 && intYear % 4 === 0) || intYear % 400 === 0) {
      if (intDay >
        29) return false
    } else {
      if (intDay > 28) return false
    }
    return true
  }
  return false
}

function isBlank(value) {
  if (Object.prototype.toString.call(value) === '[object Undefined]') { // 空
    return true
  } else if (
    Object.prototype.toString.call(value) === '[object String]' ||
    Object.prototype.toString.call(value) === '[object Array]') { // 字符串或数组
    return value.length === 0
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    return JSON.stringify(value) === '{}'
  } else if (Object.prototype.toString.call(value) === '[object Number]') {
    return value.length === 0
  } else {
    return true
  }
}
function getDaysOfEveryMonth(thisYear, thisMonth) { // 返回天数
  var baseMonthsDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]// 各月天数
  var thisMonthDays = []// 这个月有多少天,用于返回echarts用
  if (isRunYear(thisYear) && thisMonth === 1) { // 闰年2月29天
    thisMonthDays = getThisMonthDays(baseMonthsDay[thisMonth] + 1)
  } else {
    thisMonthDays = getThisMonthDays(baseMonthsDay[thisMonth])
  }
  return thisMonthDays
}
// 判断是闰年吗？闰年2月29天
function isRunYear(fullYear) {
  return (fullYear % 4 === 0 && (fullYear % 100 !== 0 || fullYear % 400 === 0))
}
function getThisMonthDays(days) { // 传天数，返天数数组
  var arr = []
  for (var i = 1; i <= days; i++) {
    arr.push(i)
  }
  return arr
}
```
