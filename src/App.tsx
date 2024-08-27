import { Provider } from 'react-redux'
import Home from './pages/Home'
import { GlobalStyle } from './styles'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NewContact from './pages/NewContact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/favoritos',
    element: <Favorites />
  },
  {
    path: '/new',
    element: <NewContact />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
