import { useSyncExternalStore } from 'react';
import { store } from '../../store';

export default function Field() {
  const state = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getState
  );

  const onClick = (index) => {
    if (state.board[index] || state.isGameEnded) return;

    store.dispatch({ type: 'MAKE_MOVE', index });
  };

  return (
    <div    >
      {state.board.map((cell, i) => (
        <div
          key={i}
          onClick={() => onClick(i)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
}
