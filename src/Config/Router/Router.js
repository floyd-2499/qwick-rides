import React from "react";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "../../Components/Scroll/ScrollToTop.js";
import LoadingSpinnerFull from "../../View/Widgets/LoadingSpinner/Main.js";
import uris from "./URI";

const Router = () => {
  const routes = [
    {
      path: uris.home,
      Component: React.lazy(() => import("../../Pages/Home/Index")),
    },
    {
      path: uris.about,
      Component: React.lazy(() => import("../../Pages/About Us/Index")),
    },
    {
      path: uris.blog,
      Component: React.lazy(() => import("../../Pages/Blog/Index")),
    },
    {
      path: uris.career,
      Component: React.lazy(() => import("../../Pages/Careers/Index")),
    },
    {
      path: uris.contact,
      Component: React.lazy(() => import("../../Pages/Contact/Index.js")),
    },
    {
      path: uris.postpaid,
      Component: React.lazy(() => import("../../Pages/Postpaid Card/Index")),
    },
    {
      path: uris.safety,
      Component: React.lazy(() => import("../../Pages/Safety/Index")),
    },
  ];

  return (
    <ScrollToTop>
      <Routes>
      {routes.map(({ path, Component}) => (
                <Route
                  path={path}
                  key={path}
                  exact
                  Component={() => (
                    <React.Suspense fallback={<LoadingSpinnerFull loading />}>
                      <Component />
                    </React.Suspense>
                  )}
                />
              ))}
      </Routes>
    </ScrollToTop>
  );
};

export default Router;
