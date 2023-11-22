import React from 'react'
import styled from 'styled-components'
const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
`

const LanguageLabel = styled.label`
  margin-right: 8px;
`

const LanguageSelect = styled.select`
  padding: 4px;
  border-radius: 4px;
`

const LanguageOption = styled.option``

const LanguageSelector = () => {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value
    // Implement logic to change the language based on selectedLanguage
    console.log(`Selected language: ${selectedLanguage}`)
  }

  return (
    <LanguageContainer>
      <LanguageSelect onChange={handleLanguageChange}>
        <LanguageOption value="en">English</LanguageOption>
        <LanguageOption value="es">Español</LanguageOption>
        <LanguageOption value="fr">Français</LanguageOption>
        <LanguageOption value="de">Deutsch</LanguageOption>
      </LanguageSelect>
    </LanguageContainer>
  )
}

export default LanguageSelector
