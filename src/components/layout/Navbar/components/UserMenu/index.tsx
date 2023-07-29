'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

import { navigationLinks } from '@/components/layout/Navbar/components/UserMenu/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import UserAvatar from '@/components/UserAvatar';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

import type { User } from 'next-auth';

interface IUserMenu {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

const classname = {
  name: cn('font-bold'),
  email: cn('w-[200px]  truncate text-sm text-popover-foreground'),
  link: cn('w-full'),
  signOut: cn('cursor-pointer text-sm font-semibold text-popover-foreground'),
};

const UserMenu = ({ user }: IUserMenu) => {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {user.name && (
            <DropdownMenuLabel className={classname.name}>
              {user.name}
            </DropdownMenuLabel>
          )}
          {user.email && (
            <DropdownMenuLabel className={classname.email}>
              {user.email}
            </DropdownMenuLabel>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            {EN.layout.navBar.userMenu.labels.navigation}
          </DropdownMenuLabel>
          {navigationLinks.map(link => (
            <DropdownMenuItem key={link.href}>
              <Link className={classname.link} href={link.href}>
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={classname.signOut} onClick={handleSignOut}>
          {EN.layout.navBar.userMenu.signOut}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
