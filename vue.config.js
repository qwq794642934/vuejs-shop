module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'Components': '@/components',
				'Views': '@/views',
				'Assets': '@/assets',
				'Img': '@/assets/img',
				'Common': '@/common',
				'Network': '@/network',
				'Css': '@/assets/css'

			}
		}
	}
}
