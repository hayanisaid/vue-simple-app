<template>
  <div id="app">
    <Header />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import './main.css'

export default {
  name: 'app',
  components: {
    Header
  },
  created: function() {
    console.log('CREATED')
  },
  beforeMount() {
    console.log('BEFORE CREATED')
  },
  mounted: function() {
    console.log('MOUNTED')
  }
};
</script>

<style>
</style>
