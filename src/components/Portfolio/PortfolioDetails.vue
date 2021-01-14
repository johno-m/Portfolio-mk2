<template>
    <div class="details">
        <slot></slot>
    </div>
</template>

<script>

export default {
    props: ['name', 'link', 'description'],
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>

h2 {
    text-align: right;
    font-size: 3rem;
}

.details { 
    color: #f8f8f8;
    text-align: right;
    width: 40%;
    padding: 2.5rem 2.5rem 2.5rem 0rem;
    font-size: 1.2rem;
    letter-spacing: 0.07rem;
}

p {
    line-height: 1.7rem;
}

</style>