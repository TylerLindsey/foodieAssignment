<template>
  <div>
    <h1>Homeview.vue page</h1>
    <login-section />
    <login-comp/>
    <nav-comp />
    <sign-up/>
  </div>
</template>

<script>
  import LoginSection from '@/components/LoginSection'
  import NavComp from '@/components/NavComp'
  import SignUp from '@/components/SignUp'
  import LoginComp from '@/components/LoginComp'

  export default {
    name: 'HomeView',
// when i added vuetify it changed from HomeView to Home AFTER i chose the default preset after doing vue add vuetify, and then causes an error saying it should be multiword. BUT, once I hit npm run serve it went away and the file opened fine in the browser. 
    components: {
      LoginSection,
      NavComp,
      SignUp,
      LoginComp
    },
  }
</script>
