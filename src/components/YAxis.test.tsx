import React from 'react';

import YAxis from './YAxis';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into yAxis option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <YAxis />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('yAxis');
});
