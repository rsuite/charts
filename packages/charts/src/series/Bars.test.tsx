import React from 'react';

import Bars from './Bars';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-bar option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Bars />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('series', expect.arrayContaining([expect.objectContaining({ type: 'bar' })]));
});
