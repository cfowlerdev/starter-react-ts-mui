import * as React from 'react';
import { Drawer, List, styled } from '@mui/material';
import { SidenavItem } from './SidenavItem';
import { IAppRoute } from '../../routes';

interface IProps {
  routes?: Array<IAppRoute>;
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 60,
  flexShrink: 0,
  overflowX: 'hidden',
  boxSizing: 'border-box',
  borderWidth: 0
}));

export const Sidenav: React.FC<IProps> = ({ routes }) => {
  const sideNavRoutes = routes
    ? routes
        .filter((route) => {
          return route.meta && route.meta.addToSidenav && route.meta.icon;
        })
        .map((route, idx) => {
          let path = route.path;
          if (route.children && route.children.length > 0) {
            for (const child of route.children) {
              if (child.index) {
                path = `${path}/${child.path}`;
              }
            }
          }
          console.log(`Adding path : ${path}`);
          return (
            <SidenavItem
              key={idx}
              label={route.meta!.label!}
              icon={route.meta!.icon!}
              link={path}
            />
          );
        })
    : [];

  return (
    <StyledDrawer variant="permanent" anchor="left" color="primary">
      <List sx={{ mt: 6 }}>{sideNavRoutes}</List>
    </StyledDrawer>
  );
};
