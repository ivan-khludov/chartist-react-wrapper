chartist-react-wrapper
==============

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]


React component for [Chartist.js](https://gionkunz.github.io/chartist-js/)

### Installation

```
$ yarn add react-chartist
```
Chartist is a peer dependency to react chartist. You need to install it if you do not have it installed already.

```
$ yarn add chartist
```

### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';

class Bar extends React.Component {
  render() {

    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    var type = 'Bar'

    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}

ReactDOM.render(<Bar />, document.body)

```

### Options

Please check out [Chartist.js API documentation](http://gionkunz.github.io/chartist-js/api-documentation.html) for more details of the options.

* data - chart data (required)
* type - chart type (required)
* style - inline css styles (optional)
* options - chart options (optional)
* className - custom className (optional)
* responsiveOptions - chart responsive options (optional)

To add support for aspect ratio

```jsx
<ChartistGraph className={'ct-octave'} data={data} options={options} type={type} />
```

### Note

This module does not include the css files for Chartist. If you want to add it, include their CDN in your html file

```HTML
<link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
<script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
```


Or use `yarn` or `bower` to install Chartist and include it in your build process.

```
$ yarn add chartist
```
Or
```
$ bower install chartist
```
and
```jsx
import * as Chartist from 'chartist';
import 'chartist/dist/chartist.min.css';
```


### Development

```
$ yarn
```

To build run `yarn build`

### Changelog

-

### License

MIT

[npm-image]: https://img.shields.io/npm/v/react-chartist.svg?style=flat-square
[npm-url]: https://npmjs.org/package/chartist-react-wrapper
[downloads-image]: http://img.shields.io/npm/dm/react-chartist.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/chartist-react-wrapper
