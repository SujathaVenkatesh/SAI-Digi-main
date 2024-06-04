import React, { useState } from 'react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'english' ? 'tamil' : 'english');
  };

  return (
    <div>
      <button onClick={toggleLanguage}>Toggle Language</button>
      {language === 'english' && <p>English content</p>}
      {language === 'tamil' && <p>தமிழ் உள்ளடக்கம்</p>}
    </div>
  );
};

export default LanguageToggle;
