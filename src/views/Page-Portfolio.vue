<template>
    <section class="portfolio" ref="portfolio" >
        <h1 ref="portfolioTitle">Portfolio</h1>
        <div class="portfolio-content-wrapper" ref="pItem1">
            <PortfolioCarousel />
        </div>
    </section>
</template>

<script>
import PortfolioCarousel from '../components/Portfolio/PortfolioCarousel'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    data(){
        return {
            
        }
    },
    components: {
        PortfolioCarousel
    },
    mounted() {
        this.scrollAnimation();
    },
    methods: {
        scrollAnimation() {
            gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.portfolio,
                    start: "top bottom",
                    end: "top 40%",
                    markers: false,
                    scrub: 1,
                    pin: false
                }
            })
            // .to(this.$parent.$refs.app, { backgroundColor: '#c45e38' })
            .to(this.$parent.$refs.app, { backgroundColor: '#252525'})

            gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.portfolio,
                    start: "top 40%",
                    end: "top top",
                    markers: false,
                    scrub: true,
                    pin: false
                }
            })
            .fromTo(this.$refs.portfolioTitle, { opacity: 0 }, { opacity: 1 })

            gsap.timeline({
                scrollTrigger: {
                    trigger: this.$refs.portfolio,
                    start: "top bottom",
                    end: "-50% top",
                    markers: false,
                    scrub: 2,
                    pin: false
                }
            })
            .fromTo(this.$refs.pItem1, { y: '500px' }, { y: '0px' })

        }
    }
}
</script>

<style scoped>

h1 {
    text-align: center;
    margin: 4rem;
    font-size: 3rem;
    color: #f8f8f8;
    opacity: 0;
}

.narrow {
    max-width: 900px;
    margin:  0 auto;
}

.portfolio {
    /* background: #111111; */
    font-family: 'Lora', serif;
    margin-top: 100px;
}

</style>