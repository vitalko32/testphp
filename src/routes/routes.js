import Registration from "../components/Registration/Registration";
import React from "react";

export const publicRoutes = [
    {path: '/success', element: "success"},
    {path: '*', element: <Registration />}

]