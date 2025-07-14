import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterProvider } from './contexts/CounterProvider'
import Counter from './components/counter/Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <Counter />
    </CounterProvider>
  </StrictMode>,
)
