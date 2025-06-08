import { PlayBody, PopUpCard } from '../../components';

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <PopUpCard body={<PlayBody />} />
    </div>
  );
};

export default HomePage;
