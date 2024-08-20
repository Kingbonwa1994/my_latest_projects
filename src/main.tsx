import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { Galaxy } from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Galaxy />
  </StrictMode>,
)
