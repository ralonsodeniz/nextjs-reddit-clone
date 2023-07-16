import { createCommunityWithRevalidation } from '@/components/forms/Create/actions';
import Name from '@/components/forms/Create/components/Name';
import Submit from '@/components/forms/Create/components/Submit';

export const errors = new Map<string, string>();

const ServerActionForm = () => (
  <form action={createCommunityWithRevalidation}>
    <Name error={errors.get('name') ?? ''} />
    <Submit />
  </form>
);

export default ServerActionForm;
