<template>
    <button class="btn"><slot></slot></button>
</template>

<script>
export default {
    name: "my-button"
}
</script>

<style scoped>
.btn{
    border-radius: 16px;
    border: 3px solid #E5989B;
    color: #6D6875;
    font-weight: 700;
    background: none;
    font-size: inherit;
    padding: 8px 40px;
}
</style>