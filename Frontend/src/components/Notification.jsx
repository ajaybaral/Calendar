import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Notification() {
  const [data, setData] = useState([]); // Initial state is an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Tasks');
        const currentDate = new Date();

        // Filter tasks for future dates and sort by closest date first
        const upcomingTasks = response.data
          .filter(task => new Date(task.date) > currentDate) // Filter out past tasks
          .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

        setData(upcomingTasks); // Set the filtered and sorted tasks
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <div>
      <h1 className="text-4xl flex item-center justify-center">Your Tasks</h1>
      <p className="flex item-center justify-center">Here are your upcoming tasks:</p>

      <div>
        {data.length > 0 ? (
          data.map((task) => (
            <div key={task._id} className="bg-blue-500 p-4 m-5 rounded-md max-w-4xl flex flex-row items-center justify-center text-white">
              <h1 className="w-20 p-3">
                {task.title}
              </h1>
              <p className="max-w-md p-3">
                {task.description} is scheduled for {new Date(task.date).toLocaleString()}.
              </p>
              <p className="p-3">{task.date.split('T')[0]}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
