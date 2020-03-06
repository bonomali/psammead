import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, bengali, burmese, latin } from '@bbc/gel-foundations/scripts';
import MostReadList from '.';
import { getItemWrapperArray } from '../utilities';

describe('MostReadList', () => {
  shouldMatchSnapshot(
    'should render with ltr news items with correct dir',
    <MostReadList numberOfItems={10}>
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'news',
        script: latin,
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with rtl arabic items with correct dir',
    <MostReadList numberOfItems={10} dir="rtl">
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'persian',
        script: arabic,
        dir: 'rtl',
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with ltr bengali items with correct dir',
    <MostReadList numberOfItems={10}>
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'bengali',
        script: bengali,
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with ltr burmese items with correct dir',
    <MostReadList numberOfItems={10}>
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'burmese',
        script: burmese,
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with ltr news items with a max of one column',
    <MostReadList numberOfItems={10} columnLayout="oneColumn">
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'news',
        script: latin,
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with ltr news items with a max of two columns',
    <MostReadList numberOfItems={10} columnLayout="twoColumn">
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'news',
        script: latin,
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with ltr news items with a multi column layout',
    <MostReadList numberOfItems={10} columnLayout="multiColumn">
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'news',
        script: latin,
      }).map(item => item)}
    </MostReadList>,
  );
});
