import React from 'react';
import PropTypes from 'prop-types';
import FieldLayout from '../../layouts/FieldLayout';


export default function Field({ field, onCellClick, isGameEnded }){
return (
<FieldLayout
field={field}
onCellClick={onCellClick}
isGameEnded={isGameEnded}
/>
)
}


Field.propTypes = {
field: PropTypes.arrayOf(PropTypes.string).isRequired,
onCellClick: PropTypes.func.isRequired,
isGameEnded: PropTypes.bool.isRequired,
}
