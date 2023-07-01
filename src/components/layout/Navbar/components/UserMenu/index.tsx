import { User } from 'next-auth';

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import UserAvatar from '@/components/module/UserAvatar';

interface IUserMenu {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

const UserMenu = ({ user }: IUserMenu) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default UserMenu;
