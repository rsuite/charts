---
title: 地图
---

# MapChart

## 基础用例

```jsx
import React from 'react';
import { MapChart } from '@rsuite/charts';
import 'echarts4/map/js/china';
import data from './basic.json';

export default () => <MapChart name="覆盖率" map="china" data={data} />;
```

## 多语言

```jsx
import React from 'react';
import { MapChart, VisualMap } from '@rsuite/charts';
import 'echarts4/map/js/china';
import chinaProvinces from '@rsuite/charts/dist/locales/en-US/china-provinces.js';
import data from './basic.json';

export default () => (
  <MapChart name="覆盖率" map="china" data={data} nameMap={chinaProvinces}>
    <VisualMap text={['Max', 'Min']} />
  </MapChart>
);
```
