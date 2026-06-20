import { useEffect } from "react";

export function usePageMeta({ title, description }) {
  useEffect(() => {
    const base = "ISKCON Bhusawal — Sri Sri Radha Murlidhar Mandir";
    document.title = title ? `${title} | ${base}` : base;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.content = description;
  }, [title, description]);
}
