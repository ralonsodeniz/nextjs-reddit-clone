import Name from '@/components/forms/Create/components/Name';
import Submit from '@/components/forms/Create/components/Submit';
import { createCommunityWithRevalidation } from '@/components/forms/Create/actions';

export const errors = new Map<string, string>();

const ServerActionForm = () => {
  return (
    <form action={createCommunityWithRevalidation}>
      <Name errors={errors} />
      <Submit />
    </form>
  );
};

export default ServerActionForm;
