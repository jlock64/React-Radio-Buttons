import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './Form'
import RadioGroup from './RadioGroup'
import '@jrs/trhc-tachyons'

class App extends Component {
  render() {
    const contactGroup = {
      header: 'Please select your preferred contact method',
      name: 'contact',
      radios: [
        { id: 'contactChoice1', value: 'email', label: 'Email' },
        { id: 'contactChoice2', value: 'phone', label: 'Phone' },
        { id: 'contactChoice3', value: 'mail', label: 'Mail' }
      ]
    }

    const wineGroup = {
      header: 'Select your favorite flavor of vino!',
      name: 'wine',
      radios: [
        { id: 'wineChoice1', value: 'merlot', label: 'Merlot' },
        { id: 'wineChoice2', value: 'cabernet', label: 'Cabernet' },
        { id: 'wineChoice3', value: 'chardonnay', label: 'Chardonnay' },
        { id: 'wineChoice4', value: 'pinot Grigio', label: 'Pinot Grigio' }
      ]
    }

    const durationOfTherapyGroup = {
      header: 'Duration of Therapy',
      name: 'duration',
      radios: [
        { id: 'durationChoice1', value: 'chronic', label: 'Chronic' },
        { id: 'durationChoice2', value: 'acute of PRN', label: 'Acute of PRN' }
      ]
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form
          action={e => {
            e.preventDefault()
            console.log(e.target)
          }}>
          <RadioGroup radioGroup={contactGroup} />
          <RadioGroup radioGroup={wineGroup} />
          <RadioGroup radioGroup={durationOfTherapyGroup} />
        </Form>
      </div>
    )
  }
}

export default App
