import React from 'react';
import { Bell, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { signOut } from 'firebase/auth';
import { auth } from '../firbase/firebase'; // Ensure this path is correct

function Navbar() {
  const navigate = useNavigate(); // Get the navigate function

  const handleBellClick = () => {
    navigate('/calendar'); // Redirect to CalendarPage
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Log out the user
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error); // Handle errors if needed
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img 
          src="src/assets/WhatsApp Image 2024-09-22 at 11.35.38_1effa6a1.jpg" 
          alt="Logo" 
          className="mr-2 h-12 w-30 px-4" 
        />
        <h1 className="text-xl font-bold">Institute of Technology</h1>
      </div>
      <div className="flex items-center">
        <button className="p-2" onClick={handleBellClick}>
          <Bell className="mr-4" />
        </button>
        <button className="p-2" onClick={handleLogout}>
          <LogOut className="mr-4" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
