import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
function pathResolve(dir: string) {
	return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		legacy({
			targets: ['ie >= 11'], // 需要兼容的目标列表，可以设置多个
			additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
		}),
	],
	resolve: {
		alias: [
			// /@/xxxx => src/xxxx
			{
				find: /@\//,
				replacement: pathResolve('src') + '/',
			},
			// /#/xxxx => types/xxxx
			{
				find: /#\//,
				replacement: pathResolve('src/types') + '/',
			},
		],
	},
});
