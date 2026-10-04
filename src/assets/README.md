# Profile photo

Place your actual photo in this directory with the filename `profile.jpg`.
It is used automatically in the Hero and About sections. Replace that file to
update your portrait; the production build fingerprints the image for caching.

Use a square or portrait crop with your face near the center. The site uses
`object-fit: cover` and preserves the container dimensions to avoid layout shifts.
Until the image is supplied, the site displays an initials placeholder.

If you prefer a direct import after adding the file, replace `src/data/profileImage.ts` with:

```ts
import image from "../assets/profile.jpg";
export const profileImage = image;
```
