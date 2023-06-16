<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card h-100">
        <img v-if="project.image" :src="`http://localhost:8000/storage/${project.image}`" class="card-img-top"
            :alt="project.title">
        <div v-else>Nessuna immagine</div>
        <div class="card-body text-center">
            <h5>{{ project.title }}</h5>
            <p>{{ project.description }}</p>
            <div v-if="project.type">
                <h6 class="text-primary">Tipo</h6>
                <div>{{ project.type.name }}</div>
            </div>
            <div v-if="project.technologies != ''">
                <h6 class="text-primary mt-2">Tecnologie</h6>
                <div v-for="technology in project.technologies">{{ technology.name }}</div>
            </div>
            <router-link :to="{ name: 'single_project', params: { slug: project.slug } }"
                class="btn btn-primary my-3">Dettagli</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>