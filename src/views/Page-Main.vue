<template>
    <section>
        <div class="main-screen">
            <div class="background"></div>
            <div class="content">
                <div class="left">
                    <div id="name-backgrounds">
                        <div class="letter-wrapper">
                            <div class="name-letter" id="name-o2"></div>
                            <div class="name-letter" id="name-n"></div>
                            <div class="name-letter" id="name-h"></div>
                            <div class="name-letter" id="name-o"></div>
                            <div class="name-letter" id="name-j"></div>
                            <div class="letter-controllers">
                            </div>
                        </div>
                        <div class="letter-buttons">

                        </div>
                    </div>
                    <div class="menu col ar">
                        <!-- <button :class="btn1_hover ? 'menu-btn about-btn-hover' : 'menu-btn about-btn'" @mouseover="btn1_hover = true, loadedView = 'view-main-about'" @mouseleave="btn1_hover = false, changeView()"><div class="end"></div></button>
                        <button :class="btn2_hover ? 'menu-btn contact-btn-hover' : 'menu-btn contact-btn'" @mouseover="btn2_hover = true, loadedView = 'view-main-contact'" @mouseleave="btn2_hover = false, changeView()"><div class="end"></div></button>
                        <button :class="btn3_hover ? 'menu-btn projects-btn-hover' : 'menu-btn projects-btn'" @mouseover="btn3_hover = true, loadedView = 'view-main-projects'" @mouseleave="btn3_hover = false, changeView()"><div class="end"></div></button> -->
                        <button class="menu-btn">ABOUT</button>
                        <button class="menu-btn">CONTACT</button>
                        <button class="menu-btn">PROJECTS</button>
                    </div>
                    <div ref="cloud1" class="cloud2 cloud">
                        <img src="../assets/cloud2.svg" alt="">
                    </div>
                    <div ref="cloud2" class="cloud1 cloud">
                        <img src="../assets/cloud1.svg" alt="">
                    </div>
                    
                </div>
                
                <div class="right">
                    <transition name="screenwipe">
                        <component :is="loadedView" :key="loadedView"></component>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MainViewRight from './View-Main-Right';
import MainViewAbout from './View-Main-About';
import MainViewContact from './View-Main-Contact';
import MainViewProjects from './View-Main-Projects';


export default {
    data(){
        return {
            btn1_hover: false,
            btn2_hover: false,
            btn3_hover: false,
            loadedView: 'view-main-right'
        }
    },
    methods: {
        changeView(){
            let here = this;
            setTimeout(function(){
                if(!here.btn1_hover & !here.btn2_hover & !here.btn3_hover){
                    here.loadedView = 'view-main-right';
                }
            }, 300);
        },
        animateClouds(){
            this.animateCloud(this.$refs.cloud1, (20 * Math.cos(25 * Math.PI/180)), (20 * Math.sin(25 * Math.PI/180)));
            this.animateCloud(this.$refs.cloud2, (30 * Math.cos(25 * Math.PI/180)), (30 * Math.sin(25 * Math.PI/180)));
        },
        animateCloud(cloud, toX, toY){
            let duration = Math.floor((Math.random() * 3000) + 8000);
            cloud.animate([
            // keyframes
            { transform: 'translate(-'+toX+'px, '+toY+'px)' }, 
            { transform: 'translate(0px, 0px)' }, 
            { transform: 'translate(-'+toX+'px, '+toY+'px)' }
            ], { 
            // timing options
            duration: duration,
            easing: "ease-in",
            iterations: Infinity
            });
        }
    },
    components: {
        'view-main-right': MainViewRight,
        'view-main-about': MainViewAbout,
        'view-main-contact': MainViewContact,
        'view-main-projects': MainViewProjects
    },
    mounted(){
        this.animateClouds();
    }
}
</script>

<style>

    .main-screen {
        display: flex;
        position: relative;
        background-image: url('../assets/grid.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position-y: bottom;
        width: 100vw; 
        height: 56.25vw;
        max-height: 100vh;
        max-width: 177.78vh;
        margin: 0 auto;
    }
    
    .background {
        width: 100%;
        padding-bottom: 65%;
        top: 0px;
        left: 0px;
    }

    .content {
        display: flex;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }

    .left, .right {
        flex: 1;
        position: relative;
    }

    .left {
        
    }

    .right {
        /* clip-path: polygon(0 0, 0% 68.0%, 89.5% 100%, 100% 100%, 100% 0%); */
    }

    .name {
        position: absolute;
        height: 55%;
        width: 100%;
    }

    .name img {
        width: 100%;
    }

    .menu {
        position: absolute;
        top: 33%;
        width: 100%;
    }

    .menu-btn {
        backface-visibility: hidden;
        will-change: transform;
        transform: skewY(-25deg) scaleX(0.75);
        position: relative;
        transition: 0.5s;
        font-size: 55px;
        font-weight: 800;
        line-height: 110%;
        text-align: right;
        transition: 1s;
        margin-left: 20%;
        color: white;
    }

    .menu-btn:hover {
        transform: skewY(-25deg) scaleX(0.75) scale(1.05)
    }

    .menu-btn:hover > .end {
        opacity: 1;
    }

    .about-btn { background-image: url('../assets/about.svg'); }

    .about-btn-hover { background-image: url('../assets/about_h.svg'); }

    .about-btn:focus { background-image: url('../assets/about_h.svg'); }

    .contact-btn { background-image: url('../assets/contact.svg'); }

    .contact-btn-hover { background-image: url('../assets/contact_h.svg'); }

    .contact-btn:focus { background-image: url('../assets/contact_h.svg'); }

    .projects-btn { background-image: url('../assets/projects.svg'); }

    .projects-btn-hover { background-image: url('../assets/projects_h.svg'); }

    .projects-btn:focus { background-image: url('../assets/projects_h.svg'); }

    .experiments-btn { background-image: url('../assets/experiments.svg'); }

    .experiments-btn-hover { background-image: url('../assets/experiments_h.svg'); }

    .end {
        /* transition: 1s; */
        opacity: 0;
        width: 5%;
        background-color: white;
        height: 59%;
        position: absolute;
        top: 7%;
        left: 103%;
        margin-left: 4%;
    }

    .projected-view {
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .cell {
        margin: 4%;
    }

    .cloud {
        position: absolute;
    }

    .cloud1 {
        width: 31%;
        left: 48%;
        top: 5%;
    }

    .cloud2 {
        width: 21%;
        left: 14%;
        top: 17%;
    }

    .screenwipe-enter {
        transform: translateY(100%);
    }

    .screenwipe-enter-active {
        animation: screenWipeIn 1s;
    }

    #name-backgrounds {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .letter-wrapper {
        position: relative;
        height: 100%;
    }

    .name-letter {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-position: bottom right;
        background-repeat: no-repeat;
        background-size: 83%;
        background-origin: padding-box;
        transition: 1s;
    }

    #name-j {
        background-image: url("../assets/name_j.svg");
        animation: screenWipeIn 1s;
    }

    #name-o {
        background-image: url("../assets/name_o.svg");
    }

    #name-h {
        background-image: url("../assets/name_h.svg");
    }

    #name-n {
        background-image: url("../assets/name_n.svg")
    }

    #name-o2 {
        background-image: url("../assets/name_o2.svg");
    }

    @keyframes screenWipeIn {
    0% { 
            transform: translateY(100%);
        }
    100% { 
            transform: translateY(0);
        }
    }


    .screenwipe-leave {
        transform: translateY(0);
    }

    .screenwipe-leave-active {
        animation: screenWipeOut 1s;
    }

    @keyframes screenWipeOut {
    0% { 
            transform: translateY(0);
        }
    100% { 
            transform: translateY(-100%);
        }
    }

</style>