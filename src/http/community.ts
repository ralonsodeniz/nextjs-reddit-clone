import { API_ROUTES } from '@/constants/routes';
import { enhancedFetch } from '@/http/utils/fetch';

import type { TCreateCommunity } from '@/components/forms/Create/schema';
import type { Community } from '@prisma/client';

export const postCommunity = async (values: TCreateCommunity) =>
  enhancedFetch<Community>(API_ROUTES.create, {
    body: JSON.stringify(values),
    method: 'POST',
  });
