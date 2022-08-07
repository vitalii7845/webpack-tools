// file path: src/profile/index.js

import { fetchUser } from './gateway';
import printProfile from './printProfile';

fetchUser('github').then(({ name, location }) =>
  printProfile({
    name,
    location,
  })
);
