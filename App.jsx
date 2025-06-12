import React, { useState } from 'react'
import FruitItem from './components/FruitItem'

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"])
  const [input, setInput] = useState("")

  const addFruit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setFruits([...fruits, input.trim()])
      setInput("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">🍉 Fruit List</h1>
      <form onSubmit={addFruit} className="mb-4">
        <input
          className="border rounded p-2 mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a fruit"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Add
        </button>
      </form>
      <ul className="list-disc pl-5">
        {fruits.map(fruit => <FruitItem key={fruit} name={fruit} />)}
      </ul>
    </div>
  )
}

export default App