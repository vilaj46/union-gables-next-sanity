import React from 'react'
import styled from 'styled-components'

const Container = styled.img`
  width: 100%;
  height: 100%;
`

function MainImage({src = '', alt = ''}) {
  return <Container src={src} alt={alt} />
}

export default MainImage
