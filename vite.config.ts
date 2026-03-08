import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // 1. เพิ่มบรรทัดนี้

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss() // 2. เพิ่ม tailwindcss() ตรงนี้
	]
});