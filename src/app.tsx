import * as React from 'react';
import {
  createHashRouter,
  RouterProvider,
  useNavigate,
  Outlet
} from "react-router-dom";
import { Copyright, Legends } from '@components/index';
import { ProjectDetail } from '@sections/index';
import { Resume } from '@pages/index';

const backKeys =[
  27, //Esc
  16, // Shift
]
function App() {
  const navigate = useNavigate();
  const callbackHandler = React.useCallback((event: KeyboardEvent) => {
    event.stopPropagation()
    if (backKeys.includes(event.keyCode)) {
      navigate(-1)
    }
  }, [])

  React.useEffect(() => {
    window.addEventListener('keydown', callbackHandler);
    return () => {
      window.removeEventListener('keydown', callbackHandler);
    };
  }, [callbackHandler]);

  return <>
    <Legends />
    <br/>
    <br/>
    <Outlet />
    <Copyright />
  </>
}


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Resume />
      },
      {
        path: "project/:name",
        element: <ProjectDetail />
      },
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />
}