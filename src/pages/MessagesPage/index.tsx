import { MainLayout } from 'shared/ui';
import { Header, Navigation } from 'widgets';

export const MessagesPage = () => {
  return (
    <MainLayout header={<Header />} navbar={<Navigation />}>
      <div>MessagesPage</div>
    </MainLayout>
  );
};
