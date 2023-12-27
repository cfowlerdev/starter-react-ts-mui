import * as React from 'react';
import { Box, Drawer, List, Toolbar } from '@mui/material';
import { SidenavItem } from './SidenavItem';
import { IAppRoute } from '../../routes';

interface IProps {
  routes?: Array<IAppRoute>;
}

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
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' }
      }}
    >
      <Toolbar variant="dense" />
      <Box sx={{ overflow: 'auto' }}>
        <List>{sideNavRoutes}</List>
      </Box>
    </Drawer>
  );
};
