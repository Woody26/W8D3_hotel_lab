<template>
  <div id="app">
    <h1>Hotel Bookings</h1>
    <bookings-form/>
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import BookingService from './services/BookingService';
import { eventBus } from './main.js';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components:{
    'bookings-grid': BookingsGrid,
    'bookings-form': BookingsForm
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })

    eventBus.$on('booking-updated', updatedBooking => {
      const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
      this.bookings.splice(index, 1, updatedBooking);
    })
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
