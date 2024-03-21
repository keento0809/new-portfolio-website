import {
  EntryCollectionIThumbnail,
  IProject,
  IProjectFields,
  IResume,
  IResumeFields,
  IThumbnail,
  IThumbnailFields,
} from "@/@types/generated/contentful";
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? "",
  host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST,
});

const getResume = async (): Promise<IResumeFields | undefined> => {
  try {
    const entry = await client.getEntries<IResume>({ content_type: "resume" });
    const entryField = entry.items[0].fields as IResumeFields;
    return entryField;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const getProjects = async (): Promise<IProjectFields[] | undefined> => {
  try {
    const entries = await client.getEntries<IProject>({
      content_type: "project",
    });
    const entryFields = entries.items as IProjectFields[];
    return entryFields;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

const getThumbnails = async (): Promise<IThumbnailFields[] | undefined> => {
  try {
    const entries: EntryCollectionIThumbnail =
      await client.getEntries<IThumbnail>({
        content_type: "thumbnail",
      });
    const entryFields = entries.includes?.Asset;
    console.log("fieldsTh: ", entryFields);
    return entryFields;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const useContentful = () => {
  return { getResume, getThumbnails, getProjects };
};
