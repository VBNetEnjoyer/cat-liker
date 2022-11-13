<template>
    <div class="container" v-if="cats.length > 0">
        <cat-list 
        :cats="cats"
        @onDislikeClick="deleteCat" 
        />
    </div>
    <h2 
    style="text-align: center;"
    v-else>Your list is empty :(</h2>
</template>

<script>
import CatList from '@/components/CatList.vue';
import myLocalStorage from "@/localStorage.js";

export default {
    components:{
        CatList,
    },
    data(){
        return{
            cats: myLocalStorage.getData(),
        }
    },
    methods:{
        deleteCat(cat){
            setTimeout(()=>{
                this.cats = this.cats.filter(c => c.id !== cat.id);
                myLocalStorage.deleteItem(cat);
            }, 900) 
        },
    },
}
</script>

<style scoped>

</style>