import { useEffect } from "react";

function setMeta(property, content, isOg = false) {
  const attr = isOg ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function usePageMeta({ title, description }) {
  useEffect(() => {
    const base = "ISKCON Bhusawal — Sri Sri Radha Murlidhar Mandir";
    const fullTitle = title ? `${title} | ${base}` : base;
    document.title = fullTitle;

    if (description) {
      setMeta("description", description);
      setMeta("og:title", fullTitle, true);
      setMeta("og:description", description, true);
      setMeta("twitter:title", fullTitle);
      setMeta("twitter:description", description);
    }
  }, [title, description]);
}
