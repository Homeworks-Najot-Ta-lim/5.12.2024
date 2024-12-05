import { useContext } from "react";
import { UserContext } from "../App";
import { useTheme } from "./ThemeChange";

const UserSummary = () => {

    const { username, email, age } = useContext(UserContext);
    const { theme, _ } = useTheme()

    return (
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
            <h2 className="text-lg font-semibold mb-2">User Summary</h2>
            <p>Username: {username || "Not provided"}</p>
            <p>Email: {email || "Not provided"}</p>
            <p>Age: {age || "Not provided"}</p>
        </div>
    );
};

export default UserSummary;
