< ```vue
<template>
  <div>
    <h1>Used Cars</h1>
    <div v-for="car in cars" :key="car.title" class="car">
      <h2>{{ car.title }}</h2>
      <img :src="car.image" alt="Car Image" />
      <p>Price: ${{ car.price }}</p>
      <p>Year: {{ car.year }}</p>
      <p>Mileage: {{ car.mileage }} km</p>
      <p>{{ car.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '@nuxt/content'

const { data: cars } = await useFetch(() => $fetch('/api/cars'))
</script>
```




  