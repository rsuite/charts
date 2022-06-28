import React from 'react';

import Sankey from './Sankey';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-sankey option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Sankey />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('series', expect.arrayContaining([expect.objectContaining({ type: 'sankey' })]));
});
