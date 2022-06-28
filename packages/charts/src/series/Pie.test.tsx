import React from 'react';

import Pie, { composeRadiusOption } from './Pie';
import { createEChartsOptionFromChildren } from '../utils';

test('Transforms into series-line option', () => {
  expect(
    createEChartsOptionFromChildren(
      (
        <>
          <Pie />
        </>
      ).props.children,
      {}
    )
  ).toHaveProperty('series', expect.arrayContaining([expect.objectContaining({ type: 'pie' })]));
});

describe('composeRadiusOption', () => {
  test("Return radiusProp when it's an array", () => {
    const radiusProp = ['50%', '100%'];

    expect(composeRadiusOption(radiusProp)).toEqual(radiusProp);
  });

  test('Returns 80% when radiusProp not specified', () => {
    expect(composeRadiusOption(undefined)).toEqual('80%');
  });

  test('Returns radius percentage', () => {
    expect(composeRadiusOption(60)).toEqual('60%');
    expect(composeRadiusOption('60%')).toEqual('60%');
  });

  test('Returns innerRadius and outerRadius with difference by 15', () => {
    expect(composeRadiusOption(75, true)).toEqual(['60%', '75%']);
    expect(composeRadiusOption('75%', true)).toEqual(['60%', '75%']);
  });
});
