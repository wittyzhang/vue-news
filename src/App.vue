<template>
  <div id='app'>
    <ul class="navbar" >
      <li v-for="list in titles"  v-on:click="loadtype(list.type,list.id)" :class="{ active: isActive == list.id }">{{ list.name }}</li>
    </ul>
    <div>
      <div class='list-con' v-for="item in items">
        <a :href="item.url">
          <div class='list-img'><img :src='item.thumbnail_pic_s'></div>
          <div class='list-title'>{{ item.title }}</div>
          <div class='list-desc'><span class="author-name">{{ item.author_name }}</span>{{ item.date }}</div>
        </a>
      </div>
    </div>
   <!--  <router-link to='/second'></router-link>
    <router-view class='view'></router-view> -->
  </div>
</template>

<script>
// 引入模块
import firstcomponent from './components/firstcomponent.vue'
import secondcompontent from './components/secondcompontent'
export default {
  data () {
    return {
      isActive: '1', // 对应选中的id
      defUrl: '/toutiao/index',
      key: '263b3fec887cead4f4e9e92069cf0a6c', // 此处放自己的key
      defaultType: 'top',
      titles: [{
        id: '1',
        type: 'top',
        name: '头条'
      }, {
        id: '2',
        type: 'shehui',
        name: '社会'
      }, {
        id: '3',
        type: 'guonei',
        name: '国内'
      }, {
        id: '4',
        type: 'guoji',
        name: '国际'
      }, {
        id: '5',
        type: 'shishang',
        name: '时尚'
      }, {
        id: '6',
        type: 'keji',
        name: '科技'
      }, {
        id: '7',
        type: 'junshi',
        name: '军事'
      }],
      items: [{
        uniquekey: '',
        'title': '',
        'date': '',
        'category': '',
        'author_name': '',
        'url': '',
        'thumbnail_pic_s': '',
        'thumbnail_pic_s02': '',
        'thumbnail_pic_s03': ''
      }]
    }
  },
  // 注册组件
  components: {
    firstcomponent,
    secondcompontent
  },
  mounted () {
    // this.getUrl()
    this.$http.get(this.defUrl, {// 获取全部数据
      params: {
        type: 'top',
        key: this.key
      }
    }).then(function (response) {
      this.items = response.data.result.data
      // console.log(response.data.result.data)
    })
  },
  methods: {
    loadtype (text, selectId) {
      console.log(text)
      if (selectId === this.isActive) {
        return false
      }
      this.$http.get(this.defUrl, {// 获取全部数据
        params: {
          type: text,
          key: this.key
        }
      }).then(function (response) {
        this.items = response.data.result.data
        // console.log(response.data.result.data)
      })
      this.isActive = selectId
    }
  }
}
</script>

<style>
body,ul,li{margin:0;padding:0;}
li{list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  color:#333333;
  text-decoration: none;
   -webkit-tap-highlight-color:transparent; 
}
img{
  width:100%;
}
.navbar{
  background:#C13030;
  height:45px;
  display: flex;
  -webkit-display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
}
.navbar li{
  float: left;
  color:#ffffff;
}
.navbar li.active{
  border-bottom:1px solid #ffffff;
}
.mint-navbar a{
  color:#ffffff;
}
.mint-navbar .mint-tab-item.is-selected{
  color:#ffffff;
  height:8px;
  border-bottom:3px solid #ffffff;
}
.list-con{
  border-bottom:1px solid #f8f8f8;
  padding:10px;
  overflow: hidden;
  text-align: left;
  position: relative;
}
.list-img{
  float:left;
  width:30%;
  margin-right: 10px
}
.list-title{
  font-size:14px;
  font-weight: bold;
  line-height: 1.6;
  vertical-align: top;
}
.list-desc{
  font-size:12px;
  color:#999999;
  position: absolute;
  bottom:10px;
  right:10px;
}
.list-desc .author-name{
  margin-right:10px;
}
</style>
