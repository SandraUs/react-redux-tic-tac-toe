import Information from './containers/Information';
import Field from './containers/Field';
import { store } from './store';

export default function App() {
  return (
    <div>
      <Information />
      <Field />

      <button
        onClick={() => store.dispatch({ type: 'RESET' })}
      >
        Сбросить игру
      </button>
    </div>
  );
}
