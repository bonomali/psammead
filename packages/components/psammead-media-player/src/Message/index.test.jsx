import React from 'react';
import { render } from '@testing-library/react';
import Message from './index';
import '@testing-library/jest-dom/extend-expect';

it('should display the media message', () => {
  const { getByText } = render(
    <Message
      service="news"
      message="Please enable Javascript or try a different browser"
      placeholderSrc="http://foo.bar/placeholder.png"
      placeholderSrcset="http://foo.bar/placeholder.png"
    />,
  );
  const message = getByText(
    'Please enable Javascript or try a different browser',
  );
  expect(message).toBeInTheDocument();
});
