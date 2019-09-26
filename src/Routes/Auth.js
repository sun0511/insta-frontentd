import React, {useState} from "react";

export default () => {

    const [action, setAction] = useState("sdsdsd");

    return action === ";ogIn" ? "Log in" : "Sign Up";
}