<template>
  <div>
    <div class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height:36px;color:#20a0ff">豆瓣电影排行榜</h1>
      </div>
      <div v-for="article in articles">
        {{ article.title }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        author: 'witty zhang',
        articles: []
      }
    },
    mounted () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.articles = response.data.subjects
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    }
  }
</script>
