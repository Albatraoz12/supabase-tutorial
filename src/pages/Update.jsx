import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        navigate('/', { replace: true });
        console.log(error);
      }

      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
        console.log(data);
      }
    };

    fetchSmoothie();
  }, [id, navigate]);

  return (
    <div>
      <h1>Update {id}</h1>
    </div>
  );
};

export default Update;
