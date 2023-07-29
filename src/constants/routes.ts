export const ROUTES = {
  create: {
    href: '/create',
    subRoutes: {
      serverAction: {
        get href() {
          return `${ROUTES.create.href}/server-action`;
        },
      },
    },
  },
  home: {
    href: '/',
  },
  profile: {
    href: '/profile',
  },
  signIn: {
    href: '/sign-in',
  },
  signUp: {
    href: '/sign-up',
  },
} as const;

export const IMAGES_ROUTES = {
  logo: '/logo.png',
} as const;

export const API_ROUTES = {
  create: '/create',
} as const;
