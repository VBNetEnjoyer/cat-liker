<template>
    <header class="header">
        <div class="header__container container">
            <h1 class="header__logo">{{logo}}</h1>
            <nav class="header__nav nav">
                <a :href="link.href" class="nav__link" v-for="link in links" :key="link.href">
                    {{link.title}}
                </a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    props:{
        links:{
            type: Array,
            required: true,
        },
        logo:{
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.header{
    background-color: #E5989B;
    box-shadow: 0 0 3px black;
}
.header__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
}
.nav>*:not(:last-child){
    margin-right: 10px;
}
.nav__link{
    font-weight: 700;
}
</style>