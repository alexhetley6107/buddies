type NavItem = {
  title: string;
  route: string;
};

export const NAV_ITEMS: NavItem[] = [
  { title: 'my_page', route: '/' },
  { title: 'my_friends', route: '/friends' },
  { title: 'my_messages', route: '/messages' },
  { title: 'my_news', route: '/news' },
];
