import React from 'react';

import Line from './Line';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-line option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Line />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('series', expect.arrayContaining([expect.objectContaining({ type: 'line' })]));
});
