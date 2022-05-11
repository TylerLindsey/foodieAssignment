<template>
    <div>
        <h1>Name: {{mealName}}</h1>
        <ul>
            <li v-for="ingr in ingredientList" :key="ingr">{{ingr}}</li>
        </ul>
        <p>{{instructions}}</p>
        {{enhancedVariable}}
        <button @click="()=>{testVariable++}">Click</button>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name : "MealInfo",
        mounted () {
            this.searchMeal(this.$route.params.query);
        },
        data() {
            return {
                mealName: "",
                ingredientList : [],
                instructions : "",
                testVariable : 0
            }
        },
        watch: {
            $route(newValue, oldValue) {
                console.log(oldValue);
                console.log(newValue.params.query);
                this.searchMeal(newValue.params.query);
            },
            testVariable(newValue, oldValue){
                console.log("Test variable changed from "+ oldValue+" to "+newValue );
            }
        },
        computed: {
            enhancedVariable() {
                console.log("Computed has been run");
                return this.testVariable + 2;
            }
        },
        methods: {
            searchMeal(query) {
                axios.request({
                    url : "https://www.themealdb.com/api/json/v1/1/search.php",
                    method : "GET",
                    params : {
                        "s" : query
                    }
                }).then((response)=>{
                    console.log(response);
                    let mealObject = response.data.meals[0];
                    this.mealName = mealObject.strMeal;
                    this.instructions = mealObject.strInstructions;
                    for (let i = 1; i < 21; i++) {
                        if (mealObject['strIngredient'+i] == ""){
                            break;
                        }
                        this.ingredientList.push(mealObject['strIngredient'+i]);
                        
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
li{
    list-style: none;
}
</style>