import 'react-native';
import React from 'react';
import Form from '../index.ios';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Form />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
