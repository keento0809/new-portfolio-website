import {
  createClient,
  Entry,
  EntryFieldType,
  EntrySkeletonType,
  FieldsType,
} from "contentful";

interface MyResumeFields {
  title: string;
  description: string;
  file: {
    contentType: string;
    details: { size: number };
    fileName: string;
    url: string;
  };
}

interface MyResumeEntry extends EntrySkeletonType {
  fields: MyResumeFields;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? "",
  host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST,
});

const getResume = async (): Promise<void> => {
  try {
    const entry = await client.getEntry<MyResumeEntry>(
      "2go5ENErlcKqoU7lh9OlWc"
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
};

export const useContentful = () => {
  return { getResume };
};
