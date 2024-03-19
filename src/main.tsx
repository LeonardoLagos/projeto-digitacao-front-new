import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HistoricProvider } from "./contexts/historicContext";
import { ToastProvider } from "./contexts/toastContext";
import { UserProvider } from "./contexts/userContext";
import { Router } from "./router";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <HistoricProvider>
      <ToastProvider>
        <RouterProvider router={Router} />
      </ToastProvider>
    </HistoricProvider>
  </UserProvider>
);
