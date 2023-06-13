<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
export default {
  components: { ProjectCard },
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get("http://localhost:8000/api/projects").then(resp => {
        this.projects = resp.data.result;
      });
    }
  },
}
</script>
  
<template>
  <div>
    <h1>Lista dei progetti</h1>
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>