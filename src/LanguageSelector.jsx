import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  const handleClick = (lang) => {
    setLanguage(lang)
    console.log(lang)
  }

  return (
    <div className="language-selector">
      <button onClick={() => handleClick('fi')} className={language === 'fi' ? 'active' : ''}>
        FI
      </button>
      <button onClick={() => handleClick('en')} className={language === 'en' ? 'active' : ''}>
        EN
      </button>
    </div>
  )
}

export default LanguageSelector
