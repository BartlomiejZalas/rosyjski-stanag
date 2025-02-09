import React, { useContext } from "react";
import { useState } from "react";

export const KeyboardMapping = () => {
    const { keyboardMapping, setKeyboardMapping } = useContext(KeyboardMappingContext);
    return (
        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: 4, justifySelf: 'anchor-center' }
        }>
            <input id="keyChbx" type="checkbox" checked={keyboardMapping} onChange={() => setKeyboardMapping(!keyboardMapping)} />
            < label style={{ flexGrow: 1 }} htmlFor="keyChbx" > Mapuj na rosyjski </label>
        </div>
    )
};

const KeyboardMappingContext = React.createContext({ keyboardMapping: false, setKeyboardMapping: (_: boolean) => { } });

export const KeyboardMappingProvider = ({ children }: React.PropsWithChildren) => {
    const [keyboardMapping, setKeyboardMapping] = useState(false);

    return <KeyboardMappingContext.Provider value={{ keyboardMapping, setKeyboardMapping }}>{children}</KeyboardMappingContext.Provider>
}

export const useKeyboardMapping = () => useContext(KeyboardMappingContext);

