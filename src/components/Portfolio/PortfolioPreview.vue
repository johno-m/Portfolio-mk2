<template>
    <div class="preview">
        <div class="img-window">
            <transition
                appear
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
                mode="out-in">
                <video 
                    alt="Video example of Knowt app" 
                    ref="videoHolder" 
                    :src="imageSrc" 
                    muted autoplay loop 
                    draggable="false"
                    v-if="isVideo(images[index])"/>
                <img 
                    :src="imageSrc" 
                    alt="Default image placeholder" 
                    draggable="false"
                    v-else />
            </transition>
        </div>
        <div class="controls" v-if="images.length > 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle-fill btn" viewBox="0 0 16 16" @click="goLeft">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle-fill btn" viewBox="0 0 16 16" @click="goRight">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
            </svg>
        </div>
    </div>
</template>

<script>

export default {
    props: ['images'],
    data(){
        return {
            index: 0
        }
    },
    methods: {
        isVideo(fileSrc){
            return (fileSrc.split('.').pop() === 'mp4' || fileSrc.split('.').pop() === 'mov') ? true : false
        },
       goLeft(){
            if(this.index === 0){
                this.index = this.images.length-1
            } else {
                this.index--
            }
            console.log(this.index)
        },
        goRight(){
            if(this.index === this.images.length-1){
                this.index = 0
            } else {
                this.index++
            }
            console.log(this.index)
        }
    },
    computed: {
        imageSrc: function(){
            if(this.images[this.index].includes('/')){
                return this.images[this.index]
            } else {
                return `../../src/assets/images/${this.images[this.index]}`
            }
        }
    }
}
</script>

<style scoped>
    .preview {
        width: 60%;
        padding-bottom: 80%;
        position: relative;
    }

    .img-window {
        position: absolute;
        margin: 3rem;
        width: calc(100% - 6rem);
        height: calc(100% - 6rem);
        top: 0px;
        left: 0px;
        cursor: pointer;
    }

    .img-window img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .img-window video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: #252525;
    }

    .controls {
        margin: 4rem;
        width: calc(100% - 8rem);
        height: calc(100% - 8rem);
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .controls:hover > .btn {
        opacity: 1;
    }

    .btn {
        border-radius: 50%;
        transition: 0.5s;
        opacity: 0;
        color: white;
    }

    .btn:hover {
        border-radius: 50%;
        box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
        color:#ffbb00;
    }
</style>