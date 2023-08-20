import { cn } from '@/lib/classnames';

import type { ReactNode } from 'react';

const classname = {
  descriptionContent: cn('flex justify-between gap-x-4 py-3'),
  descriptionTerm: cn('text-popover-foreground'),
};

const Item = ({ content, title }: { content: ReactNode; title: string }) => (
  <div className={classname.descriptionContent}>
    <dt className={classname.descriptionTerm}>{title}</dt>
    <dd>{content}</dd>
  </div>
);

export default Item;
