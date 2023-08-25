import React from 'react';

import HeaderNav from '../../components/HeaderNav';

import { Outlet } from 'react-router-dom';
import { Toolbar, Box, Container } from '@mui/material';

function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderNav />
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          width: '100vw',
        }}
      >
        <Toolbar />
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
