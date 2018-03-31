# cli-on-key

**Read command line key presses from process.stdin.** Based on [`TooTallNate/keypress`](https://github.com/TooTallNate/keypress).

[![npm version](https://img.shields.io/npm/v/cli-on-key.svg)](https://www.npmjs.com/package/derhuerst/cli-on-key)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/cli-on-key.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install @derhuerst/cli-on-key
```


## Usage

`listen` will switch the stream to [raw mode](https://nodejs.org/api/tty.html#tty_readstream_israw), `stopListening` will revert to the previous value.

```js
const listen = require('cli-on-key')

const stopListening = listen(process.stdin, (key) => {
	if (key.ctrl && key.name === 'c') {
		stopListening() // stop on Ctrl + C
	} else console.log(key)
})
```


## Contributing

If you have a question or have difficulties using `cli-on-key`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/cli-on-key/issues).
