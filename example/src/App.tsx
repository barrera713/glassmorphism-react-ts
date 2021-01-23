import React from 'react'

import { Box, Button, Divider, List } from 'glassmorphism-react-ts'
import 'glassmorphism-react-ts/dist/index.css'

const App = () => {
  return (
    <div className="dev-background">
      <h5>Glassmorphism</h5>
      <div className='component-ctn'>
        <Box size='lg' blur={5} />
        <Divider />
        <Button size='sm'>Small</Button>
        <Divider />
        <Button>Normal</Button>
        <Divider />
        <Button size='lg'>Large</Button>
        <List size='lg'>
         
        </List>
      </div>
    </div>
  )
};

export default App
