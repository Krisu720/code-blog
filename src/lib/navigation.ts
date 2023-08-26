type Navigation = {
  label: string;
  nav: { label: string; path: string }[];
};



export const navigation = {
  getting: {
    label: "Getting Started",
    nav: [{label: "Introduction",path: "/introduction"}]
  }
} satisfies Record<PropertyKey, Navigation>;
