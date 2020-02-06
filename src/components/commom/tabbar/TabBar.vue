<template>
  <div id="tab-bar" >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  components: {},
  
  data() {
    return {
      title: ["首页", "分类", "购物车", "我的"]
  }},

}
</script>
<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(192, 190, 190, 0.321);
}
</style>
