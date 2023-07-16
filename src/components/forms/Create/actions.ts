'use server';

import { revalidatePath } from 'next/cache';

import { schema, TCreateCommunity } from '@/components/forms/Create/schema';
import { errors } from '@/components/forms/Create/ServerActionForm';
import { ROUTES } from '@/constants/routes';

const serverSideValidation = (data: FormData) => {
  const dataObject = Object.fromEntries(data.entries());
  const parsedData = schema.safeParse(dataObject);
  errors.clear();
  if (!parsedData.success) {
    parsedData.error.errors.forEach(error => {
      errors.set(error.path.join(''), error.message);
    });
  }

  return parsedData;
};

export const createCommunity = async (values: TCreateCommunity) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('createCommunity', values);
};

export const createCommunityWithRevalidation = async (data: FormData) => {
  const parsedData = serverSideValidation(data);
  parsedData.success && (await createCommunity(parsedData.data));
  revalidatePath(ROUTES.create.href);
};
