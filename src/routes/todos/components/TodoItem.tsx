import React from 'react';
import { Box, Typography, ButtonGroup, IconButton } from '@mui/material';
import { IGetTodoResponse } from '../../../api/todos';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ITodoItemProps {
  item: IGetTodoResponse;
}

export const TodoItem: React.FC<ITodoItemProps> = ({ item }) => {
  return (
    <Box border={1} borderRadius={2} borderColor="#c0c0c0">
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" flexGrow={1} marginX={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            {item.title}
          </Typography>
          <Typography variant="subtitle2">{item.description}</Typography>
        </Box>
        <ButtonGroup>
          <IconButton aria-label="done">
            <DoneIcon />
          </IconButton>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
