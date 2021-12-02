import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.css'
import Homepage from './components/Homepage'
import RQSuperheroes from './components/RQSuperheroes'
import Superheroes from './components/Superheroes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heroes' element={<Superheroes />} />
            <Route path='/rq-super-heroes' element={<RQSuperheroes />} />
            <Route path='/' element={<Homepage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialisOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App