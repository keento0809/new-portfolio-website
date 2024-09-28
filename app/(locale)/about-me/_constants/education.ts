type MyEducationHistory = {
  term: string;
  schoolName: string;
  majorAndDegree: string;
  description?: string;
};

const MY_EDUCATION_HISTORY: MyEducationHistory[] = [
  {
    term: "2021 - 2022",
    schoolName: "Cornerstone International Community College of Canada",
    majorAndDegree: "Web Development - Diploma",
    description:
      "Learned fundamentals of programming and experienced multiple team projects for gaining practical experience.",
  },
  {
    term: "2012 - 2017",
    schoolName: "Shiga University",
    majorAndDegree: "Bachelor of Science in Economics",
  },
];

export { MY_EDUCATION_HISTORY };
