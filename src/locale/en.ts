export const EN = {
  layout: {
    navBar: {
      title: 'Koolala',
      userMenu: {
        labels: {
          navigation: 'Go to...',
        },
        signOut: 'Sign Out',
      },
      themeToggle: {
        text: 'Toggle theme',
      },
    },
  },
  routes: {
    create: 'Create new Koolala',
    home: 'Home',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    profile: 'Profile',
  },
  pages: {
    home: {
      welcome: (name: string) => `${name}, Welcome to Koolala!`,
      notSignedIn: 'Please sign in to see your feed',
      communityInfo: {
        home: 'Home',
        lead: 'Your personal Koolala page. Check your favourite communities here.',
      },
    },
    create: {
      title: 'Create a community',
      link: 'Server Action version',
    },
  },
  components: {
    auth: {
      google: 'Sign in with Google',
      error: {
        description: 'There was an error while signing in with Google',
        title: 'There was a problem',
      },
    },
    signIn: {
      header: 'Welcome to Koolala',
      licence:
        'By continuing you agree to our Terms of Service and Privacy Policy',
    },
    forms: {
      create: {
        name: {
          title: 'Name',
          description: 'The name of your community',
          prefix: 'k/',
        },
        button: 'Create',
      },
    },
  },
  common: {
    userName: 'Mememan',
    avatarAlt: 'user profile picture',
    logoAlt: 'Koolala logo',
  },
};
