import { MainLayout } from 'shared/ui';
import { Header, Navigation } from 'widgets';

export const FullPostPage = () => {
  return (
    <MainLayout header={<Header />} navbar={<Navigation />}>
      <div>FullPostPage</div>
    </MainLayout>
  );
};
