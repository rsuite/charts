import React from 'react';

import Scatter from './Scatter';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-scatter option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Scatter />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty(
    'series',
    expect.arrayContaining([expect.objectContaining({ type: 'scatter' })])
  );
});
