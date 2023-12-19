import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import './18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </BrowserRouter>,
)
