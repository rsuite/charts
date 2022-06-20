import React from 'react';

import VisualMap from './VisualMap';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into visualMap option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <VisualMap />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('visualMap');
});
