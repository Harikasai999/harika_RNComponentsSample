import 'react-native'
import React from 'react'
import Login from '../Src/Login'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const login = renderer.create(<Login />).toJSON()
  expect(login).toMatchSnapshot()
})
