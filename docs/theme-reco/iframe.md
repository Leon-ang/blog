---
title: h5页面内联框架
date: 2022-04-14
---
```javascript
<template>
  <!-- 第一种 embed 标签定义嵌入的内容，比如插件。 -->
  <!-- <embed
    class="pdf"
    src="../../../static/plugins/pdf/2021海宁智能化改造案例.pdf"
    frameborder="0"
  /> -->
  <!-- 第二种 iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。 -->
  <iframe
    class="pdf"
    src="../../../static/plugins/pdf/2021海宁智能化改造案例.pdf"
    frameborder="0"
  ></iframe>
  <!-- 第三种 npm install --save vue-pdf-->
  <!-- <div class="pdf">
    <pdf
      v-for="currentPage in pageCount"
      :key="currentPage"
      :src="src"
      :page="currentPage"
      @loaded="loadPdfHandler"
    >
    </pdf>
  </div> -->
</template>
```

```javascript
<script>
// import pdf from 'vue-pdf';
export default {
  // components: { pdf },
  data() {
    return {
      currentPage: 0, // pdf文件页码
      pageCount: 16, // pdf文件总页数
      src: 'static/plugins/pdf/2021海宁智能化改造案例.pdf' // pdf文件地址
    };
  },
  created() {
    // this.src = pdf.createLoadingTask(this.src);
  },
  method: {
    loadPdfHandler(e) {
      this.currentPage = 1; // 加载的时候先加载第一页
      // this.pageCount = this.bookPages[this.$route.query.book];
    }
  }
};
</script>
```

```javascript
</script>
<style lang="less" scoped>
.pdf {
  width: 100%;
  height: 100%;
}
</style>
```
