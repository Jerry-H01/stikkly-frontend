import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/layouts";


const LandingPage = lazy(() => import("../../pages/landing page"));
const ProjectsPage = lazy(() => import("../../pages/products"));
const CanvasPage = lazy(() => import("../../pages/products/canvas/canvas"));
const TaskManagementPage = lazy(
  () => import("../../pages/products/task management")
);
const Collaboration = lazy(
  () => import("../../pages/products/collaboration")
);
const AiTeammate = lazy(
  () => import("../../pages/products/ai teammate")
);
const Community = lazy(
  () => import("../../pages/resources/community")
);
const EventDetails = lazy(
  () => import("../../pages/resources/community/event-details")
);
const HelpCenter = lazy(
  () => import("../../pages/resources/help center")
);
const ReleaseNotes = lazy(
  () => import("../../pages/resources/release notes")
);
const UserStoriesPage = lazy(
  () => import("../../pages/resources/user stories")
);

import LoadingScreen from "../loading/LoadingScreen";

const MainRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProjectsPage />} />
          <Route path="/product/canvas" element={<CanvasPage />} />
          <Route
            path="/product/task-management"
            element={<TaskManagementPage />}
          />
          <Route path="/product/collaboration" element={<Collaboration />} />
          <Route path="/product/ai-teammate" element={<AiTeammate />} />
          <Route path="/resources/community" element={<Community />} />
          <Route
            path="/resources/community/event-details/:id"
            element={<EventDetails />}
          />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/resources/release-notes" element={<ReleaseNotes />} />
          <Route path="/resources/user-stories" element={<UserStoriesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;