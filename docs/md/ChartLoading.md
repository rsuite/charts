### 加载中

你可以为所有的 chart 设置 `loading` 属性以提供加载中的效果。 loader 可以在 `locale` 中自定义，详见 [API](#%3CECharts%3E)。

<!--start-code-->

```js
// const data = [
//   ['00:00', random()],
//   ['01:00', random()],
//   ...
// ];

function Chart() {
  const [loading, setLoading] = useState(true);
  const handleToggleLoading = (loading) => setLoading(loading);
  return (
    <div>
      <LineChart loading={loading} name="浏览量(PV)" data={data} />
      <div>
        加载状态：
        <Toggle
          checkedChildren="开启"
          unCheckedChildren="关闭"
          checked={loading}
          onChange={handleToggleLoading}
        />
      </div>
    </div>
  );
}

ReactDOM.render(<Chart />);
```

<!--end-code-->
