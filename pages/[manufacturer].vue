<template>
  <div>
    <h1>Cars by {{ manufacturer }}</h1>
    <div v-for="car in cars" :key="car.slug" class="car">
      <h2>{{ car.model }}</h2>
      <img :src="car.image" alt="Car Image" />
      <p>Price: ${{ car.price }}</p>
      <p>Year: {{ car.year }}</p>
      <p>Mileage: {{ car.mileage }} km</p>
      <p>{{ car.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useContent } from '@nuxt/content'
import { useRoute } from 'vue-router'

const route = useRoute()
const manufacturer = route.params.manufacturer

const { data: cars } = await useContent('cars')
  .where({ manufacturer })
  .fetch()
</script>
