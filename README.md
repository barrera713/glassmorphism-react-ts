# glassmorphism-react-ts

> 

[![NPM](https://img.shields.io/npm/v/glassmorphism-react-ts.svg)](https://www.npmjs.com/package/glassmorphism-react-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save glassmorphism-react-ts
```

This package is built with styled components and written in Typescript with complete definitions.

Box component has the following (optional) props:

size: 'sm' | 'm' | 'lg' 

border: boolean;

blur: integer

Default values:
size: 'm'
border: true
blur: 0

## Usage

```tsx
import React from 'react'

import Box from 'glassmorphism-react-ts'
import 'glassmorphism-react-ts/dist/index.css'

class Example extends Component {
  render() {
    return <Box size='lg' blur={7} border={false}>
      <h3>Hello from inside glass box!</h3>
    </Box>
  }
}
```

## License

MIT © [barrera713](https://github.com/barrera713)
