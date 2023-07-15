'use server';

import { revalidatePath } from 'next/cache';

import { schema } from '@/components/forms/Create/schema';
import { errors } from '@/components/forms/Create/ServerActionForm';
import { ROUTES } from '@/constants/routes';

const serverSideValidation = async (data: FormData) => {
  const dataObject = Object.fromEntries(data.entries());
  const parsedData = schema.safeParse(dataObject);
  errors.clear();
  if (!parsedData.success) {
    parsedData.error.errors.forEach(error => {
      errors.set(error.path.join(''), error.message);
    });
  }

  return parsedData.success;
};

export const createCommunity = async (data: FormData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('createCommunity');
};

export const createCommunityWithRevalidation = async (data: FormData) => {
  const isValid = await serverSideValidation(data);
  isValid && (await createCommunity(data));
  revalidatePath(ROUTES.create.href);
};
