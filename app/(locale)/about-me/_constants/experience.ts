type MyWorkExperience = {
  companyName: string;
  jobRole: string;
  term: string;
  place: string;
  techStack: string[];
  description: string[];
};

const MY_WORK_EXPERIENCE: MyWorkExperience[] = [
  {
    companyName: "80&Company",
    jobRole: "Front-End Developer",
    term: "July, 2023 - Present",
    place: "Kyoto, Japan",
    techStack: [
      "Next.js",
      "TypeScript",
      "ReactQuery",
      "Tailwind CSS",
      "Storybook",
      "SASS/SCSS",
      "PHP",
    ],
    description: [
      "Fix styling issues and problems in the front-end development as quickly and accurately as possible",
      "Properly connect the front-end part of the application with databases using reactQuery",
      "Implement effective validation rules with Zod for form inputs in the E-Commerce web application",
      "Develop new webpages in a web application from scratch utilizing SASS/SCSS for all stylings",
    ],
  },
  {
    companyName: "BuildN",
    jobRole: "Front-End Developer",
    term: "September, 2022 - June, 2023",
    place: "Vancouver, BC",
    techStack: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "SASS/SCSS",
      "C#",
      "ASP.net",
      "AWS",
      "Azure",
    ],
    description: [
      "Manage and optimize React States with ContextAPI in the front-end part of applications",
      "Collaborate well with designers and Back-end developers for deciding on the specifications",
      "Become comfortable with agile software development, including sprint meetings every two week",
      "Gain the usage of Jira as a task management tool to work faster and more efficiently",
    ],
  },
  {
    companyName: "Bajji. inc",
    jobRole: "Front-End Developer",
    term: "April, 2023 - June, 2023",
    place: "Tokyo, Japan",
    techStack: [
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "Storybook",
      "GraphQL",
      "Nest.js",
      "Firebase",
    ],
    description: [
      "Contribute to adding new features to the booking management system for beauty salons",
      "Identify and fix bugs and errors related to the user experience through effective solutions",
      "Utilize GraphQL with GraphQL Code Generator and integrate with the back-end part of applications",
      "Collaborate with other developers to enhance the user experience by pursuing better code structures",
    ],
  },
];

export { MY_WORK_EXPERIENCE };
