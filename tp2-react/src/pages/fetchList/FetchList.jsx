import React from 'react';
import HeaderNav from '../../components/HeaderNav';
import { Paper, Box } from '@mui/material';

const FetchList = () => {
  return (
    <>
      <HeaderNav />
      <Paper sx={{ p: 2 }}>
        <Box>Fetch List</Box>
      </Paper>
    </>
  );
};
export default FetchList;
