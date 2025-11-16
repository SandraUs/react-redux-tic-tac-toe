const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function checkWinner(field) {
	for (const [a, b, c] of WIN_PATTERNS) {
		if (field[a] && field[a] === field[b] && field[a] === field[c]) {
			return field[a];
		}
	}
	return null;
}

export const initialState = {
	currentPlayer: 'X',
	winner: null,
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_FIELD': {
			if (state.isGameEnded || state.isDraw || state.field[payload]) {
				return state;
			}

			const nextField = [...state.field];
			nextField[payload] = state.currentPlayer;

			const winner = checkWinner(nextField);
			if (winner) {
				return {
					...state,
					field: nextField,
					isGameEnded: true,
					winner: state.currentPlayer,
				};
			}

			if (!nextField.includes('')) {
				return {
					...state,
					field: nextField,
					isDraw: true,
				};
			}

			return {
				...state,
				field: nextField,
				currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
			};
		}

		case 'RESTART_GAME':
			return { ...initialState };

		default:
			return state;
	}
};
