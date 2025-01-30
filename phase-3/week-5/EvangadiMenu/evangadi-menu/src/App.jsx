// import React from 'react'

import Header from "./components/Header/Header"
// import Main from "./components/Main/Main"
import FoodList from "./FoodList"

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <FoodList />
      </main>
    </>
  )
}

export default App