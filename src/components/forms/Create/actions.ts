'use server';

import { ZodIssue } from 'zod';
import { revalidatePath } from 'next/cache';

import { schema } from '@/components/forms/Create/schema';
import { ROUTES } from '@/constants/routes';
import { errors } from '@/components/forms/Create/ServerActionForm';

const serverSideValidation = async (data: FormData) => {
  const dataObject = Object.fromEntries(data.entries());
  const parsedData = schema.safeParse(dataObject);
  errors.clear();
  if (!parsedData.success) {
    parsedData.error.errors.forEach((error: ZodIssue) => {
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
