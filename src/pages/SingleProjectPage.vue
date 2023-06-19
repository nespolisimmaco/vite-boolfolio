<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: "SingleProjectPage",
    data() {
        return {
            store,
            project: ''
        }
    },
    mounted() {
        console.log(this.$route);
        const slug = this.$route.params.slug;
        axios.get(`${store.apiBaseUrl}/api/projects/${slug}`).then(resp => {
            console.log(resp);
            this.project = resp.data.result;
        }, error => {
            console.log(error);
            if (error.response.status === 404) {
                this.$router.push({ name: 'NotFound' })
            } else {
                alert('Oops qualcosa è andato storto...')
            }
        });
    },
    methods: {
        goBack() {
            this.$router.back();
        }
    }
}
</script>

<template>
    <div class="container">
        <!-- Titolo -->
        <h2>{{ project.title }}</h2>
        <!-- Immagine -->
        <div v-if="project.image">
            <img width="300" :src="`${store.apiBaseUrl}/storage/${project.image}`" :alt="project.title">
        </div>
        <!-- Tipo -->
        <div class="mt-3" v-if="project.type">
            <h4>Tipo</h4>
            <div>{{ project.type.name }}</div>
        </div>
        <!-- Contenuto -->
        <div class="mt-3" v-if="project.content">
            <h4>Contenuto</h4>
            <div>{{ project.content }}</div>
        </div>
        <!-- Descrizione -->
        <div class="mt-3" v-if="project.description">
            <h4>Descrizione</h4>
            <div>{{ project.description }}</div>
        </div>
        <!-- Tecnologie -->
        <div class="mt-3" v-if="project.technologies && project.technologies != ''">
            <h4>Tecnologie</h4>
            <ul>
                <li v-for="technology in project.technologies">{{ technology.name }}</li>
            </ul>
        </div>
        <a class="btn btn-primary" @click.prevent="goBack()" href="">Indietro</a>
    </div>
</template>


<style lang="scss" scoped></style>