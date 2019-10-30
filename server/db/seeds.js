use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guest_name: "Gary",
    guest_email: "gary@gmail.com",
    checked_in: true
  },
  {
    guest_name: "Colin",
    guest_email: "colin@gmail.com",
    checked_in: false
  }
]);
