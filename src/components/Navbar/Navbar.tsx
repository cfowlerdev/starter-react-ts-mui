import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
interface INavbarProps {}

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1
}));

export const Navbar: React.FC<INavbarProps> = () => {
  return (
    <StyledAppbar position="fixed" elevation={0}>
      <Toolbar variant="dense">
        <Typography variant="h6">App Title</Typography>
      </Toolbar>
    </StyledAppbar>
  );
};
