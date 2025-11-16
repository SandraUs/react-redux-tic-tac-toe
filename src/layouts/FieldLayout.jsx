import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';


export default function FieldLayout({ field, onCellClick }){
	return (
		<div className={styles.grid}>
			{field.map((cell, idx) => (
				<button key={idx} className={styles.cell} onClick={() => onCellClick(idx)} disabled={!!cell} aria-label={`cell-${idx}`}>
					<span className={styles.symbol}>{cell}</span>
				</button>
			))}
		</div>
	)
}


FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
}
