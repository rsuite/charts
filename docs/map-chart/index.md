---
title: 地图
---

# MapChart

## 基础用例

```jsx
import React from 'react';
import * as echarts from 'echarts/core';
import { MapChart } from '@rsuite/charts';
import chinaMapJson from '../data/maps/china.json';
import data from './basic.json';

echarts.registerMap('china', chinaMapJson);

export default () => <MapChart name="覆盖率" map="china" data={data} />;
```

## 多语言

```jsx
import React from 'react';
import * as echarts from 'echarts/core';
import { MapChart, VisualMap } from '@rsuite/charts';
import chinaMapJson from '../data/maps/china.json';
import chinaProvinces from '../data/locales/en-US/china-provinces';
import data from './basic.json';

echarts.registerMap('china', chinaMapJson);

export default () => (
  <MapChart name="覆盖率" map="china" data={data} nameMap={chinaProvinces}>
    <VisualMap text={['Max', 'Min']} />
  </MapChart>
);
```
