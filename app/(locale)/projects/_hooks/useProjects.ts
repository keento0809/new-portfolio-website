import { useEffect, useState } from "react";
import { useContentful } from "../../_hooks/useContentful";
import {
  IProjectFields,
  IThumbnailFields,
} from "@/@types/generated/contentful";

export const useProjects = () => {
  const { getThumbnails, getProjects } = useContentful();
  const [projects, setProjects] = useState<IProjectFields[]>([]);
  const [thumbnails, setThumbnails] = useState<IThumbnailFields[]>([]);
  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res ?? []))
      .catch((e) => console.log(e));
    getThumbnails()
      .then((res) => setThumbnails(res ?? []))
      .catch((e) => console.log(e));
  }, [getThumbnails, getProjects]);

  return { projects, thumbnails };
};
