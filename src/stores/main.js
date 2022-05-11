import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'


export const useMainStore = defineStore('main',{
    state : () => {
        return{
        }
        
    },
    actions: {
        createUser(username, firstName, lastName, email, password, pictureUrl){
            // axios.request changed to axios.post
            axios.request({
                headers: {
                    "x-api-key" : process.env.VUE_APP_API_TOKEN
                },
                url:process.env.VUE_APP_API_URL+"client",
                method : "POST",
                data: {
                    username ,
                    firstName,
                    lastName,
                    email,
                    password,
                    pictureUrl
                }
                
            }).then((response)=>{
                cookies.set('sessionToken', response.data.token);
                console.log(cookies.set('sessionToken'));
                router.push('/profile/anything');
            }).catch((error)=>{
                console.log(error.response.data);
                this.userRegisterAlert(error.response);
            })
        },

        
        loginUser(email, password){
          axios.request({
            headers: { 
            // process.env.VUE_APP_API_TOKEN_ANOTHER_TEST,//how do i get there to be the token that was generated from logging in
            "x-api-key" : process.env.VUE_APP_API_TOKEN
            },
            url:process.env.VUE_APP_API_URL+"client-login",
                method : "POST",
                data: {
                    email ,
                    password,
                }
          }).then((response)=>{
              cookies.set('sessionToken', response.data.token);
              console.log(cookies.get('sessionToken'));
              router.push('/profile/anything');
          }).catch((error)=>{
              console.log(error.response.data);
              this.userLoginAlert(error.response);
          })
        },
        userRegisterAlert(error){
            return (error)
        },
        userLoginAlert(error){
          return (error)
        },
    }
})
