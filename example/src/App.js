import React, { useState } from 'react'

import { Navbar, NavbarLeft } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

import Logo from './tinder.svg'

const App = () => {
  const [check, setCheck] = useState(false)
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
  const props1 = {
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
        link: '/'
      },
      {
        text: 'Contact',
        link: '/'
      }
    ],
    logo: {
      text: 'Text'
    }
  }
  const props2 = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '#docs'
      },
      {
        text: 'Team',
        link: '/'
      },
      {
        text: 'Contact',
        link: '/'
      }
    ],
    logo: {
      img: Logo
    },
    style: {
      barStyles: {
        padding: '10px 20px',
        background: '#e67e22'
      }
    }
  }
  return (
    <div className='home-wrapper'>
      <Navbar {...props} />
      <center>
        <h1>Responsive Navbar React</h1>
      </center>
      <div className='header'>
        <h2>This is a simple Responsive Navbar.</h2>
        <div>Default navbar:</div>
        <Navbar {...props1} />
      </div>
      <div id='docs'>
        <h2>
          Installing <i>responsive-navbar-react:</i>
        </h2>
        <div className='code-wrapper'>
          <code>{`npm i responsive-navbar-react`}</code>
        </div>
        <h2>
          Import <i>responsive-navbar-react:</i>
        </h2>
        <div className='code-wrapper'>
          <code>{`import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'`}</code>
        </div>
        <h2>Finally: </h2>
        <div className='code-wrapper'>
          <code>{`import { Navbar } from 'responsive-navbar-react'
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
        link: '/'
      },
      {
        text: 'Custom',
        link: '/'
      },
      {
        text: 'Contact',
        link: '/'
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
  return (
    <div className="home">
    	<Navbar {...props}/>
    </div>
  )
}`}</code>
        </div>
      </div>
      <div className='example-wrapper'>
        <h2>Example:</h2>
        <Navbar {...props} />

        <table>
          <thead>
            <tr>
              <th>PropsType</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>items</td>
              <td>Yes</td>
              <td>
                Array input with sub props text and link Eg.
                <br />
                <code>{`items:[
            {
              text:'Home',
              link:'/'
            },
            {
              text: "Contact",
              link:"/"
            }]`}</code>
              </td>
            </tr>
            <tr>
              <td>logo</td>
              <td>Yes</td>
              <td>
                Object input with text, link and if you want to pass logo send
                img url or path
                <code>
                  {`
                logo:{
                  text: 'Text',
                  link: '/'
                }
                `}
                </code>
              </td>
            </tr>
            <tr>
              <td>align</td>
              <td>No</td>
              <td>
                If you want the mobile sidebar to be at left pass
                <code>
                  {`props={
                  ...
                  align:'left'
                }`}
                </code>
              </td>
            </tr>
            <tr>
              <td>float</td>
              <td>No</td>
              <td>
                If you want the navbar to be there when you scroll down in page
                or a fixed navbar add
                <code>
                  {`{
                  props={
                    ...
                    float:true
                  }
                }`}
                </code>
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>No</td>
              <td>
                If u want custom navbar css add style with props - barStyles
                ,linkStyles,logoStyles,sidebarStyles Eg:
                <code>
                  {`barStyles: {
      background: '#0984e3'
    },
    linkStyles: {
      color: 'white'
    },
    logoStyles: {
      fontSize: '20px',
      color: 'white'
    },
    sidebarStyles: {
      background: 'grey',
      buttonColor: 'white'
    },`}
                </code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id='custom-bar'>
        <h3>Custom bar with logo</h3>
        <Navbar {...props2} />
        <h3>Custom bar Align=Left(see it in mobile view)</h3>
        <NavbarLeft {...props} />
      </div>
      <div id='contact'>
        <h3>Made by Bdbose</h3>
        <a
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
          href='https://github.com/bdbose'
        >
          <img
            src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
            height='30'
            width='30'
            alt='github'
          />
          <span>My Github</span>
        </a>
        <a
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
          href='https://github.com/bdbose/responsive-navbar-react'
        >
          <img
            src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
            height='30'
            width='30'
            alt='github'
          />
          <span>Repo link</span>
        </a>
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          🌏
          <span>
            My Website : <a href='https://bdbose.tech/'>https://bdbose.tech/</a>
          </span>
        </div>
        <h4>PS : Feel free to update the docs and the code .</h4>
      </div>
    </div>
  )
}

export default App
