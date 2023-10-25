import english from "./en.json";
import polish from "./pl.json";
import z from "zod";


export type Lang = "pl" | "en"

export const dictonaries = {
  en: english,
  pl: polish,
};

const langParser = z.object({ lang: z.enum(["pl", "en"]) });

export const getDictonary = async (lang: Lang) => {
  return dictonaries[lang];
};

export const checkLang = (input: string) => {
  try {
    const { lang } = langParser.parse({ lang: input });
    return lang;
  } catch (e) {
    throw new Error("Unknown Language");
  }
};

export const getLang = () => {};
