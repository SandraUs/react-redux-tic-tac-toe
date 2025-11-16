import React from 'react';
import Information from './containers/Information';
import Field from './containers/Field';
import { store } from './store';
import styles from './App.module.css';

export default function App() {
  const handleReset = () => {
    store.dispatch({ type: 'RESET' });
  };

  return (
    <div className={styles.app}>
      <Information />

      <Field />

      <button className={styles.resetButton} onClick={handleReset}>
        Сбросить игру
      </button>
    </div>
  );
}
