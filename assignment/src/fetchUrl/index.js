import  { useState, useEffect } from "react";

const baseURL = "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";

function useFetchUsers() {
  const [state, setState] = useState({
    payload: [],
    isLoading: false,
    isError: false
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState(prevState => ({
          ...prevState,
          isLoading: true
        }));

        fetch(baseURL)
            .then(res=> res.json())
            .then(res=>{
                setState(prevState => ({
                    ...prevState,
                    payload: res,
                    isLoading: false,
                    isError: false
                  }));
            })
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          isLoading: false,
          isError: true
        }));
      }
    }

    fetchData();
  }, []);

  return [state];
}

export default useFetchUsers;