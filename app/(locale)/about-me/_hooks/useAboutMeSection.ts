import { useEffect, useState } from "react";
import { useContentful } from "../../_hooks/useContentful";

export const useAboutMe = () => {
  const { getSkillSetList, getDescriptions } = useContentful();
  const [skillSets, setSkillSets] = useState<Record<"name", string>[]>([]);
  const [descriptions, setDescriptions] = useState<Record<string, string>[]>(
    []
  );

  useEffect(() => {
    getDescriptions()
      .then((res) => setDescriptions(res?.descriptions ?? []))
      .catch((e) => console.log(e));
    getSkillSetList()
      .then((res) => setSkillSets(res?.skillSetList ?? []))
      .catch((e) => console.log(e));
  }, [getSkillSetList, getDescriptions]);

  return { skillSets, descriptions };
};
