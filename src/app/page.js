import React from "react";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <NavBar />
      <p>Objective</p>
      <p>
        This assignment is designed to reinforce your skills in creating dynamic
        user interfaces with React, utilizing conditional rendering, props, and
        client-side navigation with Next.js. Instead of replicating the demo
        code, you will apply these concepts in a new context. You will build a
        user profile page that dynamically displays user information and
        includes navigation to different sections of the profile.
      </p>
      <br></br>
      <p>Instructions</p>
      <p>Part 1: User Profile Setup</p>
      <p>
        Create a User Profile Component: Name your component UserProfile. It
        should display a user's name, biography, and a list of hobbies. This
        information will be passed as props to the component. Implement
        Conditional Rendering: Within the UserProfile component, use conditional
        rendering to display a message if the user's biography is not provided.
        For example, "No biography available".
      </p>
      <br></br>
      <p>Part 2: Dynamic Hobbies</p>
      <p>
        List Rendering the Hobbies List: Pass a list of hobbies to the
        UserProfile component as props. Use the map function to display each
        hobby as an item in an unordered list. If the list of hobbies is empty,
        display a message like "No hobbies listed".
      </p>
      <br></br>
      <p>Part 3: Navigation and Page Layout</p>
      <p>
        Implement Client-Side Navigation: Create a simple navigation bar
        component that allows the user to navigate between the 'Home' page and
        the 'User Profile' page without reloading the page. Use the Link
        component from Next.js for navigation links. Create a Home Page and
        Profile Page: Set up two pages in your Next.js app folder: page.js
        (Home) and profile directory (page.js). Include the navigation bar in
        both pages to allow easy navigation between them.
      </p>
      <br></br>
      <p>Part 4: Fetching User Data</p>
      <p>
        Simulate Fetching User Data: On the 'User Profile' page, simulate
        fetching user data (e.g., name, biography, hobbies) by defining a user
        object and passing it as props to the UserProfile component.
      </p>
      <br></br>
      <p>Part 5: GitHub Repository</p>
      <p>
        Update Commit and Push Your Changes: Ensure all your changes are
        committed with clear, descriptive messages. Push the commits to your
        GitHub repository.
      </p>
      <br></br>
      <p>Part 6: Submission</p>
      <p>Submit Your GitHub Repository URL: Provide the URL to your GitHub
      repository that contains your Next.js application as your submission for
      this assignment.</p>
    </main>
  );
}
