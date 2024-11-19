import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/Layout/RootLayout';
import Expenses from './Components/Page/Expenses';
import Dashoard from './Components/Page/Dashoard';
import Wallets from './Components/Page/Wallets';
import Summary from './Components/Page/Summary';
import Accounts from './Components/Page/Accounts';
import Settings from './Components/Page/Settings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Dashoard />}></Route>
      <Route path='/expenses' element={<Expenses />}></Route>
      <Route path='/wallets' element={<Wallets />}></Route>
      <Route path='/summary' element={<Summary />}></Route>
      <Route path='/accounts' element={<Accounts />}></Route>
      <Route path='/settings' element={<Settings />}></Route>
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider
    router={router}
    
  />
  )
}

export default App