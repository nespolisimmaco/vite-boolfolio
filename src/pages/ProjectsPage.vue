<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import { store } from "../store";

export default {
    components: { ProjectCard },
    name: "ProjectsPage",
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: null,
            totalProjects: 0,
            store,
            types: [],
            selectedType: ""
        };
    },
    mounted() {
        this.getProjects();
        this.getTypes();
    },
    methods: {
        getTypes() {
            axios.get(`${store.apiBaseUrl}/api/types`).then(resp => {
                this.types = resp.data.results;
            })
        },
        getProjects(pageNum = 1) {
            const params = {
                page: pageNum,

            }
            if (this.selectedType != 'all') {
                params.type_id = this.selectedType;
            }
            axios.get(`${store.apiBaseUrl}/api/projects`, { params }).then(resp => {
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
        <select @change="getProjects()" v-model="selectedType" class="form-select" aria-label="Type select">
            <option value="all">Tutti i progetti</option>
            <option :value="type.id" v-for="type in types" :key="type.id">{{ type.name }}</option>
        </select>
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