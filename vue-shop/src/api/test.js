import fetch from '@/utils/request'

export function test() {
	return fetch({
		url: 'http://localhost:8889/hello',
		method: 'get'
	});
}

