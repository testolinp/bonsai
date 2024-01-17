import styles from './title.module.css'
import React from 'react';
export default function Title({ level = 1, children}) {
  const CustomTag = `h${level}`;
  
  return React.createElement(CustomTag, { className: styles.title }, children);
}
