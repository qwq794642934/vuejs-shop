<template>
  <div id="app">
		<keep-alive exclude="Detail">
			<router-view></router-view>
		</keep-alive>
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
@import './assets/css/base.css';
</style>
