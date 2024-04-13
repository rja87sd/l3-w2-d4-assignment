import React from "react";
import NavBar from "../components/NavBar";
import UserProfile from "../components/UserProfile";

export default function index() {
  return (
    <main className="flex min-h-screen flex-col justify-evenly items-center p-24">
      <NavBar />
      <UserProfile
        name="John Doe"
        biography="I'm a software engineer with a passion for coding."
        hobbies={["Reading", "Gaming", "Traveling"]}
      />
      <UserProfile
        name="John Doe II"
        biography=""
        hobbies={[]}
      />
    </main>
  );
}
