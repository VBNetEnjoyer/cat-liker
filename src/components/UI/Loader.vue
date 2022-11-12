<template>
    <div class="loader__container">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    name: "loader"
}
</script>

<style scoped>
.loader {
    display: flex;
    width: 100%;
    height: 100%;
    opacity: 0.5;
}
.loader {
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    border: 16px solid #6D6875;
    border-top: 16px solid #E5989B;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}
@media(max-width: 479px){
    .loader{
        width: 60px;
        height: 60px;
        border: 8px solid #6D6875;
        border-top: 8px solid #E5989B;
    }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>