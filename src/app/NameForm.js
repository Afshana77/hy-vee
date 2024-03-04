"use client"
import React, { useState } from 'react';

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    // prevent the default behavior of an element from triggering
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className='bg-gray-50 w-80   m-auto mb-2   rounded'>
    <form onSubmit={handleSubmit} className='m-auto flex justify-center p-2'>
      <input className='border rounded p-2 mr-2 w-50 focus:outline-none'
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter a Name"
      />
      <button className='bg-orange-400 text-gray-50 rounded p-2 ' type="submit">Submit</button>
    </form>
    </div>
  );
};

export default NameForm;
