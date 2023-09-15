<template>
    <div id="app">
        <logo-loading></logo-loading>
        <nav-component></nav-component>
        <mobile-nav></mobile-nav>
        <router-view/>
    </div>
</template>
<script>
import NavComponent from '@/components/nav/NavComponent'
import MobileNav from '@/components/nav/MobileNav'
import LogoLoading from '@/common-vue/components/LogoLoading'
export default {
    components: {
        NavComponent,
        MobileNav,
        LogoLoading,
    },
    created() {
        this.$store.dispatch('auth/csrf')
        this.$store.dispatch('departament/getModels')
        this.$store.dispatch('affiliate/getModels')
    }
}
</script>
<style lang="sass">
@import "@/sass/app.sass"
@import "./sass/fonts/styles.css"
@import '@/common-vue/sass/app.sass'
#app 
  font-family: Nunito
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // text-align: center
  color: #2c3e50

#nav 
  padding: 30px

  a 
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active 
      color: #42b983
    
  

</style>
