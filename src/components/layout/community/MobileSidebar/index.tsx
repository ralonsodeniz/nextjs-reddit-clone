import { Menu } from 'lucide-react';

import Sidebar from '@/components/layout/community/Sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/classnames';

interface IMobileSidebar {
  communityName: string;
}

const classname = {
  content: cn('w-[85vw]'),
  trigger: cn('absolute right-[2rem] top-[75px] md:hidden'),
};

const MobileSidebar = ({ communityName }: IMobileSidebar) => (
  <Sheet>
    <SheetTrigger className={classname.trigger}>
      <Menu size={20} />
    </SheetTrigger>
    <SheetContent className={classname.content} showClose={false}>
      <Sidebar isMobile communityName={communityName} />
    </SheetContent>
  </Sheet>
);

export default MobileSidebar;
