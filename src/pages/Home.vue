<template>
    <div class="home">
        <navbar/>

        <div class="container">
            <section-top/>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import SectionTop from '../components/section-top.vue'

export default {
    name: 'Home',
    components: {
        Navbar,
        SectionTop
    },
    data(){return{}}
}
</script>

<style scoped>

</style>