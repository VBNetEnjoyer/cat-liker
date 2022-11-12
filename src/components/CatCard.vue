<template>
    <div class="cat-item" ref="catItem">
        <div class="cat-item__container">
            <div class="cat-item__body">
                <div class="cat-item__avatar">
                    <img :src="cat.url" alt="avatar">
                </div>
                <div class="cat-item__about">
                    <h4 class="cat-item__name">{{cat.name}}</h4>
                    <p class="cat-item__bio">{{cat.about}}</p>
                    <div class="cat-item__btns-group">
                        <my-button
                        @click="$emit('onLikeClick',cat)"
                        class="cat-item__like"
                        :class="{liked : cat.isLiked}"
                        >{{cat.isLiked ? "Liked" : "Like"}}</my-button>
                        <my-button
                        @click="onDislikeClick"
                        class="cat-item__dislike">Dislike</my-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        cat:{
            type: Object,
            required: true,
        }
    },
    methods:{
        onDislikeClick(){
            this.$refs.catItem.classList.add("fade");
            this.$emit('onDislikeClick', this.cat);
        }
    }
}
</script>

<style scoped>
.cat-item{
    box-shadow: 0 0 5px black;
    padding: 8px;
    border-radius: 8px;
}
.fade{
    animation: fade 1s;
}
@keyframes fade{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
.cat-item__body{
    display: flex;
    margin: 0 -8px;
}
.cat-item__body>*{
    margin: 0 8px;
}
.cat-item__avatar{
    flex: 0 0 40%;
    background: #B5838D;
    padding: 8px;
    border-radius: 8px;
}
.cat-item__avatar>img{
    width: 100%;
    height: 100%;
}
.cat-item__about{
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}
.cat-item__bio{
    flex: 1 1 auto;
}
.cat-item__btns-group{
    display: flex;
    justify-content: flex-end;
}
.cat-item__btns-group>*:not(:last-child){
    margin: 0 10px 0 0;
}
.btn.liked{
    background-color: #E5989B;
}
@media(max-width: 769px){
    .cat-item__body{
        flex-direction: column;
    }
}
@media(max-width: 479px){
    .cat-item__btns-group{
        display: flex;
        flex-direction: column;
    }
    .cat-item__btns-group>*:not(:last-child){
        margin: 0 0 10px 0;
    }
}


</style>