import { clientEnv as env } from '@/env/index.mjs';
import { HTTPError } from '@/http/utils/error';
import { isExternalUrl } from '@/utils/url';

import type { TStringWithPrefix } from '@/types/string';

export const enhancedFetch = async <T>(
  url: TStringWithPrefix<'/' | 'http://' | 'https://'>,
  options?: RequestInit,
  params: Record<string, string> = {},
): Promise<T> => {
  const computedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };
  const computedUrl = new URL(
    isExternalUrl(url) ? url : `${env.NEXT_PUBLIC_API_BASE_URL}${url}`,
  );
  Object.entries(params).forEach(([key, value]) =>
    computedUrl.searchParams.append(key, value),
  );
  const response = await fetch(computedUrl, computedOptions);
  const data = await response.json();
  if (!response.ok)
    throw new HTTPError(
      response.status,
      response.statusText,
      data.message,
      data.errors,
    );

  return data;
};
