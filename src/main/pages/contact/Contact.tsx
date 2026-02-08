// import React from 'react'
import { useEffect } from 'react';
import HomePageEmailUs from '../home/_components/HomePageEmailUs'

const Contact = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <HomePageEmailUs />
    </div>
  )
}

export default Contact
