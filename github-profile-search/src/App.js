import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const onSearch = async (username) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
        console.log(data);
      } else {
        // handle error
      }
    } catch (error) {
      // handle error
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      {isLoading ? <Loading /> : userProfile ? <UserProfile userProfile={userProfile} /> : null}
    </div>
  );
}

export default App;
