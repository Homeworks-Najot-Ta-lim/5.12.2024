import { useContext } from "react";
import { UserContext } from "../App";
import Input from "./Input";
import Button from "./Button";

const UserForm = () => {
    const { username, setUsername, email, setEmail, age, setAge } =
        useContext(UserContext);

    return (
        <>
            <Input value={username} onChange={setUsername} placeholder="Username" />
            <Input
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="Email"
            />
            <Input type="number" value={age} onChange={setAge} placeholder="Age" />
            <Button onClick={() => alert("Form submitted!")} className="w-full">
                Submit
            </Button>
        </>
    );
};

export default UserForm;
