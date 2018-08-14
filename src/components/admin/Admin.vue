<template>
  <div class="site-wrap" v-if="logged">
    <div v-bind:class="className(article)" v-for="article in articles">
      <img v-bind:src="article.thumbnail"/>
      <span class="card_title">{{ article.title }}</span>
      <span class="card_athor">{{ article.author }}</span>
    </div>
  </div>
  <div v-else>
    <LoggingForm />
  </div>
</template>


<script>

import LoggingForm from './LoggingForm'

export default {
  components: {
    LoggingForm
  },
  data() {
    return {
      articles: [{}],
      logged: false
    }
  },
  beforeCreate() {
    //this.logged = false
  },
  mounted() {
    this.logged = localStorage.getItem('logged') ? localStorage.getItem('logged') : this.logged
    this.articles = JSON.parse(localStorage.getItem('topics')) ?
      JSON.parse(localStorage.getItem('topics')) : this.articles
    console.log(this.logged)
  },
  methods: {
    className(article) {
      if(article.verified)
        return 'card verified'
      return 'card notverified'
    }
  }
}
</script>


<style>
</style>
