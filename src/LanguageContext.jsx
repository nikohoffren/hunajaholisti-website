import React, { useState } from "react"

export const LanguageContext = React.createContext({
  language: "fi",
  setLanguage: () => {}
})

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("fi")

  const value = {
    language,
    setLanguage
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const LanguageContextConsumer = LanguageContext.Consumer
