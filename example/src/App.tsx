import React from 'react'

import { Box, Button } from 'glassmorphism-react-ts'
import 'glassmorphism-react-ts/dist/index.css'

const App = () => {
  return (
    <div className="dev-background">
      <h5>Glassmorphism</h5>
      <Box />
      <p>Buttons</p>
      <div style={{padding: '10px 0'}}>
      <Button size='sm'>Small</Button>
      </div>
      <div style={{padding: '10px 0'}}>
      <Button>Normal</Button>
      </div>
      <div style={{padding: '10px 0'}}>
      <Button size='lg'>Large</Button>
      </div>
    </div>
  )
};

export default App
