import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  styled
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface ISidenavItemProps {
  icon: React.ReactElement;
  label: string;
  link?: string;
}

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'activeClassName'
})(({ theme }) => ({
  display: 'block',
  color: theme.palette.text.primary,
  '&.active': {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiSvgIcon-root': { color: theme.palette.background.default },
    '& .MuiIcon-root': { color: theme.palette.background.default },
    '& .MuiListItemText-root': { color: theme.palette.background.default }
  }
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 0,
  justifyContent: 'center',
  color: theme.palette.common.white
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
  minHeight: 50,
  height: 50,
  justifyContent: 'center',
  px: 2.5
}));

const StyledListItemText = styled(ListItemText)(() => ({
  marginLeft: 0,
  opacity: 0
}));

export const SidenavItem: React.FC<ISidenavItemProps> = ({
  link,
  icon,
  label
}) => {
  const Icon = () => (
    <Tooltip title={label} placement="left">
      <StyledListItemButton>
        <StyledListItemIcon>{icon}</StyledListItemIcon>
        <StyledListItemText primary={label} />
      </StyledListItemButton>
    </Tooltip>
  );
  return (
    <StyledListItem
      component={NavLink}
      to={link}
      activeClassName="Mui-selected"
      disablePadding
    >
      <Icon />
    </StyledListItem>
  );
};
