// file path: src/profile/printProfile.js

export default profileData => {
  const { name, location } = profileData;
  console.log(`${name} from ${location}`);
};
