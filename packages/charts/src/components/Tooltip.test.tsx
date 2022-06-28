import React from 'react';

import Tooltip from './Tooltip';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into tooltip option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Tooltip />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('tooltip');
});
