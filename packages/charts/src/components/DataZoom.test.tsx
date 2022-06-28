import React from 'react';

import DataZoom from './DataZoom';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into dataZoom option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <DataZoom />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('dataZoom');
});
