import en from "./en.json";
import pl from "./pl.json";
import z from "zod"

export type Locale = "en" | "pl";
type Dictionary = typeof en;

export const parseLocale = (string:String) => {
   return z.custom<Locale>().parse(string)
}

export const getDictionary = (lang?: Locale): Dictionary => {
  switch (lang) {
    case "en":
      return en;
    case "pl":
      return pl;
    default:
      return en;
  }
};

