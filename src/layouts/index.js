import React from 'react'
import Helmet from 'react-helmet'

export default props => {
  return (
    <div>
      <Helmet title="gatsby-starter-emotion" />
      {props.children()}
    </div>
  )
}
