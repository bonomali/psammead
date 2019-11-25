import React from 'react';
import { storiesOf } from '@storybook/react';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import OJS from './ojs';

storiesOf('Components|OJ2', module).add(
  'default',
  () => <OJS service="news" script={latin} />,
  { notes },
);
