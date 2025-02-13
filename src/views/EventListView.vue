<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type Event from '../models/Event'
import EventsService from '../services/EventsService'
import EventCard from '../components/EventCard.vue'

const events = ref<Array<Event> | null>(null)

onMounted(async () => {
  try {
    const { data } = await EventsService.getEvents()
    events.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard 
      v-for="event in events" 
      :key="event.id" 
      :event="event" 
    />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>