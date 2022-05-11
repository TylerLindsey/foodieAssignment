<template>
  <div class="about">
    <h1>This is the user profile</h1>
    <h1>Welcome {{ $route.params.name }}</h1>
    <a href="/">Home</a>
  </div>
</template>

<script>
  export default {
    name: "ProfileView",
    data(){
      return{
        username: "James"
      }
    },
    methods:{
      apiCall(){
        // this will get information based on $route.params.name above 
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>