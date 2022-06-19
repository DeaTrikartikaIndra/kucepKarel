<template>
  <div class="home">
    <Navbar/>
    <Home/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Home,
    Navbar
}
}
</script>
