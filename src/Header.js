import React from 'react'
import {
  Title,
  Text,
  Box,
  Image,
  Container,
} from './ui'

export default props => (
  <header>
    <Box pt={[ 6, 7 ]} pb={6}>
      <Container>
        <Image
          src={props.image}
          width={64}
          height={64}
        />
        <Title mt={4}>{props.heading}</Title>
        <Text f={3}>{props.subhead}</Text>
        <Text f={3} mt={5}>{props.text}</Text>
      </Container>
    </Box>
  </header>
)
