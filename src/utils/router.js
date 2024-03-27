import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/dashboard/Home.jsx'
import LandingPage from '../pages/landingpage/LandingPage.jsx'
import Profile from '../pages/profile/Profile.jsx'
import ConfirmTransfer from '../pages/transfer/ConfirmTransfer.jsx'
import SendMoney from '../pages/transfer/SendMoney.jsx'
import Status from '../pages/transfer/Status.jsx'
import Transfer from '../pages/transfer/Transfer.jsx'
import PrivateRoute from '../privateRoute.js'

export default createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  // for development purpos only
  {
    path: '/transfers',
    element: <Transfer />,
  },
  {
    path: '/transfers/:id/send',
    element: <SendMoney />,
  },
  {
    path: '/transfers/:id/confirm',
    element: <ConfirmTransfer />,
  },
  {
    path: '/transfers/:id/status',
    element: <Status />,
  },
  // for development purpos only

  {
    path: '/transfer',
    element: (
      <PrivateRoute>
        <Transfer />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfer/:id/send',
    element: (
      <PrivateRoute>
        <SendMoney />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfer/:id/confirm',
    element: (
      <PrivateRoute>
        <ConfirmTransfer />
      </PrivateRoute>
    ),
  },

  {
    path: '/transfer/:id/status',
    element: (
      <PrivateRoute>
        <Status />
      </PrivateRoute>
    ),
  },
])
