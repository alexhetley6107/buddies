import { MainLayout } from 'shared/ui';
import { Header, Navigation } from 'widgets';

export const FriendsPage = () => {
  return (
    <MainLayout header={<Header />} navbar={<Navigation />}>
      <div>FriendsPage</div>
    </MainLayout>
  );
};
