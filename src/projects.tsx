import {
  IconBinaryTree,
  IconChartBarPopular,
  IconFolders,
  IconMessageCode,
} from "@tabler/icons-react";

export type ProjectInfo = {
  name: string;
  route: string;
  link: string;
  icon: JSX.Element;
};

export const projects = [
  {
    name: "datasets",
    route: "/datasets",
    link: import.meta.env.VITE_DATASETS_LINK,
    icon: <IconFolders />,
  },
  {
    name: "graphit",
    route: "/graphit",
    link: import.meta.env.VITE_GRAPHIT_LINK,
    icon: <IconBinaryTree />,
  },
  {
    name: "GPTeacher",
    route: "/gpteacher",
    link: import.meta.env.VITE_GPTEACHER_LINK,
    icon: <IconMessageCode />,
  },
  // {
  //   name: "taskChecker",
  //   link: import.meta.env.VITE_MATH_HELPER_LINK,
  // },
  {
    name: "competition",
    route: "/competition",
    link: import.meta.env.VITE_COMPETITION_LINK,
    icon: <IconChartBarPopular />,
  },
  // {
  //   name: "taskGenerator",
  //   link: import.meta.env.VITE_QUEST_GEN_LINK,
  // },
] as readonly ProjectInfo[];
