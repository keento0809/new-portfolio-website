import { client } from "@/app/(locale)/_hooks/useContentful";
import { IProject, IProjectFields } from "@/@types/generated/contentful";

export const getProjects = async (): Promise<IProjectFields[] | undefined> => {
  try {
    const entries = await client.getEntries<IProject>({
      content_type: "project",
    });
    const entryFields = entries.items[0].fields as IProjectFields[];
    return entryFields;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
