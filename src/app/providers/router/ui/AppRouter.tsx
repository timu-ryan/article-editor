import { RouterProvider } from 'react-router-dom';
import { router } from '../config';

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
