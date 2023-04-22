import React from 'react';

export const useAnchorEl = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const onOpenMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const onCloseMenu = () => setAnchorEl(null);

  return {
    isOpen,
    anchorEl,
    onOpenMenu,
    onCloseMenu,
  };
};
