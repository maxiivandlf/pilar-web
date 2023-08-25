import React from 'react';
import HeaderNav from '../../components/HeaderNav';
import { Paper, Box } from '@mui/material';

const ToDo = () => {
  return (
    <>
      <HeaderNav />
      <Paper sx={{ p: 2 }}>
        <Box>To Do List</Box>
      </Paper>
    </>
  );
};
export default ToDo;
