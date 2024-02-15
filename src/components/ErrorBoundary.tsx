import React from 'react'
import "../index.css"

export default function ErrorBoundary() {
  return (
    <div className="error-content">
      <div className="icon">
        <img
          src="https://open.spotifycdn.com/cdn/images/error-page-logo.24aca703.svg"
          alt="spotify logo"
        />
      </div>
      <h1>Something went wrong</h1>
      <p>We can’t seem to find the page you are looking for.</p>
      <button className="home-btn">
        <a href="/">Home</a>
      </button>
      <button
        className="refresh-btn"
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </button>
    </div>
  );
}

