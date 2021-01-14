<template>
    <div class="portfolio-wrapper" ref="carouselWrapper" v-touch:swipe="cycle">
        <div class="portfolio-carousel" ref="carousel" :style="{left: `${offset}px`}">
                <PortfolioItem
                    v-for="(item, index) in content"
                    :key="'item-'+index"
                    :title="item.title"
                    :details="item.details"
                    :images="item.images" 
                    ref="pItem"
                    :isBefore="(index === active-1)"
                    :isAfter="(index === active+1)"
                    :active="index === active"
                    :handleClick="cycle"
                    container="carousel" 
                    />
        </div>
    </div>

</template>

<script>
import PortfolioItem from './PortfolioItem'
import Content from '../../fixtures/portfolio.json'

export default {
    data(){
        return {
            active: 2,
            content: Content,
            offset: 0,
            doit: null
        }
    },
    components: {
        PortfolioItem
    },
    mounted() {
        this.scrollTo(this.$refs.pItem[this.active].$el)
        this.$refs.carouselWrapper.addEventListener('swiped', function(e) {
            console.log(e.detail.dir )
        })
    },
    created() {
        window.addEventListener("resize", this.handleResize);
        
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        scrollTo (el) {
            console.log("Scrolling...")
            this.offset = 0 - (el.offsetLeft + (el.offsetWidth / 2)) + (this.$refs.carouselWrapper.offsetWidth / 2)
        },
        cycle(direction) {
            console.log(direction)
            if(direction === 'right'){
                if(this.active > 0){
                    this.active --
                }
            }
            if(direction === 'left'){
                if(this.active < this.content.length-1){
                    this.active ++
                }
            }
            this.scrollTo(this.$refs.pItem[this.active].$el)
        },
        handleResize(){
            clearTimeout(this.doit);
            this.doit = setTimeout(this.doResize, 500);
        },
        doResize(){
            this.scrollTo(this.$refs.pItem[this.active].$el)
        }
    },
    watch: {
        active: function(){
            
        }
    }
}
</script>

<style>

.portfolio-wrapper {
    position: relative;
    overflow-x: hidden;
    max-width: 100%;
    width: 100%;
    height: 720px;
}

.portfolio-carousel {
    min-width: 100%;
    min-height: 720px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: 1s;
}

.portfolio-carousel * {
    flex-shrink: 0;
    margin: 0px
}

.side-padding {
    width: 30%;
}


</style>