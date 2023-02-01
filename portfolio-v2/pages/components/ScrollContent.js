import React, { useState, useEffect } from 'react';
import styles from './landingPage.module.css';

const ScrollContent = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        setShowContent(true);
      }
    });
  }, []);

  return (
    <div className={`${styles.scrollContent} ${showContent ? styles.show : ''}`}>
      <p>Additional content that will appear when you scroll down</p>
    </div>
  );
};

export default ScrollContent;
