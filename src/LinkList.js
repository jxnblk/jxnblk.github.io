import React from 'react'
import {
  Container,
  Flex,
  Box,
  BlockLink
} from './ui'

export default props => (
  <section>
    <Container py={6}>
      <Flex wrap mx={-2}>
        {props.links.map(link => (
          <Box
            key={link.href}
            w={[ 1, 1/2, 1/3, 1/5 ]}
            mb={3}
            p={2}>
            <BlockLink href={link.href}>
              {link.text}
            </BlockLink>
          </Box>
        ))}
      </Flex>
    </Container>
  </section>
)
