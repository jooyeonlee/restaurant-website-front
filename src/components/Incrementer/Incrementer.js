import React from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Incrementer.css'

const Incrementer = (props) => {
    const { value, onDecrement, onIncrement } = props;

    return (
        <div>
            <IconButton aria-label="remove from shopping cart" onClick={onDecrement}>
                <RemoveIcon />
            </IconButton>
            <TextField variant="outlined" size="small" value={value} className="TextField"/>
            <IconButton aria-label="add to shopping cart" onClick={onIncrement}>
                <AddIcon />
            </IconButton>
        </div>
    );
}

export default Incrementer;
