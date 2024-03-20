type ContactMethod = {
  href: string | undefined;
  name: string;
};

const CONTACT_ME_FIRST_DESCRIPTION =
  "I'm eager to find opportunities to work as a web developer." as const;

const CONTACT_ME_SECOND_DESCRIPTION =
  "If you know any job opportunities, please free to contact me!" as const;

const CONTACT_METHOD_ARRAY: ContactMethod[] = [
  {
    href: process.env.NEXT_PUBLIC_MY_PHONE,
    name: "PHONE",
  },
  {
    href: process.env.NEXT_PUBLIC_MY_EMAIL,
    name: "EMAIL",
  },
  {
    href: process.env.NEXT_PUBLIC_MY_LINKEDIN,
    name: "LINKEDIN",
  },
  {
    href: process.env.NEXT_PUBLIC_MY_GITHUB,
    name: "GITHUB",
  },
  {
    href: process.env.NEXT_PUBLIC_RESUME_URL,
    name: "RESUME",
  },
];

export {
  CONTACT_ME_FIRST_DESCRIPTION,
  CONTACT_ME_SECOND_DESCRIPTION,
  CONTACT_METHOD_ARRAY,
};
