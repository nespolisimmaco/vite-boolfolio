<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    components: { ProjectCard },
    name: "ProjectsPage",
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: null,
            totalProjects: 0
        };
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        getProjects(pageNum = 1) {
            axios.get("http://localhost:8000/api/projects", {
                params: {
                    page: pageNum
                }
            }).then(resp => {
                console.log(resp);
                this.projects = resp.data.result.data;
                this.currentPage = resp.data.result.current_page;
                this.lastPage = resp.data.result.last_page;
                this.totalProjects = resp.data.result.total;
            });
        }
    },
}

</script>

<template>
    <div class="container">
        <h1>Lista dei progetti</h1>
        <div class="text-end my-2">
            Trovati {{ totalProjects }} progetti
        </div>
        <div class="row row-cols-4 g-3">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>
        <nav v-if="lastPage" class="d-flex justify-content-center my-3" aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }"><a
                        @click.prevent="getProjects(currentPage - 1)" class="page-link" href="#">Previous</a></li>
                <li v-for="projectNumber in lastPage" @click.prevent="getProjects(projectNumber)"
                    :class="{ 'active': projectNumber === currentPage }" class="page-item"><a class="page-link" href="#">{{
                        projectNumber }}</a></li>
                <li class="page-item" :class="{ 'disabled': currentPage === lastPage }"><a
                        @click.prevent="getProjects(currentPage + 1)" class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>


<style lang="scss" scoped></style>