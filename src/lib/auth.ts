import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { nanoid } from 'nanoid';
import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { ROUTES } from '@/constants/routes';
import { serverEnv as env } from '@/env/index.mjs';
import { db } from '@/lib/db';

import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: { email: token.email },
      });

      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      if (!dbUser.username) {
        await db.user.update({
          data: { username: nanoid(10) },
          where: { id: dbUser.id },
        });
      }

      return {
        email: dbUser.email,
        id: dbUser.id,
        name: dbUser.name,
        picture: dbUser.image,
        username: dbUser.username,
      };
    },
    redirect() {
      return ROUTES.home.href;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }

      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

export const getAuthSession = () => getServerSession(authOptions);
