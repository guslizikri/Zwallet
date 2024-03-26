import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/dashboard/Home.jsx'
import LandingPage from '../pages/landingpage/LandingPage.jsx'
import Profile from '../pages/profile/Profile.jsx'
import Transfer from '../pages/transfer/Transfer.jsx'

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
  {
    path: '/transfer',
    element: <Transfer />,
  },
])
