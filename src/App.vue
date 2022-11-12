<template>
    <router-view></router-view>
</template>

<script>
export default {

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