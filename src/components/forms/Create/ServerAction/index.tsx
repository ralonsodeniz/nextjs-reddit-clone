import { createCommunityAction } from '@/actions/community';
import Name from '@/components/forms/Create/ServerAction/components/Name';
import Submit from '@/components/forms/Create/ServerAction/components/Submit';

export const errors = new Map<string, string>();

const ServerActionForm = () => (
  <form action={createCommunityAction}>
    <Name error={errors.get('name') ?? ''} />
    <Submit />
  </form>
);

export default ServerActionForm;
