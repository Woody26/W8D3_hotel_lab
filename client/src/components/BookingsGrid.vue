<template lang="html">
<div id="bookingsGrid">
  <div class="booking" v-for="booking in bookings">
    <h2>{{booking.guest_name}}</h2>
    <h2>{{booking.guest_email}}</h2>
    <h2>{{booking.checked_in}}</h2>
    <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
    <button v-on:click="handleUpdate(booking)">Update Status</button>
  </div>
</div>
</template>

<script>
import BookingService from '../services/BookingService';
import { eventBus } from '../main';
export default {
  name: "bookings-grid",
  props: ["bookings"],
  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    },
    handleUpdate(payload){
      payload.checked_in = !payload.checked_in;
      BookingService.updateBooking(payload)
      .then(response => eventBus.$emit('booking-updated', payload))
    }
   }
  }
</script>

<style lang="css" scoped>
</style>
