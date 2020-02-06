<template>
  <div id="app">
    <router-view></router-view>
    <BottomTabBar/>  
  </div>
</template>

<script>
import BottomTabBar from 'Components/content/maintabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    BottomTabBar
  }
}
</script>

<style>

</style>
