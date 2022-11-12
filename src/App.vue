<template>
    <my-header :logo="'Cat Liker'" :links="links"/>
    <div class="container" v-if="catsLoaded">
        <cat-list 
        :cats="cats"
        @onDislikeClick="deleteCat" 
        />

    </div>
    <loader v-else/>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import CatList from './components/CatList.vue';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

export default {
    components:{
        MyHeader, CatList,
    },
    data(){
        return{
            links: [
                {title: "Main", href:""},
                {title: "Liked", href:""},
            ],
            cats:[],
            
        }
    },
    methods:{
        async getCats(){
            let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            let data = await response.json();
            
            let newData = [];
            data.forEach(element => {
                newData.push({
                    id: element.id, 
                    url: element.url,
                    name: faker.name.firstName(),
                    about: faker.lorem.paragraph(),
                });
            });
            return newData;
        },
        async updateData(){
            (await this.getCats()).forEach((element)=>{
                this.cats.push(element);
            });
        },
        deleteCat(cat){
            setTimeout(()=>{
                this.cats = this.cats.filter(c => c.id !== cat.id);
            }, 900) 
            
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
        document.addEventListener('scroll',()=>{
            if (html.scrollHeight - Math.round(html.scrollTop) === html.clientHeight) {
                this.updateData();
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