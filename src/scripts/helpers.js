// a reference
function socialMeta(title, description, url, image) {
  return {
    title: title,
    meta: [
      { property: "og:title", content: title },
      { name: "twitter:title", content: title },
      { name: "description", content: description },
      { property: "og:description", content: description },
      { name: "twitter:description", content: description },
      { name: "url", content: url },
      { property: "og:url", content: url },
      { name: "twitter:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:image", content: image },
      { name: "author", content: "Piotr Migdał" }
    ],
  };
}

const DEFAULT_AUTHOR = "Piotr Migdał"
const DEFAULT_TITLE = "Piotr Migdał"
const DEFAULT_DESCRIPTION = "Piotr Migdał - blog posts and stuff."
const DEFAULT_BASE_URL = "https://p.migdal.pl"
const DEFAULT_IMAGE = DEFAULT_BASE_URL + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-thumbnail.jpg");

// generated with ChatGPT3 + some cosmetic changes
// (it didn't need changes, just improved API to my taste)
export class SocialMeta {

  constructor(title = "", description = "", base_url = "", url = "", image = "", author = "") {
    this._base_url = base_url;
    this._title = {
      main: title,
      og: title,
      twitter: title,
    };
    this._description = {
      main: description,
      og: description,
      twitter: description,
    };
    this._url = {
      main: url,
      og: url,
      twitter: url,
    };
    this._image = {
      main: image,
      og: image,
      twitter: image,
    }
    this._author = author;
  }

  static defaultMigdal() {
    return new SocialMeta(DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_BASE_URL, DEFAULT_BASE_URL, DEFAULT_IMAGE, DEFAULT_AUTHOR);
  }

  getMeta() {
    return {
      title: this._title.main,
      meta: [
        { property: "og:title", content: this._title.og },
        { name: "twitter:title", content: this._title.twitter },
        { name: "description", content: this._description.main },
        { property: "og:description", content: this._description.og },
        { name: "twitter:description", content: this._description.twitter },
        { name: "url", content: this._url.main },
        { property: "og:url", content: this._url.og },
        { name: "twitter:url", content: this._url.twitter },
        { property: "og:image", content: this._image.og },
        { name: "twitter:image", content: this._image.twitter },
        { name: "author", content: this._author }
      ],
    };
  }

  setTitle(title, provider) {
    if (provider) {
      this._title[provider] = title;
    } else {
      this._title = {
        main: title,
        og: title,
        twitter: title,
      };
    }

    return this;
  }

  setDescription(description, provider) {
    if (provider) {
      this._description[provider] = description;
    } else {
      this._description = {
        main: description,
        og: description,
        twitter: description,
      };
    }

    return this;
  }

  setRelativeURL(rel_url, provider) {
    const url = `${this._base_url}${rel_url}`;
    if (provider) {
      this._url[provider] = url;
    } else {
      this._url = {
        main: url,
        og: url,
        twitter: url,
      };
    }

    return this;
  }

  setAbsoluteURL(url, provider) {
    if (provider) {
      this._url[provider] = url;
    } else {
      this._url = {
        main: url,
        og: url,
        twitter: url,
      };
    }

    return this;
  }

  maybeSetRelativeImage(rel_image, provider) {
    if (!rel_image) {
      return this;
    }
    const image = `${this._base_url}${rel_image}`;
    if (provider) {
      this._image[provider] = image;
    } else {
      this._image = {
        main: image,
        og: image,
        twitter: image,
      };
    }

    return this;
  }

}
