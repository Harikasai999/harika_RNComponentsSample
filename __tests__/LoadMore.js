import 'react-native'
import React from 'react'
import LoadMore from '../Src/LoadMore'
import renderer from 'react-test-renderer'
import 'isomorphic-fetch'
it('renders correctly', () => {
  const loadmore = renderer.create(<LoadMore />).toJSON()
  expect(loadmore).toMatchSnapshot()
})
