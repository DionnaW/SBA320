import React, { useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import Calendar from '../components/Calendar'; 

const Profile = () => {
  const [bookings, setBookings] = useState([]);
  const [newBookingDate, setNewBookingDate] = useState('');
  const [editBookingId, setEditBookingId] = useState('');
  const auth = getAuth(); // this will initialize Firebase auth

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const bookingsRef = ref(database, `bookings/${user.uid}`);
      onValue(bookingsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setBookings(Object.entries(data).map(([key, value]) => ({ id: key, date: value })));
        }
      });
    }
  }, []);

  const handleNewBooking = async () => {
    const user = auth.currentUser;
    if (user && newBookingDate.trim() !== '') {
      await push(ref(database, `bookings/${user.uid}`), newBookingDate.trim());
      setNewBookingDate('');
    }
  };

  const handleEditBooking = async (id, date) => {
    setEditBookingId(id);
    setNewBookingDate(date);
  };

  const handleUpdateBooking = async () => {
    const user = auth.currentUser;
    if (user && editBookingId && newBookingDate.trim() !== '') {
      await update(ref(database, `bookings/${user.uid}/${editBookingId}`), newBookingDate.trim());
      setEditBookingId('');
      setNewBookingDate('');
    }
  };

  const handleDeleteBooking = async (id) => {
    const user = auth.currentUser;
    if (user && id) {
      await remove(ref(database, `bookings/${user.uid}/${id}`));
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Bookings:</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.date}
            <button onClick={() => handleEditBooking(booking.id, booking.date)}>Edit</button>
            <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="date"
        value={newBookingDate}
        onChange={(e) => setNewBookingDate(e.target.value)}
        required
      />
      {editBookingId ? (
        <button onClick={handleUpdateBooking}>Update Booking</button>
      ) : (
        <button onClick={handleNewBooking}>Add Booking</button>
      )}
    </div>
  );
};

export default Profile;





























