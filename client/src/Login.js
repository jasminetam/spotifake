import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=9fb8feb26b4340e9a8d5dee6c0c3bef6&response_type=code&redirect_uri=https://spotifake-alpha.vercel.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center z-index-100"
        style={{ minHeight: "100vh" }}
      >
        <a className="btn btn-success btn-lg cursor-pointer" href={AUTH_URL}>
          Login with Spotify
        </a>
      </Container>
    </>
  );
}
