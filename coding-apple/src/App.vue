<template>
  <div class="black-bg" v-if="모달">
    <div class="white-bg">
      <h4>상세 페이지</h4>
      <p>상세 페이지 내용</p>
      <button v-on:click="모달 = false">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a :href="'/' + menu" v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>
  <div v-for="(원룸, index) in 원룸들" :key="원룸.id">
    <img :src="원룸.image" :alt="원룸.id" class="room-img">
    <h4 v-on:click="모달 = true">{{ 원룸.title }}</h4>
    <p>{{ formatNumber(원룸.price) }}원</p>
    <button v-on:click="increase(index)">따봉</button><span>따봉갯수 : {{ 따봉갯수[index] }}</span>
  </div>
</template>

<script>
import data from "./data"

export default {
  name: 'App',
  data() {
    return {
      원룸들: data,
      모달: false,
      따봉갯수: new Array(data.length).fill(0),
      menus: ["Home", "Shop", "About"],
    }
  },
  methods: {
    increase(id) {
      this.따봉갯수[id]++;
    },
    formatNumber(number) {
      // 340000을 340,000으로 콤마 찍어주는 함수
      // 숫자를 형식화하는 Intl.NumberFormat 객체 생성
      const formatter = new Intl.NumberFormat('en-US');

      // 숫자를 형식화하고 반환
      return formatter.format(number);
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
  text-decoration: none;
}

.room-img {
  width: 30%;
  margin-top: 40px;
}
</style>
