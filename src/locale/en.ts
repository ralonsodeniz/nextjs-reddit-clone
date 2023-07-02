export const EN = {
  navBar: {
    title: 'Koolala',
    userMenu: {
      labels: {
        navigation: 'Go to...',
      },
      signOut: 'Sign Out',
    },
  },
  routes: {
    home: 'Home',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    create: 'Create new Koolala',
    profile: 'Profile',
  },
  home: {
    welcome: (name: string) => `${name}, Welcome to Koolala!`,
  },
  signIn: {
    header: 'Welcome back to Koolala',
    licence:
      'By continuing you agree to our Terms of Service and Privacy Policy',
    new: 'New to Koolala?',
  },
  form: {
    signIn: {
      google: 'Sign in with Google',
      error: {
        description: 'There was an error while signing in with Google',
        title: 'There was a problem',
      },
    },
  },
  common: {
    userName: 'Mememan',
    avatarAlt: 'user profile picture',
  },
};
