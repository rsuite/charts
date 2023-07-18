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

test('Should not tap visualMap.max when chartData is empty', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <VisualMap />
        </>
      ).props.children,
      { chartData: [] }
    ).visualMap
  ).not.toHaveProperty('max');
});
