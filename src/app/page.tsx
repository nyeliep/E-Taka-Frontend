'use client'
import React, { useEffect, useState } from 'react';
import cookie from 'cookiejs';
import { useRouter } from 'next/navigation';
const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userLoggedIn = Boolean(cookie.get('sessionToken'));
    if (!userLoggedIn) {
      router.push('/login');
    }
    else {
      setIsUserLoggedIn(userLoggedIn);
      router.push('/dashboard')
    }
  }, []);
  return (
    <div className="h-screen flex items-center justify-center bg-orange-100">
  <div className="text-center text-4xl custom-primary-text">
    {isUserLoggedIn ?
      'Welcome back!  🎉':
      'Just a moment... '
    }
  </div>
</div>
  );
};
export default Home;
