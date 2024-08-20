import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProjectsPage } from "@pages/ProjectsPage";

import { Layout } from "./Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { Router };
