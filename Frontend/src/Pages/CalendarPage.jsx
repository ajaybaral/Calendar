import React from 'react';
import MyCalendar from '../components/Calendar';
import TaskForm from '../components/form';
import Navbar from '../components/Navbar';

const CalendarPage = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className='flex justify-center flex-col items-center bg-yellow-100'>
        {/* Calendar Component */}
        <MyCalendar />
        
        {/* Task Form for adding new tasks */}
        <TaskForm />
      </div>
    </div>
  );
};

export default CalendarPage;
