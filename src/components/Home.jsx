import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { currentUser } = useAuth();
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "https://calendarific.com/api/v2/holidays?api_key=FqsNz5P9tM1gQklpYqBC0aql9izvUikv&country=US&year=2024";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.response && data.response.holidays) {
                    setHolidays(data.response.holidays);
                } else {
                    console.error('Invalid holidays data:', data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching holidays:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='text-2xl font-bold pt-14'>
            {loading ? <p>Loading holidays...</p> :
                <>
                    <p>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</p>
                    <p>SORRY, BUT WE DON'T HAVE ANY OPENINGS THIS YEAR! HERE ARE SOME HOLIDAY EVENTS YOU COULD FIND US AT</p>
                    <h2>Holidays in the US:</h2>
                    <ul>
                        {holidays.map((holiday, index) => (
                            <li key={index}>{holiday.name} - {holiday.date.iso}</li>
                        ))}
                    </ul>
                </>
            }
        </div>
    );
}

export default Home;