<script setup>
import { useCounterStore } from '../../store/counter'

const counter = useCounterStore();
</script>

<template>
    <h1> Welcome to Dashboard</h1>
    <h2>Counter: {{ counter.count }}</h2>
    <h2>Counter: {{ counter.countResult }}</h2>
    <div>
        <button @click="counter.increment" class="btn btn-sm btn-outline-dark fs-5">+</button>
        <button @click="counter.decrement" class="btn btn-sm btn-outline-dark fs-5">-</button>
    </div>
</template>

<style scoped>

</style>
