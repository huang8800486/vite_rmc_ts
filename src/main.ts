import { createApp } from 'vue';
import { app } from './mount';
import App from './App.vue';
import { setupRouter } from '@/router/index.ts';

async function bootstrap() {
	// 注册路由
	setupRouter(app);

	app.mount('#app');
}

bootstrap();
