import React from 'react'
import { Head } from './components/Head'
import Button from './components/Button'
import { Input } from './components/Input'
import { GlobalProvider } from './components/GlobalState'
import ReducerButtons from './components/ReducerButtons'
import BigC from './components/BigC'
import logo from './logo.svg'
import './App.css'

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <Head title="Hello" isActive={false} />
          <BigC title="YO YO YO" />
          <Button
            onClick={(e) => {
              e.preventDefault()
              console.log(e)
            }}
          >
            this is a <i>button</i>
          </Button>
          <Input></Input>
          <ReducerButtons></ReducerButtons>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GlobalProvider>
  )
}

export default App
