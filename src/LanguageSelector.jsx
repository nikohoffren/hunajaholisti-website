import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  const handleClick = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className="language-selector">
      <button onClick={() => handleClick('fi')} className={language === 'fi' ? 'active' : ''}>
        <img src="./Flag_of_Finland.svg.png" alt="" className="language-flag" />
      </button>
      <button onClick={() => handleClick('en')} className={language === 'en' ? 'active' : ''}>
        <img src="./Flag_of_the_United_Kingdom_(1-2).svg.png" alt="" className="language-flag" />
      </button>
    </div>
  )
}

export default LanguageSelector
