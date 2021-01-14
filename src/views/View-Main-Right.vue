<template>
    <div class="projected-view row">
        <div class="jsfiddle cell" @mouseover="jsfiddleHover = true" @mouseout="jsfiddleHover = false">
            <img src="../assets/jsfiddle.svg" alt="" v-if="!jsfiddleHover">
            <img src="../assets/jsfiddle_h.svg" alt="" v-else>
        </div>
        <div class="github cell" @mouseover="githubHover = true" @mouseout="githubHover = false">
            <img src="../assets/github.svg" alt="" v-if="!githubHover">
            <img src="../assets/github_h.svg" alt="" v-else>
        </div>
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

.github {
    margin-top: 35%;
}

.projected-view {
    padding: 5%;
}

</style>