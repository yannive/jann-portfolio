# Project media

The four SVG files in this folder are local, illustrative placeholders, not actual screenshots. They contain no client records.

To add screenshots, place approved images here and update the corresponding `screenshots` entries in `src/data/projects.ts`. Set `placeholder: false`, and update the alt text and caption. Keep the `${import.meta.env.BASE_URL}images/projects/...` prefix for Vite base-path compatibility.

To add an optional demonstration, set the project's `video` field:

```ts
video: {
  src: `${import.meta.env.BASE_URL}videos/electrodesk.mp4`,
  caption: "MRP ElectroDesk walkthrough using sample data.",
  captions: `${import.meta.env.BASE_URL}videos/electrodesk.en.vtt`,
},
```

Place the files in `public/videos`. Captions are optional but recommended. Use a browser-playable MP4 or WebM, or a direct public video file URL; a YouTube watch page is not a video source. Without a video, featured projects show a simple availability message. Other projects keep their existing tabs.

Only add `liveUrl` after verifying a working public application URL. Remove private details and credentials from screenshots and recordings before adding them.
