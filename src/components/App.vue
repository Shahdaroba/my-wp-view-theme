<style>
  body {
    padding-top: 50px;
  }
</style>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li v-link-active><a v-link="{ name: 'home', exact: true }">Home</a></li>
            <li v-link-active><a v-link="{ name: 'archive', params: { page: 1 } }">Archive</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

  <router-view></router-view>
</template>

<script>
export default {
  replace: false
}
</script>
