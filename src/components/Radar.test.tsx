import React from 'react';

import Radar from './Radar';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into radar option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Radar />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('radar');
});
