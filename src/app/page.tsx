import { EN } from '@/locale/en';
import { getAuthSession } from '@/lib/auth';

const HomePage = async () => {
  const session = await getAuthSession();

  return (
    <>
      {session
        ? EN.home.welcome(session?.user.name ?? EN.common.userName)
        : EN.home.notSignedIn}
    </>
  );
};

export default HomePage;
