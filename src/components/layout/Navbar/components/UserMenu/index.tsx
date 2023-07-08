'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import type { User } from 'next-auth';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import UserAvatar from '@/components/module/UserAvatar';
import { cn } from '@/lib/classnames';
import { navigationLinks } from '@/components/layout/Navbar/components/UserMenu/constants';
import { EN } from '@/locale/en';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';

interface IUserMenu {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

const classname = {
  name: 'font-bold',
  email: 'w-[200px] truncate text-sm text-zinc-700',
  link: 'w-full',
  signOut: 'font-semibold cursor-pointer text-sm text-zinc-700',
};

const UserMenu = ({ user }: IUserMenu) => {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.refresh();
    router.push(ROUTES.signIn.href);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {user.name && (
            <DropdownMenuLabel className={cn(classname.name)}>
              {user.name}
            </DropdownMenuLabel>
          )}
          {user.email && (
            <DropdownMenuLabel className={cn(classname.email)}>
              {user.email}
            </DropdownMenuLabel>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            {EN.navBar.userMenu.labels.navigation}
          </DropdownMenuLabel>
          {navigationLinks.map(link => (
            <DropdownMenuItem key={link.href}>
              <Link className={cn(classname.link)} href={link.href}>
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className={cn(classname.signOut)}
          onClick={handleSignOut}
        >
          {EN.navBar.userMenu.signOut}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
