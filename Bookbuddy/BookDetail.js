import React, { useState, useEffect } from 'react';

const Home = ({ auth }) => {
  const [reservationCount, setReservationCount] = useState(0);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`, {
          headers: {
            "Authorization": `Bearer ${window.localStorage.getItem("token")}`
          }
        });
        const data = await response.json();
        const userReservations = data.reservation.filter(reservation => reservation.userId === auth.id);
        setReservationCount(userReservations.length);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    if (auth.id) {
      fetchReservations();
    }
  }, [auth]);

  return (
    <div>
      <h1>Welcome to Book Buddy</h1>
      {auth.id && (
        <p>You have {reservationCount} reservations.</p>
      )}
    </div>
  );
};

export default Home;

