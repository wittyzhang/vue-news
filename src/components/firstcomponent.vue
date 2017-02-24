<template>
  <div class="hello">
    <h1>I am a title.</h1>
    <a href="javascript:;">written by {{ author }}</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      author: 'Rona zhang'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
