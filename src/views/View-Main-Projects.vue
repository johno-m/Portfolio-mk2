<template>
    <div class="projected-view col about">
        <img src="/src/assets/portrait.png" alt="A portrait of me - John">
    </div>
</template>

<script>
export default {
    data(){
        return {
            githubHover: false,
            jsfiddleHover: false
        }
    }
}
</script>

<style>

.jsfiddle {
    margin-top: 20%;
}

.about img {
    width: 75%;
    margin: auto;
}


.github {
    margin-top: 35%;
}

.projected-view {
    padding: 5%;
}

</style>