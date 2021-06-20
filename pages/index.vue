<template>
  <div class="container">
    <div class="header">
      <div class="main_text">
        <h1>Сайт простого программиста</h1>
        <h4>
          Портал на котором Вы сможете следить за мной и моей деятельностью
          ,читать акнуальные новости и статьи в мире IT.
          Просмотреть мои работы, заказать сайт или программу под ключ, заказать услугу и другое.
        </h4>
        <button>Подробнее</button>
      </div>
      <div class="main_img">
        <img src="@/static/img/Holst.svg" alt="">
      </div>
    </div>
    <div class="latter_news">
      <div class="head_news">
        <div class="news_name">Новости и статьи</div>
        <div class="sort_news">
          sort
        </div>
      </div>
      <div class="post_blocks">
        <div class="post_id" v-for="item in 4" :key="item">
          <div class="h_post_h">
            <nuxt-link to="/">Какой то тт или ты или я или что такое вообще</nuxt-link>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: "SANSETIK - Сайт простого программиста",
    meta: [
      {
        hid: 'sansetik - Сайт простого программиста',
        name: 'sansetik - Сайт простого программиста',
        content: 'Портал на котором Вы сможете следить за мной и моей деятельностью ,читать акнуальные новости и статьи в мире IT. Просмотреть мои работы, заказать сайт или программу под ключ, заказать услугу и другое.'
      }
    ]
  }
})
</script>
<style scoped>
.post_blocks{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.latter_news{
  margin-top: 80px;


}
.h_post_h{
  margin-top: 18px;
}
.post_id  a{
  text-decoration: none;
  color: #565656;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  margin-left: 23px;
}
.post_id{
  margin-top: 65px;
  height: 230px;
  width: 500px;
  border: 1px solid #BDBDBD;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.head_news{
  display: flex;
  justify-content: space-between;
}
.news_name{
  color: black;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.header{
  display: flex;
  justify-content: space-between;
  height: 306px;
  border-bottom: 1px solid #C1C1C1;
}
h1{
  width: 498px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 36px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.main_img{
  margin-top: 50px;
}
h4{
  margin-top: 16px;
  width: 550px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
}
button{
  margin-top: 20px;
  cursor: pointer;
  width: 160px;
  height: 34px;
  border-radius: 15px;
  border: none;
  background-color: #B77005;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
}
button:hover{
  background-color: #de8607;
}
</style>
