import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import ErrorBoundary from "./components/ErrorBoundary";
import Search from "./components/Search";

//theme
import { ThemeProvider } from "styled-components";
const theme = {
  black: "#121212",
  lightblack: "#151515",
  green: "#1ed760",
  white: "#ffffff",
  grey: "#a7a7a7",
  gap: "8px",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="/*" element={<ErrorBoundary />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
