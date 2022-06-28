import React from 'react';

import Legend from './Legend';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into legend option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Legend />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('legend');
});
