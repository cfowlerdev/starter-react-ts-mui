import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  styled
} from '@mui/material';
import { NavLink } from 'react-router-dom';

interface ISidenavItemProps {
  icon: React.ReactElement;
  label?: string;
  link?: string;
  open: boolean;
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

export const SidenavItem: React.FC<ISidenavItemProps> = ({
  link,
  icon,
  label,
  open
}) => {
  const Icon = () => (
    <Tooltip title={label} placement="left">
      <ListItemButton
        sx={{
          minHeight: 50,
          height: 50,
          px: 2.5,
          justifyContent: open ? 'initial' : 'center'
        }}
      >
        <ListItemIcon
          sx={{ mr: open ? 3 : 'auto', minWidth: 0, justifyContent: 'center' }}
        >
          {icon}
        </ListItemIcon>
        {label && (
          <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
        )}
      </ListItemButton>
    </Tooltip>
  );
  return link ? (
    <StyledListItem
      // @ts-expect-error Doesn't seem to like custom component as component
      component={NavLink}
      to={link}
      activeClassName="Mui-selected"
      disablePadding
    >
      <Icon />
    </StyledListItem>
  ) : (
    <StyledListItem disablePadding>
      <Icon />
    </StyledListItem>
  );
};
