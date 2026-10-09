# Portfolio portraits

- `profile.jpg`: first supplied portrait, shown in the Hero.
- `about-portrait.jpg`: second supplied portrait, shown in About.

Images are imported in `src/data/profileImage.ts` and fingerprinted by Vite.
Replace either file to update that portrait. Original photos remain unchanged
in Downloads. CSS in `src/polish.css` frames the images with `object-fit: cover`
and positions the face within responsive portrait cards without distortion.
