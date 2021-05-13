# responsive-navbar-react

[![NPM](https://img.shields.io/npm/v/responsive-navbar-react.svg)](https://www.npmjs.com/package/responsive-navbar-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save responsive-navbar-react
```

## Example

<img src='https://s3.gifyu.com/images/gif-min.gif' width='100%' height='500'>

## Usage

```jsx
import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const Home = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Doc',
        link: '#docs'
      },
      {
        text: 'Custom',
        link: '#custom-bar'
      },
      {
        text: 'Contact',
        link: '#contact'
      }
    ],
    logo: {
      text: 'Responsive Navbar React'
    },
    style: {
      barStyles: {
        background: '#444'
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
  }
  return <Navbar {...props} />
}
```

More Documentation is at : https://bdbose.github.io/responsive-navbar-react

## License

MIT © [bdbose](https://github.com/bdbose)
