import { Menu, MenuProps } from "antd";

import classes from "./Header.module.css";
import BookIcon from "./svgs/book.svg";
import CheckMarkIcon from "./svgs/checkmark.svg";
import WorkIcon from "./svgs/work.svg";
import NoteIcon from "./svgs/note.svg";
import BoxIcon from "./svgs/box.svg";
import ChartIcon from "./svgs/chart.svg";
import LMSIcon from "./svgs/lms.svg";
import PaperClipIcon from "./svgs/paperclip.svg";
import { useTranslation } from "react-i18next";

export default function HeaderNavigation() {
  type MenuItem = Required<MenuProps>["items"][number];
  const { t } = useTranslation();

  const items: MenuItem[] = [
    {
      key: "Portal",
      label: (
        <a href="#" className={classes.NavLink}>
          <BookIcon />
          <span>{t("header.Portal")}</span>
        </a>
      ),
    },
    {
      key: "Assessment",
      label: (
        <a href="#" className={classes.NavLink}>
          <CheckMarkIcon />
          <span>{t("header.Assessment")}</span>
        </a>
      ),
    },
    {
      key: "Courses",
      label: (
        <a href="#" className={classes.NavLink}>
          <WorkIcon />
          <span>{t("header.Courses")}</span>
        </a>
      ),
    },
    {
      key: "Programs",
      label: (
        <a href="#" className={classes.NavLink}>
          <NoteIcon />
          <span>{t("header.Programs")}</span>
        </a>
      ),
    },
    {
      key: "Software",
      label: (
        <a href="#" className={classes.NavLink}>
          <BoxIcon />
          <span>{t("header.Software")}</span>
        </a>
      ),
    },
    {
      key: "Analytics",
      label: (
        <a href="#" className={classes.NavLink}>
          <ChartIcon />
          <span>{t("header.Analytics")}</span>
        </a>
      ),
    },
    {
      key: "LMS",
      label: (
        <a href="#" className={classes.NavLink}>
          <LMSIcon />
          <span>{t("header.LMS")}</span>
        </a>
      ),
    },
    {
      key: "InnoDataHub",
      label: (
        <a href="#" className={`${classes.NavLink} ${classes.Active}`}>
          <PaperClipIcon />
          <span>{t("header.InnoDataHub")}</span>
        </a>
      ),
    },
  ];

  return <Menu className={classes.NavBar} mode="horizontal" items={items} />;
}
