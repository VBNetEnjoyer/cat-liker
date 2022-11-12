<template>
    <div class="cats-list">
        <cat-card 
        v-for="cat in cats" 
        :cat="cat" 
        :key="cat.id"
        @onDislikeClick="$emit('onDislikeClick', cat)"
        @onLikeClick="$emit('onLikeClick', cat)"/>
    </div>
</template>

<script>
import CatCard from './CatCard.vue';

export default {
    components:{
        CatCard,
    },
    props:{
        cats:{
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.cats-list{
    width: 100%;
    height: 100%;
    padding: 10px 0;
}
.cats-list>*:not(:last-child){
    margin: 0 0 10px 0;
}
</style>