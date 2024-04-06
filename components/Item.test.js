import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Item from './Item';

describe('Item Component', () => {
  const user = {
    name: 'John',
    surnames: 'Doe',
    photo: 'https://example.com/photo.jpg',
  };

  test('renders user name', () => {
    const { getByText } = render(<Item user={user} />);
    const nameElement = getByText('John Doe');
    expect(nameElement).toBeDefined();
  });

  test('renders user photo if available', () => {
    const { getByTestId } = render(<Item user={user} />);
    const photoElement = getByTestId('user-photo');
    expect(photoElement.props.source).toEqual({ uri: 'https://example.com/photo.jpg' });
  });

  test('renders default icon if user photo is not available', () => {
    const userWithoutPhoto = { ...user, photo: null };
    const { getByTestId } = render(<Item user={userWithoutPhoto} />);
    const iconElement = getByTestId('default-icon');
    expect(iconElement).toBeDefined();
  });

  test('calls onPress handler when item is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Item user={user} onPress={onPressMock} />);
    const itemElement = getByTestId('item');
    fireEvent.press(itemElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
