<template>
    <div id="app" ref="app">
        <!-- <toolbar></toolbar> -->
        <PageMain></PageMain>
        <PagePortfolio></PagePortfolio>
        <PageAbout></PageAbout>
        <PageContact></PageContact>
        <Footer></Footer>
    </div>
</template>

<script>
// import Toolbar from './views/Toolbar.vue'
import PageMain from './views/Page-Main.vue'
import PageAbout from './views/Page-About.vue'
import PageContact from './views/Page-Contact.vue'
import PagePortfolio from './views/Page-Portfolio.vue'
// import PageFooter from './views/Page-Footer.vue'

export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        // Toolbar,
        PageMain,
        PageAbout,
        PageContact,
        PagePortfolio,
        // PageFooter
    }

}
</script>

<style>

@import './css/jm.css';
@import './css/style.css';

.container {
    max-width: 1300px;
    margin: 0px auto;
}

#app {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    min-height: 100px;
}

</style>
