import { Typography, Paper, Stack, Button } from '@mui/material';
import React from 'react';
import { useGetTodoList } from '../../api/todos';
import { TodoItem } from './components/TodoItem';
import AddIcon from '@mui/icons-material/Add';

interface ITodosProps {
  children?: React.ReactNode;
}

export const Todos: React.FC<ITodosProps> = () => {
  const { data: todoData, isLoading: todoLoading } = useGetTodoList(
    { page: 0, size: 100 },
    true
  );

  return (
    <Paper sx={{ p: 2 }} elevation={0}>
      <Typography variant="h5">Todos</Typography>
      <Stack direction="row" spacing={2} marginY={2}>
        <Button
          variant="outlined"
          sx={{ textTransform: 'none' }}
          startIcon={<AddIcon />}
        >
          Add Todo
        </Button>
      </Stack>
      <Stack spacing={2}>
        {todoData &&
          todoData.results &&
          todoData.results.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
      </Stack>
    </Paper>
  );
};
