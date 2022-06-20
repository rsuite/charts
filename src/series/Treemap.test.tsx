import React from 'react';

import Treemap from './Treemap';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-treemap option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Treemap />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty(
    'series',
    expect.arrayContaining([expect.objectContaining({ type: 'treemap' })])
  );
});
