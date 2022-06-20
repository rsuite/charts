import React from 'react';

import Tree from './Tree';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-tree option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Tree />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('series', expect.arrayContaining([expect.objectContaining({ type: 'tree' })]));
});
