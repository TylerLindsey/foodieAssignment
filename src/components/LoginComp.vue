<template>
  <div>
    <v-container>
      <v-form>
      <v-container>
        <v-row>
        <v-col>
          <v-text-field
            v-model="username"
            label="Username"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            outlined
          ></v-text-field>
        </v-col>
        </v-row>
      </v-container>
      </v-form>
      <v-btn @click="loginUser(username, password)">Login</v-btn>
    </v-container>
  </div>
</template>

<script>
import {useMainStore} from '@/stores/main.js'
import {mapActions} from 'pinia' ;
// import axios from 'axios';

  export default {
    name: "LoginComp",
    data: () => ({
        username: '',
        password: '',
    }),
    computed: {
        
    },
    methods: {
        ...mapActions(useMainStore,['loginUser']),
        openLogin() {
    //         //Some kind of form validation
    //         this.loginUser(this.username, this.firstName, this.lastName, this.email, this.password, this.pictureUrl);
        },
        handleError(response){
            console.log(response);
        },
        // notifyParent: function(){
        //   this.$emit('openLogin', "a message")
        // }
    },
    mounted () {
        useMainStore().$onAction(({name, after})=>{
            if (name == "userLoginAlert"){
                console.log("handling");
                after((response)=>{
                    this.handleError(response);
                })
            } else (error)=>{
              console.log(error);
              after((error)=>{
                this.handleError(error)
              })
            }
        });
    },
  }
</script>

<style lang="scss" scoped>

</style>