# Blog

This blog comes in a few parts:

- `from-jekyll` is from the previous Markdown website, with Jekyll default for GitHub pages
- `from-medium` is for Medium posts (unless they are already imported from Jekyll)
- `new` for Gridsome-native, Nov 2022 or later

This note has `.markdown` not `.md` extension, so it won't be parsed by the static site generator.

## Conversion from Medium

Downloading data from the website.

Using [medium-2-md](https://www.npmjs.com/package/medium-2-md) to convert.

Using a custom Python script to put images nicely in folder and process some parts of the front matter. I will add that.

Converting images to jpg (many png were large, and I wanted to keep a typical imagge file around 100kB).

```{bash}
mogrify -format jpg *.png
```

Also, gifs are not supported - so turned them into jpgs or pngs.

### TODO

- Add thumbnails.
- Add tags and other parts of the frontmatter.
- Add image captions.
- Subsequent images are not displayed.
- Polishing some if needed.
