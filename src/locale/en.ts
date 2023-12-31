export const EN = {
  common: {
    avatarAlt: 'user profile picture',
    communityPrefix: 'k/',
    logoAlt: 'Koolala logo',
    userName: 'Mememan',
  },
  components: {
    signIn: {
      google: {
        button: 'Sign in with Google',
        error: {
          description: 'There was an error while signing in with Google',
          title: 'There was a problem',
        },
      },
      header: 'Welcome to Koolala',
      licence:
        'By continuing you agree to our Terms of Service and Privacy Policy',
    },
  },
  layout: {
    community: {
      about: 'About',
      sidebar: {
        createdAt: 'Created at',
        createdBy: 'Created by',
        createdByYou: 'You!',
        leave: 'Leave',
        members: 'Members',
        mobileTriggerLabel: 'Toggle sidebar',
        subscribe: 'Subscribe',
        subscribeToggle: (subscribed: boolean) =>
          `You have successfully ${
            subscribed ? 'unsubscribed' : 'subscribed'
          } this community.`,
        subscribeToggleError: (subscribed: boolean) =>
          `An error occurred while trying to ${
            subscribed ? 'unsubscribe' : 'subscribe'
          }.`,
      },
    },
    root: {
      navbar: {
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
  },
  pages: {
    community: {
      form: {
        button: 'Post!',
        buttonLabel: 'submit post button',
        contentPlaceholder: 'What are you thinking?',
        description: (community: string) =>
          `Share your thoughts in ${community}`,
        signIn: 'You need to be signed in to post!',
        success: 'Your post has been submitted!',
        titlePlaceholder: 'Your post title',
        zodError: 'There was an error with your post content',
      },
    },
    create: {
      form: {
        button: 'Create',
        name: {
          description: 'The name of your community',
          title: 'Name',
        },
        toastRedirect: 'Go!',
      },
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
