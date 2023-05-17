import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Loading.css';

const Loading = () => {
return (
<div className="loading">
<CircularProgress size={80} thickness={4} color="primary" />
</div>
);
};

export default Loading;