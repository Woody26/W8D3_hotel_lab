<template lang="html">
<form id="bookings-form" v-on:submit="handleSubmit">
<h2>Add a Booking</h2>
<div class="formWrap">
  <label for="guest_name">Guest Name:</label>
  <input type="text" name="guest_name" v-model="guest_name">
</div>
<div class="formWrap">
  <label for="guest_email">Guest Email:</label>
  <input type="text" name="guest_email" v-model="guest_email">
</div>
<div class="formWrap">
  <label for="checked_in">Checked In:</label>
  <input type="text" name="checked_in" v-model="checked_in">
</div>

<input type="submit" value="Save" id="save">
</form>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
  name: 'bookings-form',
  data() {
    return {
      guest_name: "",
      guest_email: "",
      checked_in: ""
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        guest_name: this.guest_name,
        guest_email: this.guest_email,
        checked_in: this.checked_in
      };

      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
