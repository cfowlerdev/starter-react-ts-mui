import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { Sidenav } from '../Sidenav/Sidenav';
import { IAppRoute } from '../../routes';
import { Navbar } from '../Navbar';

interface IProps {
  routes?: Array<IAppRoute>;
}

export const DefaultLayout: React.FC<IProps> = ({ routes }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidenav routes={routes} />
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Toolbar variant="dense" />
        <Outlet />
      </Box>
    </Box>
  );
};
