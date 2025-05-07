import { app, BrowserWindow } from 'electron'
import './index.css'
import path from 'node:path'
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

createRoot(document.getElementById('root')!).render(
  // making rollbackk
  <StrictMode>
    <App />
  </StrictMode>,
)

