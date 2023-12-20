import React from 'react'
import Home from './pages/Home/Home.jsx'
import {NextUIProvider} from "@nextui-org/react";

function App() {

  return (
    <NextUIProvider>
      <Home/>
    </NextUIProvider>
  )
}

export default App
