import React from 'react'
import { shallow } from 'enzyme'
import ItemPost from '../ItemPost'

it('renders without crashing', () => {
  shallow(<ItemPost />)
})
