// Credit to ChatGPT for comments and organization.
import React from "react";

// Define the UserProfile component
export default function UserProfile({ name, biography, hobbies }) {
  return (
    <div>
      {/* Display the user's name */}
      <h2>Name: {name}</h2>
      {/* Display the user's biography */}
      <p>Bio: {biography}</p>
      {/* Display the user's hobbies as a list */}
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
