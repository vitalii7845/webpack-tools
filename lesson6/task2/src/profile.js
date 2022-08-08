// file path: src/profile.js

export const printProfile = profileData => {
  const { name, company } = profileData;
  console.log(`${name} from ${company}`);
};
