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
    notSignedIn: 'Please sign in to see your feed',
    communityInfo: {
      home: 'Home',
      lead: 'Your personal Koolala page. Check your favourite communities here.',
    },
  },
  signIn: {
    header: 'Welcome to Koolala',
    licence:
      'By continuing you agree to our Terms of Service and Privacy Policy',
  },
  create: {
    title: 'Create a community',
    form: {
      name: {
        title: 'Name',
        description: 'The name of your community',
        prefix: 'k/',
      },
      button: 'Create',
    },
  },
  auth: {
    google: 'Sign in with Google',
    error: {
      description: 'There was an error while signing in with Google',
      title: 'There was a problem',
    },
  },
  common: {
    userName: 'Mememan',
    avatarAlt: 'user profile picture',
    logoAlt: 'Koolala logo',
  },
  themeToggle: {
    text: 'Toggle theme',
  },
};
