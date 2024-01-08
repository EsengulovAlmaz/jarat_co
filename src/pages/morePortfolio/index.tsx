import PagesLayout from '../../elements/layouts/PagesLayouts';
import { InfoCard } from '../../components/infoCard';

const MorePortfolio = () => {
  return (
    <PagesLayout>
      <InfoCard url={'/portfolios'} />
    </PagesLayout>
  );
};

export default MorePortfolio;
