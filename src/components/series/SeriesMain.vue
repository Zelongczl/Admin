<template>
    <div>
      <h2>漫画目录</h2>
      <ul>
        <li v-for="series in seriesList" :key="series.id">
          <img :src="series.portraitImage" alt="Series Cover" style="width: 100px; height: auto;">
          <span>{{ series.title }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        seriesList: [],
      };
    },
    created() {
      this.fetchSeriesList();
    },
    methods: {
      fetchSeriesList() {
        axios.get('http://localhost:9090/admin/series')
          .then(response => {
            this.seriesList = response.data;
          })
          .catch(error => {
            console.error('Error fetching series list:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>