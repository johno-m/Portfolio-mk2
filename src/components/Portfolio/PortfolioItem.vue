<template>
    <div class="portfolio-item" ref="firstPortfolioItem" :class="{ carouselChild: isInCarousel, active: active }">
            <PortfolioPreview :images="images"/>
            <PortfolioDetails>
                <h2>{{ title }}</h2>
                <p>{{ details }}</p>
            </PortfolioDetails>
        </div>
    
</template>

<script>
import PortfolioDetails from './PortfolioDetails'
import PortfolioPreview from './PortfolioPreview'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    props: ['title', 'details', 'images', 'container', 'active', 'isBefore', 'isAfter', 'handleClick'],
    data(){
        return {
            
        }
    },
    components: {
        PortfolioDetails,
        PortfolioPreview
    },
    mounted() {
        // this.scrollAnimation();
    },
    computed: {
        isInCarousel: function(){
            return (this.container === 'carousel') ? true : false
        }
    },
    methods: {
        // scrollAnimation() {
        //     gsap.timeline({
        //         scrollTrigger: {
        //             trigger: this.$refs.firstPortfolioItem,
        //             start: "top bottom",
        //             end: "+=400px",
        //             markers: false,
        //             scrub: 1,
        //             pin: false
        //         }
        //     })
        //     .fromTo(this.$refs.firstPortfolioItem, { y: '+=500px' }, { y: '-=600px' })
        // }
    }
}
</script>

<style>

.portfolio-item {
    background: #2b2b2b;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    border-radius: 1.5rem;
    opacity: 0.5;
    transform: scale(0.8);
    transition: 0.5s;
    position: relative;
}

.active {
    opacity: 1;
    transform: scale(1);
}

.carouselChild {
    margin: 0 5px;
}


@media screen and (min-width: 1100px){

}


</style>