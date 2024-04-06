import React from 'react';
import { render } from '@testing-library/react-native';
import { DetailContact } from './DetailContact';

describe('DetailContact Component', () => {
  const props = {
    title: 'Title',
    value: 'Value',
    icon: 'icon-name',
  };

  test('renders title correctly', () => {
    const { getByText } = render(<DetailContact {...props} />);
    const titleElement = getByText(props.title);
    expect(titleElement).toBeDefined();
  });

  test('renders value correctly', () => {
    const { getByText } = render(<DetailContact {...props} />);
    const valueElement = getByText(props.value);
    expect(valueElement).toBeDefined();
  });
 
});
