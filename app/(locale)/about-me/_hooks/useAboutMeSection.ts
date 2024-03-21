import { useEffect, useState } from "react";
import { useContentful } from "../../_hooks/useContentful";

export const useAboutMe = () => {
  const { getSkillSetList } = useContentful();
  const [skillSets, setSkillSets] = useState<Record<"name", string>[]>([]);

  useEffect(() => {
    getSkillSetList()
      .then((res) => setSkillSets(res?.skillSetList ?? []))
      .catch((e) => console.log(e));
  }, [getSkillSetList]);

  return { skillSets };
};
