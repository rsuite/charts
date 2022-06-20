import React from 'react';

import XAxis from './XAxis';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into xAxis option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <XAxis />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('xAxis');
});
