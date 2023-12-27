import * as React from 'react';
import { Drawer, List, Toolbar, Theme, CSSObject, styled } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { SidenavItem } from './SidenavItem';
import { IAppRoute } from '../../routes';

interface IProps {
  routes?: Array<IAppRoute>;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export const Sidenav: React.FC<IProps> = ({ routes }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
              open={open}
            />
          );
        })
    : [];

  return (
    <StyledDrawer variant="permanent" open={open}>
      <Toolbar variant="dense" />
      <List>{sideNavRoutes}</List>
      <List style={{ position: 'fixed', bottom: 0 }}>
        <SidenavItem
          icon={
            open ? (
              <ChevronLeftIcon onClick={handleDrawerClose} />
            ) : (
              <ChevronRightIcon onClick={handleDrawerOpen} />
            )
          }
          open={open}
        />
      </List>
    </StyledDrawer>
  );
};
