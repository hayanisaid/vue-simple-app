<template>
  <div class="site-wrap">
    <div class="card" v-for="article in articles" v-bind:key="article">
      <img v-bind:src="article.thumbnail" v-on:click="readLocalStorage()"/>
      <span class="card_title">{{ article.title }}</span>
      <span class="card_athor">{{ article.author }}</span>
    </div>
  </div>
</template>


<script>
  export default {
    template: '<li>{{ todo.text }}</li>',
    data() {
      return {
        articles: [
          {
            id: 1,
            thumbnail: "https://picsum.photos/401/400",
            author: 'Ayoub',
            title: 'New topic'
          },
          {
            id: 2,
            thumbnail: "https://picsum.photos/402/400",
            author: 'Ayoub2',
            title: 'New topic'
          },
          {
            id: 3,
            thumbnail: "https://picsum.photos/403/400",
            author: 'Ayoub3',
            title: 'New topic'
          },
          {
            id: 4,
            thumbnail: "https://picsum.photos/404/400",
            author: 'Ayoub4',
            title: 'New topic'
          },
          {
            id: 1,
            thumbnail: "https://picsum.photos/405/400",
            author: 'Ayoub',
            title: 'New topic'
          },
        ]
      }
    },
    methods: {
      readLocalStorage: function() {
        console.log(this.articles)
      }
    }
  }
</script>


<style>
</style>
