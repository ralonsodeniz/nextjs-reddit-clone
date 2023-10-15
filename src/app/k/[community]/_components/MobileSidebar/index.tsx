import { Menu } from 'lucide-react';

import Sidebar from '@/app/k/[community]/_components/Sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

type MobileSidebarProps = {
  communityName: string;
};

const classname = {
  content: cn('w-[85vw]'),
  trigger: cn('fixed right-[0.4rem] top-[75px] md:hidden'),
};

const MobileSidebar = ({ communityName }: MobileSidebarProps) => (
  <Sheet>
    <SheetTrigger
      className={classname.trigger}
      aria-label={EN.layout.community.sidebar.mobileTriggerLabel}
    >
      <Menu size={20} />
    </SheetTrigger>
    <SheetContent className={classname.content} showClose={false}>
      <Sidebar isMobile communityName={communityName} />
    </SheetContent>
  </Sheet>
);

export default MobileSidebar;
