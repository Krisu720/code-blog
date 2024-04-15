import { allDocs } from "contentlayer/generated";
import { Locale, getDictionary } from "../../dictonaries/config";
import { SidebarNavigation } from "@/types/global";

const withoutLang = (str: string) => str.slice(0, -3);

const getDocs = (dir: string, lang: Locale) =>
  allDocs.filter(
    (doc) => doc.slugAsParams.startsWith(dir) && doc.slugAsParams.endsWith(lang)
  );

const instalationsNavigation = (lang: Locale) => {
  const dict = getDictionary(lang);
  return {
    [dict.Instalations.sidebar.Examples]: getDocs("instalations", lang)
      .filter((doc) => !doc.slugAsParams.includes("use"))
      .map((doc) => ({
        label: doc.title,
        path: "/" + withoutLang(doc.slugAsParams),
        tags: doc.tags !== "none" ? doc.tags.split(",") : [],
      })),
    [dict.Instalations.sidebar.Hooks]: getDocs("instalations", lang)
      .filter((doc) => doc.slugAsParams.includes("use"))
      .map((doc) => ({
        label: doc.title,
        path: "/" + withoutLang(doc.slugAsParams),
        tags: doc.tags !== "none" ? doc.tags.split(",") : [],
      })),
  } satisfies SidebarNavigation;
};

const componentsNavigation = (lang: Locale) => {
  const dict = getDictionary(lang);
  return {
    [dict.Components.title]: getDocs("components", lang).map((doc) => ({
      label: doc.title,
      path: "/" + withoutLang(doc.slugAsParams),
      tags: doc.tags !== "none" ? doc.tags.split(",") : [],
    })),
  } satisfies SidebarNavigation;
};

const resourcesNavigation = (lang: Locale) => {
  const dict = getDictionary(lang);
  return {
    [dict.Resources.sidebar.Resources]: getDocs("resources", lang).map(
      (doc) => ({
        label: doc.title,
        path: "/" + withoutLang(doc.slugAsParams),
        tags: doc.tags !== "none" ? doc.tags.split(",") : [],
      })
    ),
  } satisfies SidebarNavigation;
};

type Navigations = "instalations" | "components" | "resources";

const getNavigation = (navigation: Navigations, lang: Locale) => {
  switch (navigation) {
    case "components":
      return componentsNavigation(lang);
    case "instalations":
      return instalationsNavigation(lang);
    case "resources":
      return resourcesNavigation(lang);
  }
};

export { getNavigation, getDocs };
