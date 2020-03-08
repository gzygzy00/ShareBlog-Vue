<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
    <Header/>
    <main id="main">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer"

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="less">
  @import "./assets/common.less";

  #app {
    display: grid;
    grid-template-columns: 12% 1fr 12%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 'header header header' '.      main   .     ' 'footer footer footer';

    #header {
      grid-area: header;
    }

    #main {
      border: 1px solid red;
      margin: 10px 0;
      grid-area: main;
    }

    #footer {
      grid-area: footer;
    }
  }

</style>
