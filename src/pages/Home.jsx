import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from('smoothies').select();

      if (error) {
        setFetchError('Could not fetch smoothies');
        setSmoothies(null);
        console.log(error);
      }

      if (data) {
        setSmoothies(data);
        setFetchError(null);
        console.log(data);
      }
    };

    fetchSmoothies();
  }, []);

  console.log(supabase);

  return (
    <div className='home-page'>
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className='smoothies'>
          {smoothies.map((smoothie, index) => (
            <p key={index}>{smoothie.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
