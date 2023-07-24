export const ROUTES = {
  home: {
    href: '/',
  },
  signIn: {
    href: '/sign-in',
  },
  signUp: {
    href: '/sign-up',
  },
  create: {
    href: '/k/create',
    subRoutes: {
      serverAction: {
        get href() {
          return `${ROUTES.create.href}/server-action`;
        },
      },
    },
  },
  profile: {
    href: '/profile',
  },
};

export const IMAGES_ROUTES = {
  logo: '/logo.png',
};
