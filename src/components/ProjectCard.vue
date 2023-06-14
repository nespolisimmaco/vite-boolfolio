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
        </div>
    </div>
</template>


<style lang="scss" scoped></style>