import {
  IProject,
  IResume,
  IResumeFields,
} from "@/@types/generated/contentful";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
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

const getProjects = async (): Promise<IResumeFields[] | undefined> => {
  try {
    const entries = await client.getEntries<IProject>({
      content_type: "project",
    });
    const entryFields = entries.items[0].fields as IResumeFields[];
    return entryFields;
  } catch (error) {}
};

export const useContentful = () => {
  return { getResume, getProjects };
};
