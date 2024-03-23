import { useEffect, useState } from "react";
import { useContentful } from "../../_hooks/useContentful";
import { IDataArrayFields } from "@/@types/generated/contentful";

export const useAboutMe = () => {
  const { getSkillSetList, getDescriptions, getDataArrays } = useContentful();
  const [skillSets, setSkillSets] = useState<Record<"name", string>[]>([]);
  const [descriptions, setDescriptions] = useState<Record<string, string>[]>(
    []
  );
  const [skillDataArray, setSkillDataArray] = useState<IDataArrayFields[]>([]);

  useEffect(() => {
    getDescriptions()
      .then((res) => setDescriptions(res?.descriptions ?? []))
      .catch((e) => console.log(e));
    getSkillSetList()
      .then((res) => setSkillSets(res?.skillSetList ?? []))
      .catch((e) => console.log(e));
    getDataArrays()
      .then((res) =>
        res
          ? setSkillDataArray([{ ...res[1] }, { ...res[2] }, { ...res[0] }])
          : console.log("res: ", res)
      )
      .catch((e) => console.log(e));
  }, [getSkillSetList, getDescriptions, getDataArrays]);

  return { skillSets, descriptions, skillDataArray };
};
