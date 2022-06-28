import React from 'react';

import Funnel from './Funnel';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-funnel option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Funnel />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('series', expect.arrayContaining([expect.objectContaining({ type: 'funnel' })]));
});
