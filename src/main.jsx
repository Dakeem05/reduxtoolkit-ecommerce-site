import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {Store} from "./Store";
import { Provider } from 'react-redux';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Router>
  //   <Routes>
  //   <Route path='/' element={<App/>} />
  //   </Routes>
  // </Router>

  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={Store}>

      <App/>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
