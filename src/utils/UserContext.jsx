import { createContext } from "react";

const UserContext = createContext({
    loggedInuser: "default"
})
export default UserContext;