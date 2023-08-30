import { Typography } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateBanner } from './create-banner';
import NxWelcome from './nx-welcome';
import PlannedOutage from './planned-outage/planned-outage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello cms</div>,
  },
  {
    path: '/create-banner',
    element: <CreateBanner />,
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
