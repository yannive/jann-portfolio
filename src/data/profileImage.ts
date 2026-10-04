// Drop your photo at src/assets/profile.jpg. Vite imports and fingerprints it.
// A glob keeps the project buildable while the user's photo is not supplied.
const photos = import.meta.glob<string>("../assets/profile.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});
export const profileImage = photos["../assets/profile.jpg"] ?? null;
