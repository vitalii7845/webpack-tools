import { printProfile } from './profile';

const userData = {
  namw: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);
