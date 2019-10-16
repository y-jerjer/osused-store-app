import React from 'react'
import { Container, Typography, Box } from '@material-ui/core'

export const ItemList = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          ItemList
        </Typography>
      </Box>
    </Container>
  )
}
