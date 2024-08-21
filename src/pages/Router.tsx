import { BrowserRouter, Route, Routes } from "react-router-dom";

import { projects } from "@/projects";

import { Layout } from "./Layout";
import { ProjectPage } from "./ProjectPage";
import { ProjectsPage } from "./ProjectsPage";

function Router() {
  const projectRoutes = projects.map((project) => (
    <Route
      key={project.name}
      path={project.route}
      element={<ProjectPage link={project.link} name={project.name} />}
    />
  ));

  void projectRoutes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectsPage />} />
          <Route path="*" element={<ProjectsPage />} />
          {projectRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { Router };
