import { useState, useEffect } from 'react';

const useSupabase = (supaCall) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let { data, error } = await supaCall();
        if (error) {
          setError(error);
        } else {
          setData(data);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return { loading, data, error };
};

export default useSupabase;
