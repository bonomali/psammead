import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Link from './index';

const text = 'Some link text';
const href = 'https://www.bbc.com/';

describe('Link', () => {
  shouldMatchSnapshot(
    'should render a standard block link',
    <Link text={text} href={href} />,
  );
  shouldMatchSnapshot(
    'should render an inline link after passing an inline prop',
    <Link text={text} href={href} inline />,
  );
  shouldMatchSnapshot(
    'should render an inline link with a lang attribute',
    <Link text={text} href={href} inline lang="en-GB" />,
  );
});
