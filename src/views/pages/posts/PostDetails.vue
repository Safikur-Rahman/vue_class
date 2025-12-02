        <script setup lang="ts">
        import { useRoute } from 'vue-router';
        
            let route = useRoute();
        </script>
<template>
    
    <h3>Post Details</h3>
    <table class="table table-striped">
        <thead>
            <tr >
                <td>ID</td>
                <td><i class="fa-solid fa-user"></i>User ID</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ route.params.id }}</td>
                <td>{{ route.params.userid }}</td>
               
            </tr>
        </tbody>

    </table>
</template>


<style scoped>

</style>