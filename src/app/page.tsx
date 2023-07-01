import { EN } from '@/locale/en';
import { getAuthSession } from '@/lib/auth';

const HomePage = async () => {
  const session = await getAuthSession();

  return <>{EN.home.welcome(session?.user.name ?? EN.common.userName)}</>;
};

export default HomePage;
