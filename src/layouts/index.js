// @flow
import React from 'react'
import Helmet from 'react-helmet'

type Props = {
  children: Function
}

export default (props: Props) => {
  return (
    <div>
      <Helmet title="gatsby-starter-emotion" />
      {props.children()}
    </div>
  )
}
