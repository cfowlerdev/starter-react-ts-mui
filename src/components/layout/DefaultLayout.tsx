import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Sidenav } from '../Sidenav/Sidenav';
import { IAppRoute } from '../../routes';
import { Navbar } from '../Navbar';

interface IProps {
  routes?: Array<IAppRoute>;
}

export const DefaultLayout: React.FC<IProps> = ({ routes }) => {
  return (
    <>
      <Navbar />
      <Sidenav routes={routes} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
};
