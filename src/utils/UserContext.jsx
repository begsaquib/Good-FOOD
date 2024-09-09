import { createContext } from "react";

const UserContext = createContext({
    loggedInuser: "default user"
})
export default UserContext;