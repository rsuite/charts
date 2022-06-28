import React from 'react';

import RadarLine from './RadarLine';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-radar option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <RadarLine />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('series', expect.arrayContaining([expect.objectContaining({ type: 'radar' })]));
});

test('Multiple <RadarLine>s transform into a single series-bar option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <RadarLine />
          <RadarLine />
        </>
      ).props.children,
      {}
    ).series
  ).toHaveLength(1);
});
