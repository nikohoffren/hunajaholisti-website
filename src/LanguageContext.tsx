import React, { useState, useMemo } from "react";

interface LanguageContextValue {
    language: string;
    setLanguage: (language: string) => void;
}

export const LanguageContext = React.createContext<LanguageContextValue>({
    language: "fi",
    setLanguage: () => {},
});

interface LanguageContextProviderProps {
    children: React.ReactNode;
}

export const LanguageContextProvider: React.FC<
    LanguageContextProviderProps
> = ({ children }) => {
    const [language, setLanguage] = useState("fi");

    const value = useMemo(
        () => ({
            language,
            setLanguage,
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const LanguageContextConsumer = LanguageContext.Consumer;
