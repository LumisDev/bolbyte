import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root') as Element | DocumentFragment
createRoot(root).render(<App />)
