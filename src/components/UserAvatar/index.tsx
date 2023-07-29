import Image from 'next/image';

import { Avatar, AvatarFallback } from '@/components/ui/Avatar';
import { EN } from '@/locale/en';

import type { AvatarProps } from '@radix-ui/react-avatar';
import type { User } from 'next-auth';

interface IUserAvatar extends AvatarProps {
  user: Pick<User, 'name' | 'image'>;
}

const UserAvatar = ({ className, user }: IUserAvatar) => {
  const userInitials =
    user.name &&
    user.name
      .split(' ')
      .map(name => name[0].toUpperCase())
      .join('');

  return (
    <Avatar className={className}>
      {user.image ? (
        <Image src={user.image} alt={user.name ?? EN.common.avatarAlt} fill />
      ) : (
        <AvatarFallback>{userInitials}</AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
