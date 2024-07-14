import {useState, useEffect} from 'react'

function useApi(apiUrl) {
    const [data, setData] = useState(null);
    
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        
      } catch (error) {
        
       
      }
    };

    useEffect(() => {
      fetchData();
    }, [apiUrl]);
  
    return data;
  }
  
  export default useApi;