import { useSyncExternalStore } from 'react';
import { store } from '../../store';
import styles from '../../layouts/InformationLayout.module.css';

export default function Information() {
  const state = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getState
  );

  return (
    <div className={styles.info}>
      {state.isGameEnded && (
        <h2 className={styles.text}>Игра окончена! Победил {state.currentPlayer}</h2>
      )}

      {state.isDraw && <h2 className={styles.text}>Ничья!</h2>}

      {!state.isGameEnded && !state.isDraw && (
        <h2 className={styles.text}>Ход игрока: {state.currentPlayer}</h2>
      )}
    </div>
  );
}
