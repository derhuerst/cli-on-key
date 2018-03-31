'use strict'

const listen = require('.')

const stopListening = listen(process.stdin, (key) => {
	if (key.ctrl && key.name === 'c') {
		stopListening() // stop on Ctrl + C
	} else console.log(key)
})
