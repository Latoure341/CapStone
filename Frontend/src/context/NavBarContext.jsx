import { createContext, useState } from "react";

export const NavBarContext = createContext({});

export const NavBarContextProvider = ({children}) => {
    const [previewNavBar, setPreviewNavBar] = useState(false);

    return (
        <NavBarContext.Provider
        value={{previewNavBar, setPreviewNavBar}}
        >
            {children}
        </NavBarContext.Provider>
    )
}
