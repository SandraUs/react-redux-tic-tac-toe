import React, { useState, useCallback } from 'react';
import GameLayout from './layouts/GameLayout';
import Information from './containers/Information';
import Field from './containers/Field';
import styles from './App.module.css';

const WIN_PATTERNS = [
	[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

export default function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(''))

const checkWinner = useCallback((nextField) => {
	for (const pattern of WIN_PATTERNS){
	const [a,b,c] = pattern
	if (nextField[a] && nextField[a] === nextField[b] && nextField[a] === nextField[c]){
	return nextField[a]
	}
}
return null
}, [])

const handleCellClick = (index) => {
if (isGameEnded || field[index]) return


const nextField = field.slice()
nextField[index] = currentPlayer
setField(nextField)


const winner = checkWinner(nextField)
if (winner){
setIsGameEnded(true)
return
}


if (!nextField.includes('')){
setIsDraw(true)
return
}


setCurrentPlayer(prev => prev === 'X' ? '0' : 'X');
}


const handleRestart = () => {
setCurrentPlayer('X')
setIsGameEnded(false)
setIsDraw(false)
setField(Array(9).fill(''))
}


return (
<div className={styles.appRoot}>
<GameLayout onRestart={handleRestart}>
<Information
currentPlayer={currentPlayer}
isGameEnded={isGameEnded}
isDraw={isDraw}
/>
<Field
field={field}
onCellClick={handleCellClick}
isGameEnded={isGameEnded}
/>
</GameLayout>
</div>
)}
