import React from 'react'
import Container from 'react-declarative-container'

import RadioGroup from './radio-group'
import customRadioButton from './custom-radio-button'

const App = () => {
  return (
    <div>
      <Container initialState={{ wine: null, therapy: null, contact: null }}>
        {({ wine, therapy, contact, dispatch }) => (
          <React.Fragment>
            <h3>Choose Wine</h3>
            <RadioGroup
              items={[
                { id: 'wineChoice1', value: 'merlot', label: 'Merlot' },
                { id: 'wineChoice2', value: 'cabernet', label: 'Cabernet' },
                { id: 'wineChoice3', value: 'chardonnay', label: 'Chardonnay' },
                {
                  id: 'wineChoice4',
                  value: 'pinot Grigio',
                  label: 'Pinot Grigio'
                }
              ]}
              value={wine}
              onChange={v => dispatch({ type: 'wine', payload: v })}
              customRadioButton={customRadioButton}
            />
            <h3>Duration of Therapy</h3>
            <RadioGroup
              items={[
                { id: 'durationChoice1', value: 'chronic', label: 'Chronic' },
                {
                  id: 'durationChoice2',
                  value: 'acute of PRN',
                  label: 'Acute of PRN'
                }
              ]}
              value={therapy}
              onChange={v => dispatch({ type: 'therapy', payload: v })}
              customRadioButton={customRadioButton}
            />
            <h3>Please select your preferred contact method</h3>
            <RadioGroup
              items={[
                { id: 'contactChoice1', value: 'email', label: 'Email' },
                { id: 'contactChoice2', value: 'phone', label: 'Phone' },
                { id: 'contactChoice3', value: 'mail', label: 'Mail' }
              ]}
              value={contact}
              onChange={v => dispatch({ type: 'contact', payload: v })}
              customRadioButton={customRadioButton}
            />
          </React.Fragment>
        )}
      </Container>
    </div>
  )
}

export default App
