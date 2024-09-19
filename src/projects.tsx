import {
  IconBinaryTree,
  IconFolders,
  IconMessageCode,
  IconServer,
} from "@tabler/icons-react";

import bookingImage from "@/assets/booking.png";
import datasetsImage from "@/assets/datasets.png";
import gpteacherImage from "@/assets/gpteacher.png";
import graphitImage from "@/assets/graphit.png";

export type ProjectInfo = {
  name: string;
  route: string;
  link: string;
  icon: JSX.Element;
  image: string;
};

export const projects = [
  {
    name: "datasets",
    route: "/datasets",
    link: import.meta.env.VITE_DATASETS_LINK,
    icon: <IconFolders />,
    image: datasetsImage,
  },
  {
    name: "graphit",
    route: "/graphit",
    link: import.meta.env.VITE_GRAPHIT_LINK,
    icon: <IconBinaryTree />,
    image: graphitImage,
  },
  {
    name: "booking",
    route: "/booking",
    link: import.meta.env.VITE_BOOKING_LINK,
    icon: <IconServer />,
    image: bookingImage,
  },
  {
    name: "GPTeacher",
    route: "/gpteacher",
    link: import.meta.env.VITE_GPTEACHER_LINK,
    icon: <IconMessageCode />,
    image: gpteacherImage,
  },
  // {
  //   name: "taskChecker",
  //   link: import.meta.env.VITE_MATH_HELPER_LINK,
  // },
  // {
  //   name: "competition",
  //   route: "/competition",
  //   link: import.meta.env.VITE_COMPETITION_LINK,
  //   icon: <IconChartBarPopular />,
  // },
  // {
  //   name: "taskGenerator",
  //   link: import.meta.env.VITE_QUEST_GEN_LINK,
  // },
] as readonly ProjectInfo[];
