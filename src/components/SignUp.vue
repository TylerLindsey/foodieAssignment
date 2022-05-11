<template>
<!-- I really want this to be hidden, and when SignUp is clicked then it should appear, but should be hidden by default -->
    <v-container>
        <v-form>
        <v-container>
            <v-row>
            <v-col
                cols="12"
                sm="6"
            >
                <v-text-field
                v-model="firstName"
                label="First Name"
                outlined
                ></v-text-field>
                <v-text-field
                v-model="lastName"
                label="Last Name"
                outlined
                ></v-text-field>
                <v-text-field
                v-model="username"
                label="Username"
                outlined
                ></v-text-field>
                <v-text-field
                v-model="email"
                label="Email"
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
        <v-btn @click="handleUserRegistration">Submit</v-btn>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js'
import {mapActions} from 'pinia' ;
export default {
    name: 'SignUp',
    data: () => ({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        pictureUrl: undefined
    }),
    computed: {
        
    },
    methods: {
        ...mapActions(useMainStore,['createUser']),
        handleUserRegistration() {
            //Some kind of form validation
            this.createUser(this.username, this.firstName, this.lastName, this.email, this.password, this.pictureUrl);
        },
        handleError(response){
            console.log(response);
        }
    },
    mounted () {
        useMainStore().$onAction(({name, after})=>{
            if (name == "userRegisterAlert"){
                console.log("handling");
                after((response)=>{
                    this.handleError(response);
                })
            }
        });
    },
}
</script>