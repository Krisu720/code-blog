export type CodeReadySettings = {
  packageManager: "pnpm" | "bun" | "npm" | "yarn";
};

type Navs = {
  label: string;
  path: string;
  tags: string[];
}[];

export type SidebarNavigation = Record<PropertyKey, Navs>;

  // const navs = {
  //   "Getting Started": [{ label: "Introduction", path: "introduction" }],
  //   Frameworks: [
  //     { label: "JS VITE", path: "jsvite" },
  //     { label: "React VITE", path: "reactvite" },
  //     { label: "Next.js 13", path: "nextjs13" },
  //     { label: "Express.js", path: "express" },
  //     { label: "React Native Expo", path: "reactnativeexpo" },
  //   ],
  //   Packages: [
  //     { label: "tRPC", path: "trpc" },
  //     { label: "Zustand", path: "zustand" },
  //     { label: "Zod", path: "zod" },
  //     { label: "React Hook Form", path: "reacthookform" },
  //     { label: "Framer Motion", path: "framermotion" },
  //     { label: "GSAP", path: "gsap" },
  //     { label: "Tailwind", path: "tailwind" },
  //     { label: "Shadcn library", path: "shadcn" },
  //     { label: "React Router", path: "reactrouter" },
  //     { label: "Next Auth", path: "nextauth" },
  //     { label: "Next Themes", path: "nextthemes" },
  //     { label: "Prisma", path: "prisma" },
  //     { label: "Drizzle", path: "drizzleorm" },
  //     { label: "Apex Charts", path: "apexcharts" },
  //     { label: "MDX", path: "mdx" },
  //   ],
  // } satisfies Record<PropertyKey, Navs>;