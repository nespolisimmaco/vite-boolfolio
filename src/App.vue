<script>
import axios from 'axios';
export default {
  data() {
    return {
      projects: [

      ]
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get('http://localhost:8000/api/projects').then(resp => {
        console.log(resp);
        this.projects = resp.data.result;
      })
    }
  }
}
</script>
  
<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>