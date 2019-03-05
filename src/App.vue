<template>
  <div id="app">
    <header_></header_>
    <router-view></router-view>
    <footer_></footer_>
  </div>
</template>

<script>
import header_ from './components/header'
import footer_ from './components/footer'
export default {
  name: 'App',
  components:{
    header_,
    footer_
  }
}
</script>