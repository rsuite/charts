import _merge from 'lodash.merge';

export function isSeriesOption(reactComp) {
  return !!reactComp.type.isSeriesOption;
}

export function transformTextOption(option, defaultOption) {
  if (option === undefined || option === true) {
    return defaultOption;
  }
  if (option === false) {
    return { show: false };
  }
  if (typeof option === 'function') {
    return {
      ...defaultOption,
      show: true,
      formatter: option
    };
  }
  if (typeof option === 'object') {
    return _merge(
      {
        ...defaultOption,
        show: true
      },
      option
    );
  }
  return {
    ...defaultOption,
    show: true,
    formatter() {
      return option;
    }
  };
}

export function randstr(length = 16) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
