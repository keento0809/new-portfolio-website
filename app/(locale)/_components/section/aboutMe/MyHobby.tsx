import { MY_HOBBY_CONTENTS } from "@/constants/components/section/aboutMe/myHobby";

export const MyHobby = () => {
  return (
    <div>
      <h2>Hobbies</h2>
      <p>
        Aside from things regarding my skills, I would like to introduce what I
        love to do a little.
      </p>
      <ul>
        {MY_HOBBY_CONTENTS.map((hobby) => {
          return (
            <li key={hobby.title}>
              <h3>
                {/* Icon will be here */}
                I&apos;m a {hobby.title}
              </h3>
              <p>{hobby.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
