import {useState} from 'react';

const useGlobalState = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);

  return {loggedIn, setIsLoggedIn};
};

export default useGlobalState;
