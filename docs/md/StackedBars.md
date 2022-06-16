#### 堆叠图柱

<!--start-code-->

```js
ReactDOM.render(
  <BarChart data={data}>
    <YAxis minInterval={1000} />
    <Bars name="男-互联网电视曝光量" color="#2485C1" stack="男" />
    <Bars name="男-移动曝光量" color="#32A4D4" stack="男" />
    <Bars name="男-电脑曝光量" color="#34C3FF" stack="男" />
    <Bars name="女-互联网电视曝光量" color="#AB005B" stack="女" />
    <Bars name="女-移动曝光量" color="#EA3797" stack="女" />
    <Bars name="女-电脑曝光量" color="#FF8FCB" stack="女" />
  </BarChart>
);
```

<!--end-code-->
