export type ProjectInfo = {
  name: string;
  route: string;
  link: string;
};

export const projects = [
  {
    name: "datasets",
    route: "/datasets",
    link: import.meta.env.VITE_DATASETS_LINK,
  },
  {
    name: "graphit",
    route: "/graphit",
    link: import.meta.env.VITE_GRAPHIT_LINK,
  },
  {
    name: "GPTeacher",
    route: "/gpteacher",
    link: import.meta.env.VITE_GPTEACHER_LINK,
  },
  // {
  //   name: "taskChecker",
  //   link: import.meta.env.VITE_MATH_HELPER_LINK,
  // },
  {
    name: "competition",
    route: "/competition",
    link: import.meta.env.VITE_COMPETITION_LINK,
  },
  // {
  //   name: "taskGenerator",
  //   link: import.meta.env.VITE_QUEST_GEN_LINK,
  // },
] as readonly ProjectInfo[];
