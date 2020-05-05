<template>
  <div id="app">
       <Header v-if="showHeader"></Header>
    <!-- <Header /> -->
    <router-view />
  </div>
</template>

<style lang="stylus">

</style>
<script>
import Header from './components/Header/Header'

export default {
  
  computed: {
    // a computed getter
    showHeader: function () {
      if(this.$route.name == 'signup') {
        return false;
      }
      if(this.$route.name =='login') {
        return false;
      }
      if(this.$route.name =='HomePage') {
        return false;
      }
      if(this.$route.name =='UploadMedia') {
        return false;
      }
      if(this.$route.name =='Message') {
        return false;
      }

      return true;
    }
  },
  
  components:{
    Header,
    
    
  }
}
</script>