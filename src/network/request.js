import axios from 'axios'


// 封装网络请求
export function request(config){

	//1 创建网络请求实列
	const instance = axios.create({
	baseURL: 'http://106.54.54.237:8000/api/hy',
	// baseURL: 'http://123.207.32.32:8000/api/hy',
	timeout: 5000
})

// 2 请求拦截
// instance.interceptors.request.use(request =>{
		// 	// 请求拦截成功  需返回
		// 	console.log(request)
		// 	return request
		// }, err => {
		// 	console.log(err)
		// })

// 3. 响应拦截
instance.interceptors.response.use(res => {
			// console.log('响应拦截并返回')
			return res.data
		}, err => {
				console.log(err)
		})

//4. 发送网络请求
return instance(config)

}
