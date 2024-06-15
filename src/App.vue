<template>
    <div id="app">
      <PlaylistComponent />
    </div>
  </template>
  
  <script>
  import PlaylistComponent from './components/PlaylistComponent.vue';
  
  export default {
    name: 'playlist',
    components: {
      PlaylistComponent,
    },
  };
  </script>
  
  <style>
  body{
    margin: 0;
    background-color: #121212;
  }
  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    /* background-color: #121212; */
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
  }
  </style>
  