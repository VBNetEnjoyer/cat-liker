<template>
    <my-header :logo="'Cat Liker'" :links="links"/>
    <div class="container" v-if="catsLoaded">
        <cat-list 
        :cats="cats"
        @onDislikeClick="deleteCat" 
        @onLikeClick="likeCat"
        />

    </div>
    <loader v-else/>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import CatList from './components/CatList.vue';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import myLocalStorage from "./localStorage.js";

export default {
    components:{
        MyHeader, CatList,
    },
    data(){
        return{
            links: [
                {title: "Main", href:"./index.html"},
                {title: "Liked", href:"./liked-cats.html"},
            ],
            cats:[],
            
        }
    },
    methods:{
        async getCats(){
            let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            let data = await response.json();
            
            data = data.map(element => {
                return {
                    id: element.id, 
                    url: element.url,
                    name: faker.name.firstName(),
                    about: faker.lorem.paragraph(),
                    isLiked: false,
                }
            });

            return data; 
        },
        async updateData(){
            (await this.getCats()).forEach((element)=>{
                this.cats.push(element);
            });
        },
        deleteCat(cat){
            setTimeout(()=>{
                this.cats = this.cats.filter(c => c.id !== cat.id);
                if(this.cats.length === 0) this.updateData();
            }, 900) 
        },
        likeCat(cat){
            cat.isLiked = !cat.isLiked;
            if(cat.isLiked){
                myLocalStorage.addItem(cat);
            } else {
                myLocalStorage.deleteItem(cat);
            };
        }
    },
    computed:{
        catsLoaded:{
            get(){
                return this.cats.length > 0 ? true : false
            }
        }
    },
    mounted(){
        this.updateData();

        let html = document.documentElement;
        let timeoutId = 0;
        document.addEventListener('scroll',()=>{
            if (html.scrollHeight - Math.round(html.scrollTop) < html.clientHeight*2) {
                clearTimeout(timeoutId)
                timeoutId = setTimeout(()=>{
                    this.updateData();
                }, 300)
            }
        })
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
a{
    color: inherit;
    text-decoration: none;
}
body{
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
@media(max-width: 769px){
    body{
        font-size: 22px;
    }
}
@media(max-width: 479px){
    body{
        font-size: 18px;
    }
}
.container{
    margin: 0 auto;
    padding: 0 10px;
    max-width: 980px;
}
</style>