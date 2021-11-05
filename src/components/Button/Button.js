import React from 'react';
import MUIButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const Button = (props) => {
    const { children, isLoading, ...rest } = props;

    return (
        <MUIButton {...rest}>
            {!isLoading && children}
            {isLoading && <CircularProgress color="secondary" />}
        </MUIButton>
    )
}

export default Button;