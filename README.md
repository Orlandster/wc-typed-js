# wc-typed-js - The Typed.js Web Component

[![npm](https://img.shields.io/npm/v/wc-typed-js.svg) ![npm](https://img.shields.io/npm/dm/wc-typed-js.svg)](https://www.npmjs.com/package/wc-typed-js)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/wc-typed-js)

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="index.html">
  </template>
</custom-element-demo>
```
-->
```html
<wc-typed-js strings="Text number 1, Text number 2">
  <h1>Fixed Text: <span class="typing"></span></h1>  
</wc-typed-js>
```

The Typed.js Web Component for better reusability.

Typed.js is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

Checkout the offical project [here](https://github.com/mattboldt/typed.js/).

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save wc-typed-js
```

## Default import

Import the component:

```javascript
import { TypedJS } from 'wc-typed-js'
```

## Browser import

```html
<script type="module" src="dist/main.js" crossorigin></script>
```

# Usage
To get started simply add the `wc-typed-js` custom element to your `markup` and pass the text, which should be typed to the `strings` property. In addition you need to pass an element with the class `typing` to the slot, which will be used as a `wrapper`.

Minimal setup:

```html
<wc-typed-js strings="First text, Second Text">
  <h1 class="typing"></h1>
</wc-typed-js>
```

The `typing` class also allows you to just animate certain parts of a string:
```html
<wc-typed-js strings="John', 'James">
  <h1>Hey <span class="typing"></span></h1>
</wc-typed-js>
```

## Properties
You can make use of the following properties in order to customize your typing expirience:

| Property             | Type    | Description                                                          | Usage                                                           |
|----------------------|---------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| strings              | String   | strings to be typed                                                  | `strings="Text 1, Text 2"` |
| stringsElement       | String  | ID of element containing string children                             | `stringsElement="'myId'"`                                                                |
| typeSpeed            | Number  | type speed in milliseconds                                           | `typeSpeed="50"`                                                                |
| startDelay           | Number  | time before typing starts in milliseconds                            | `startDelay="1000"`                                                                |
| backSpeed            | Number  | backspacing speed in milliseconds                                    | `backSpeed="10"`                                                                |
| smartBackspace       | Boolean | only backspace what doesn't match the previous string                | `smartBackspace="true"`                                                                |
| shuffle              | Boolean | shuffle the strings                                                  | `shuffle="true"`                                                                |
| backDelay            | Number  | time before backspacing in milliseconds                              | `backDelay="100"`                                                                |
| fadeOut              | Boolean | Fade out instead of backspace                                        | `fadeOut="true"`                                                                |
| fadeOutClass         | String  | css class for fade animation                                         | `fadeOutClass="'fadeOutClass'"`                                                                |
| fadeOutDelay         | Boolean | fade out delay in milliseconds                                       | `fadeOutDelay="true"`                                                                |
| loop                 | Boolean | loop strings                                                         | `loop="true"`                                                                |
| loopCount            | Number  | amount of loops                                                      | `loopCount="3"`                                                                |
| showCursor           | Boolean | show cursor                                                          | `showCursor="true"`                                                                |
| cursorChar           | String  | character for cursor                                                 | `cursorChar="'_'"`                                                                |
| autoInsertCss        | Boolean | insert CSS for cursor and fadeOut into HTML                          | `autoInsertCss="true"`                                                                |
| attr                 | String  | attribute for typing Ex: input placeholder, value, or just HTML text | `attr="'placeholder'"`                                                                |
| bindInputFocusEvents | Boolean | bind to focus and blur if el is text input                           | `bindInputFocusEvents="true"`                                                                |
| contentType          | String  | 'html' or 'null' for plaintext                                       | `contentType="'html'"`                                                                |

## Events
Not implemented so far.

## Features
Checkout features like `type pausing`, `smart backspacing` etc. on the libraries [page](https://github.com/mattboldt/typed.js/).

# Examples
Here are several examples:

```html
<!-- infinite loop -->
<wc-typed-js strings="awesome, brilliant" loop="true">
  <h2>We are a <span class="typing"></span> company!</h2>
</wc-typed-js>

<!-- type pausing -->
<wc-typed-js strings="This is text ^1000 which gets paused for 1 second, wow, interesting">
  <h2 class="typing"></h2>
</wc-typed-js>

<!-- output html -->
<wc-typed-js strings="<p>Paragraph</p>, <span>Span</span>" contentType="'html'">
  <h2 class="typing"></h2>
</wc-typed-js>
```

---

# License

[MIT](http://opensource.org/licenses/MIT)
