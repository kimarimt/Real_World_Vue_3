<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type Event  from '../models/Event'
import EventsService from '../services/EventsService'

interface Props {
  id: string
}

const event = ref<Event | null>(null)
const props = defineProps<Props>()

onMounted(async () => {
  try {
    const { data } = await EventsService.getEventById(props.id)
    event.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
