import React from 'react';
import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css';


export default function InformationLayout({ currentPlayer, isGameEnded, isDraw }){
let text = `Ходит: ${currentPlayer}`
if (isDraw) text = 'Ничья'
else if (isGameEnded) text = `Победа: ${currentPlayer}`


return (
<div className={styles.info} role="status">
{text}
</div>
)
}


InformationLayout.propTypes = {
currentPlayer: PropTypes.string.isRequired,
isGameEnded: PropTypes.bool.isRequired,
isDraw: PropTypes.bool.isRequired,
}
