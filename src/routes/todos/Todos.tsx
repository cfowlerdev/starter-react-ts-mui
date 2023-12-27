import { Typography, Paper } from '@mui/material';
import React from 'react';

interface ITodosProps {
  children?: React.ReactNode;
}

export const Todos: React.FC<ITodosProps> = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5">Todos</Typography>
    </Paper>
  );
};
