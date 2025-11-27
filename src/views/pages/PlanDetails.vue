<template>
    <div>
        <h1>Plan Details</h1>
        <h3>Plan : {{ currentPlan }}</h3>
        <p>This is Plan Details Page</p>

    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const currentPlan = route.params.id;
</script>

<style scoped>

</style>