// import React from 'react'
// import Home from '../Src/Login.js'
//
// import renderer from 'react-test-renderer'
//
// it('function and state test care', () => {
//   const HomeData = renderer.create(<Home />).getInstance()
//   expect(HomeData.change(2)).toEqual(10)
// })
import 'react-native'
import React from 'react'
import Home from '../Src/Index'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const home = renderer.create(<Home />).toJSON()
  expect(home).toMatchSnapshot()
})
