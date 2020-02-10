export function debounce(func, delay) {
	let timer = null;

	return function(...args) {
		if (timer) clearTimeout(timer)

		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}

export function throttle(fn, gaptime) {
	let _lastTime = null
	return function() {
		let _nowTime = +new Date()
		if (_nowTime - _lastTime > gaptime || !_lastTime) {
			fn()
			_lastTime = _nowTime
		}
	}
}
