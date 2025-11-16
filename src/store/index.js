import { createStore } from 'redux';

const initialState = {
	board: Array(9).fill(null),
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'MAKE_MOVE': {
			const newBoard = [...state.board];
			newBoard[action.index] = state.currentPlayer;

			const lines = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];

			for (let [a, b, c] of lines) {
				if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
					return {
						...state,
						board: newBoard,
						isGameEnded: true,
					};
				}
			}

			const isDraw = newBoard.every((cell) => cell !== null);

			return {
				...state,
				board: newBoard,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
				isDraw,
			};
		}

		case 'RESET':
			return initialState;

		default:
			return state;
	}
}

export const store = createStore(reducer);
