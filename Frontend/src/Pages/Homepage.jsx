import React from 'react';
import MyCalendar from '../components/Calendar';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="flex justify-center flex-col items-center bg-yellow-100">
        {/* Calendar Component */}
        <MyCalendar />
        
        {/* Notification Component */}
        <Notification />

        {/* Links to Login and Calendar (Conditional based on auth) */}
        <div className="mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
