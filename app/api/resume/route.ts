import { client } from "@/app/(locale)/_hooks/useContentful";
import { IResume, IResumeFields } from "@/@types/generated/contentful";

export const getResume = async (): Promise<IResumeFields | undefined> => {
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
