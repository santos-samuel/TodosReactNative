import {useState} from 'react';

const useGlobalState = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);

  const handleIsLoggedIn = (bool) => {
    setIsLoggedIn(bool);
  };

  function isLoggedIn() {
    return loggedIn;
  }

  return {isLoggedIn, handleIsLoggedIn};
};

export default useGlobalState;
