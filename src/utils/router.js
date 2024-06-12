import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/Login.jsx';
import ResetPassword from '../pages/auth/reset-pasword.jsx';
import CreatePin from '../pages/create-pin/CreatePin.jsx';
import History from '../pages/dashboard/History.jsx';
import Home from '../pages/dashboard/Home.jsx';
import LandingPage from '../pages/landingpage/LandingPage.jsx';
import AddPhone from '../pages/profile/AddPhone.jsx';
import ChangePass from '../pages/profile/ChangePass.jsx';
import ChangePin from '../pages/profile/ChangePin.jsx';
import Detail from '../pages/profile/Detail.jsx';
import ManagePhone from '../pages/profile/ManagePhone.jsx';
import Profile from '../pages/profile/Profile.jsx';
import SignUp from '../pages/signup/Signup.jsx';
import Topup from '../pages/topup/Topup.jsx';
import ConfirmTransfer from '../pages/transfer/ConfirmTransfer.jsx';
import SendMoney from '../pages/transfer/SendMoney.jsx';
import Status from '../pages/transfer/Status.jsx';
import Transfer from '../pages/transfer/Transfer.jsx';
import PrivateRoute from '../privateRoute.js';

export default createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },

  {
    path: '/home',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/history',
    element: (
      <PrivateRoute>
        <History />
      </PrivateRoute>
    ),
  },
  {
    path: '/topup',
    element: (
      <PrivateRoute>
        <Topup />
      </PrivateRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: '/profile/detail',
    element: (
      <PrivateRoute>
        <Detail />
      </PrivateRoute>
    ),
  },
  {
    path: '/profile/change-pin',
    element: (
      <PrivateRoute>
        <ChangePin />
      </PrivateRoute>
    ),
  },
  {
    path: '/profile/change-pass',
    element: (
      <PrivateRoute>
        <ChangePass />
      </PrivateRoute>
    ),
  },
  {
    path: '/profile/add-phone',
    element: (
      <PrivateRoute>
        <AddPhone />
      </PrivateRoute>
    ),
  },
  {
    path: '/profile/manage-phone',
    element: (
      <PrivateRoute>
        <ManagePhone />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/create-pin',
    element: <CreatePin />,
  },

  {
    path: '/transfers',
    element: (
      <PrivateRoute>
        <Transfer />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfers/:id/send',
    element: (
      <PrivateRoute>
        <SendMoney />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfers/:id/confirm',
    element: (
      <PrivateRoute>
        <ConfirmTransfer />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfers/:id/status',
    element: (
      <PrivateRoute>
        <Status />
      </PrivateRoute>
    ),
  },
]);
