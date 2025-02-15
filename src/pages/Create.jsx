import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient';

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [rating, setRating] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !method || !rating) {
      setFormError('Please fill in all feilds correctly');
      return;
    }

    const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, method, rating }])
      .select();

    if (error) {
      setFormError('Please fill in all feilds correctly');
      console.log(error);
    }
    if (data) {
      console.log(data);
      setFormError(null);
      setTitle('');
      setMethod('');
      setRating('');
      navigate('/');
    }
  };

  return (
    <div className='page'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor='method'>Method:</label>
        <textarea
          id='method'
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor='rating'>Rating:</label>
        <input
          type='number'
          id='rating'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create Smoothie Recipe</button>

        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
