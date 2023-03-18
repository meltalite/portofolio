import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Outlet
} from "react-router-dom";
import ProjectDetail from './pages/project-detail';
import { Project } from './pages/project';
import Copyright from './components/copyright';

function App() {
  const navigate = useNavigate();
  const callbackHandler = React.useCallback((event: KeyboardEvent) => {
    event.stopPropagation()
    console.log(event.keyCode)
    if (event.keyCode === 27) {
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
    <Outlet />
    <Copyright />
  </>
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Project />
      },
      {
        path: "/project/:name",
        element: <ProjectDetail />
      },
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />
}