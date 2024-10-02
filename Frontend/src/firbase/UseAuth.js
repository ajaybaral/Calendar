import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Adjust path if necessary

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Set the current user state
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return { currentUser };
};

export default useAuth;
