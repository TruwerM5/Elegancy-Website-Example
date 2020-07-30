Vue.component('grid',{
  props: ['bg'],
  template:
  `<template>
    <div class="grid-item" @mouseover="hover = true" @mousemove="hover = true">
      <img :src="bg">
      <a href="work.html">
      <transition name="hover">
        <div class="black-wrapper" v-show="hover" @mouseout="hover = false">
          <span>&bull;&bull;&bull;</span>
        </div>
      </transition>
      </a>
    </div>
  </template>`,
  data(){
    return {hover: false}
  }
})
let gridItems = [
  {
    id:1,
    img: 'img/grid-1.jpg'
  },{
    id:2,
    img: 'img/grid-2.jpg'
  }, {
    id:3,
    img: 'img/grid-3.jpg'
  },{
    id:4,
    img: 'img/grid-4.jpg'
  },{
    id:5,
    img: 'img/grid-5.jpg'
  },{
    id:6,
    img: 'img/grid-6.jpg'
  },{
    id:7,
    img: 'img/grid-7.jpg'
  },{
    id:8,
    img: 'img/grid-8.jpg'
  },
]
let grid = new Vue({
  el: '#grid',
  data: {
    gridItems: gridItems
  }
})
let personalCards = new Vue({
  el: '#cards',
  data: {
    cards: [
      {
        img: 'img/card-1.jpeg',
        position: 'SEO',
        name: 'Tobias Shneider',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
      },{
        img: 'img/card-2.jpeg',
        position: 'DESIGNER',
        name: 'Jack Knife',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
      },{
        img: 'img/card-3.jpeg',
        position: 'DEVELOPER',
        name: 'Ricki Hall',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
      },
    ]
  }
})
