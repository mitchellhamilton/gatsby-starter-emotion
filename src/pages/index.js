import React from 'react'
import { injectGlobal } from 'emotion'

injectGlobal`
  html {
    background-color: hotpink;
    font-family: sans-serif;
  }
`

export default () => (
  <h1 css={{ color: 'white', textAlign: 'center' }}>
    An opinionated Gatsby starter with emotion
  </h1>
)
