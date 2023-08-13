export const EN = {
  common: {
    avatarAlt: 'user profile picture',
    logoAlt: 'Koolala logo',
    userName: 'Mememan',
  },
  components: {
    auth: {
      error: {
        description: 'There was an error while signing in with Google',
        title: 'There was a problem',
      },
      google: 'Sign in with Google',
    },
    forms: {
      create: {
        button: 'Create',
        name: {
          description: 'The name of your community',
          prefix: 'k/',
          title: 'Name',
        },
        toastRedirect: 'Go!',
      },
    },
    signIn: {
      header: 'Welcome to Koolala',
      licence:
        'By continuing you agree to our Terms of Service and Privacy Policy',
    },
  },
  layout: {
    navBar: {
      themeToggle: {
        text: 'Toggle theme',
      },
      title: 'Koolala',
      userMenu: {
        labels: {
          navigation: 'Go to...',
        },
        signOut: 'Sign Out',
      },
    },
  },
  pages: {
    create: {
      link: 'Server Action version',
      title: 'Create a community',
    },
    home: {
      communityInfo: {
        home: 'Home',
        lead: 'Your personal Koolala page. Check your favourite communities here.',
      },
      notSignedIn: 'Please sign in to see your feed',
      welcome: (name: string) => `${name}, Welcome to Koolala!`,
    },
  },
  routes: {
    create: 'Create new Koolala',
    home: 'Home',
    profile: 'Profile',
    signIn: 'Sign In',
    signUp: 'Sign Up',
  },
};
