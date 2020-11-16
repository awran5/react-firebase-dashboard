# React Material-UI Dashboard

Simple React App that showcasing how you can implement Google Sign-in method using firebase authentication. This App is built with React Hooks and Context API and used free [Material-UI](https://material-ui.com/getting-started/templates/) starter [Sign-in side](https://material-ui.com/getting-started/templates/sign-in-side/) combined with [Dashboard](https://material-ui.com/getting-started/templates/dashboard/) templates.

## Installation

- Create a new [firebase](https://console.firebase.google.com/) project or use your existing one.
- You'll need to enable **Google authentication** from `Authentication` > `Sign-in` method and **Cloud Firestore** database in order to save users in firestore database. Here is a good [tutorial](https://www.youtube.com/watch?v=e8GA1UOj8mE) you can follow.
- Create a new `.env.local` file inside the main app folder and copy/paste your firebase project `configuration`.

```bash
  REACT_APP_FIREBASE_API_KEY = xxxxxxxxxxxxxxxxxxxxxx
  REACT_APP_FIREBASE_AUTH_DOMAIN = xxxxxxxxxxxxxxxxxxxxxx
  REACT_APP_FIREBASE_DATABASE_URL = xxxxxxxxxxxxxxxxxxxxxx
  REACT_APP_FIREBASE_PROJECT_ID = xxxxxxxxxxxxxxxxxxxxxx
  REACT_APP_FIREBASE_STORAGE_BUCKET = xxxxxxxxxxxxxxxxxxxxxx
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID = xxxxxxxxxxxxxxxxxxxxxx
  REACT_APP_FIREBASE_APP_ID = xxxxxxxxxxxxxxxxxxxxxx
```

## Dependencies

1. [Firebase](https://firebase.google.com/)
2. [React Firebase Hooks](https://www.npmjs.com/package/react-firebase-hooks)
3. [React Router Dom](https://reactrouter.com/web/guides/quick-start)
4. [Material-UI](https://material-ui.com)
5. [React Context API](https://reactjs.org/docs/context.html)

## Changelog

#### 11/16/2020

- Convert to TypeScript
- Added: Error message when sign-in
- Added: Timestamp for newly created users
- Dependencies upgraded
- Minor bug fixed

## [Live example](https://react-firebase-dashboard.vercel.app/)

## [CodeSandbox](https://codesandbox.io/s/react-material-ui-dashboard-99vt4) (code only - not authorized)

### License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT)
