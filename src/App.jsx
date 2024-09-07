import { BrowserRouter, Routes, Route } from 'react-router-dom'

import FormPage from './pages/FormPage'

function App() {

  return (
    <BrowserRouter>
      <main className='container mx-auto px-10'>
        <Routes>
          <Route path='/' element={<FormPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
