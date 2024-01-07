import React from 'react'
import styled from 'styled-components'

export default function Login() {

  const handleClick = () => {

    const clientId = '2a7393edbeeb4ce4a4198acb0d46877d';
    const redirectUrl = 'http://localhost:3000/';
    const apiUrl = 'https://accounts.spotify.com/authorize';
    const scope = [
      "user-read-email",
      "user-read-private" ,
      "user-read-playback-state ",
      "user-modify-playback-state",
      "user-read-currently-playing", 
      "user-library-read",
      "user-library-modify ",
      "user-read-recently-played",
      "user-top-read", 
      ];

      window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;

    };





  return <Container>
    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify" />
    <button onClick={handleClick}>Connect Spotify</button>
  </Container>;
  
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
    button {
      padding: 1rem 5rem;
      border-radius: 5rem;
      border: none;
      background-color: black;
      color: #49f585;
      font-size: 1.4rem;
      cursor: pointer;

    }
  }
`;