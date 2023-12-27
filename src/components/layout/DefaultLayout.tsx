import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import { Sidenav } from '../Sidenav/Sidenav';
import { IAppRoute } from '../../routes';

interface IProps {
  routes?: Array<IAppRoute>;
}

const Main = styled('main')(() => ({
  display: 'flex',
  flexGrow: 1
}));

export const DefaultLayout: React.FC<IProps> = ({ routes }) => {
  return (
    <>
      <Sidenav routes={routes} />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
