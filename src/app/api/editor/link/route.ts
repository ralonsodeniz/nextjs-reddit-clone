import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const href = url.searchParams.get('url');

  if (!href)
    return NextResponse.json({ message: 'No URL provided' }, { status: 400 });

  const response = await fetch(href);
  const data = await response.text();
  const titleRegExp = /<title>(.*?)<\/title>/;
  const title = titleRegExp.exec(data)?.[1] ?? '';
  const descriptionRegExp = /<meta name="description" content="(.*?)"/;
  const description = descriptionRegExp.exec(data)?.[1] ?? '';
  const imageRegExp = /<meta property="og:image" content="(.*?)"/;
  const image = imageRegExp.exec(data)?.[1] ?? '';

  return NextResponse.json(
    {
      meta: {
        description,
        image: {
          url: image,
        },
        link: href,
        title,
      },
      success: 1,
    },
    { status: 200 },
  );
};
