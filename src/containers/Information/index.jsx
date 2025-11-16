import { useSyncExternalStore } from 'react';
import { store } from '../../store';

export default function Information() {
  const state = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getState
  );

  return (
    <div>
      {state.isGameEnded && <h2>Игра окончена! Победил {state.currentPlayer}</h2>}
      {state.isDraw && <h2>Ничья!</h2>}
      {!state.isGameEnded && !state.isDraw && (
        <h2>Ход игрока: {state.currentPlayer}</h2>
      )}
    </div>
  );
}
