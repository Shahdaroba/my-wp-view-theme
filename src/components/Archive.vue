<template>
  <div class="container">
    <div class="alert alert-warning" v-if="error">
      <p>Oh noes! There's been an error!</p>
    </div>
    <div v-for="post in posts">
      <h1><a v-link="{ name: 'single', params: { id: post.id } }">{{ post.title.rendered }}</a></h1>
      {{{ post.content.rendered }}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posts: false,
        error: false
      }
    },
    route: {
      data (transition) {
        return this
          .$http({
            url: 'http://api.vue.dev/wp-json/wp/v2/posts/',
            method: 'GET'
          })
          .then((response) => {
            return { posts: response.data, error: false }
          }, (response) => {
            return { posts: false, error: true}
          })
      }
    }
  }
</script>
