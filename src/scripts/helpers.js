export function socialMeta(title, description, url, image) {
  return {
    title: title,
    meta: [
      { name: "og:title", content: title },
      { name: "twitter:title", content: title },
      { name: "description", content: description },
      { name: "og:description", content: description },
      { name: "twitter:description", content: description },
      { name: "url", content: url },
      { name: "og:url", content: url },
      { name: "twitter:url", content: url },
      { name: "og:image", content: image },
      { name: "twitter:image", content: image },
      { name: "author", content: "Piotr Migdał" }
    ],
  };
}
