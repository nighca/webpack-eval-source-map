import { echo } from './utils'

function main() {
	setTimeout(() => {
		console.log(echo('Hello World'))
	}, 500)
}

main()

if (module.hot) {
	module.hot.accept(
		'./utils',
		() => main()
	)
}