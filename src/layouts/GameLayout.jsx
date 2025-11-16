import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameLayout.module.css';


export default function GameLayout({ children, onRestart }){
	return (
		<main className={styles.container}>
			<h1 className={styles.title}>Крестики — Нолики</h1>
			<div className={styles.controls}>{children}</div>
			<button className={styles.restart} onClick={onRestart}>Начать заново</button>
		</main>
)
}


GameLayout.propTypes = {
	children: PropTypes.node,
	onRestart: PropTypes.func.isRequired,
}
