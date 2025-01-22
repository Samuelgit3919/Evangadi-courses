
import './App.css'
import FoodTable from './Components/FoodTable'

function App() {
  const foodList = [
    {
      name: ' Recipe 1', ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3',]
    },
    {
      name: ' Recipe 2', ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3']
    },
    {
      name: ' Recipe 3', ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3']
    }
  ]

  return (
    <>
      <FoodTable
        text="Food List" foodName="Doro Wet"
      />
    </>
  )
}

export default App
