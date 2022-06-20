import React from 'react';

import Map from './Map';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-map option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Map map="china" />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty(
    'series',
    expect.arrayContaining([expect.objectContaining({ type: 'map', map: 'china' })])
  );
});
