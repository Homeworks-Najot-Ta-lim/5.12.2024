import React, { createContext, useState } from "react";

import UserForm from "./components/UserForm";
import UserSummary from "./components/UserSummary";
import ThemeChange from "./components/ThemeChange";
import ThemeContextProvider from "./components/ThemeContextProvider";

export const UserContext = createContext();

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  return (
    <ThemeContextProvider>
      <div className="container mx-auto p-6 max-w-md">
        <UserContext.Provider
          value={{ username, setUsername, email, setEmail, age, setAge }}
        >
          <ThemeChange />
          <h1 className="text-2xl font-bold mb-6">User Registration Form</h1>
          <UserForm />
          <UserSummary />
        </UserContext.Provider>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
