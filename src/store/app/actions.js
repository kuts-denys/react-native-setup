import { createAction } from 'redux-actions';

export const navigationScreenChange = createAction('NAVIGATION/SCREEN_CHANGE', (currentScreen) => ({ currentScreen }));
