<template>
<h1>{{ post.title.rendered }}</h1>
{{{ post.content.rendered }}}
</template>

<script>
  export default {
    data () {
      return {
        post: false,
        error: false
      }
    },
    route: {
      data (transition) {
        return this
          .$http({
            url: 'http://api.vue.dev/wp-json/wp/v2/posts/' +
            this.$route.params.id,
            method: 'GET'
          })
          .then((response) => {
            return { post: response.data, error: false }
          }, (response) => {
            return { post: false, error: true}
          })
      }
    }
  }
</script>
