import axios from 'axios'
import type Event from '../models/Event'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/kimarimt/real_world_vue/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getEvents = async () => {
  return apiClient.get<Array<Event>>('events')
}

const getEventById = async (id: string) => {
  return apiClient.get<Event>(`events/${id}`)
}

export default {
  getEvents,
  getEventById
}