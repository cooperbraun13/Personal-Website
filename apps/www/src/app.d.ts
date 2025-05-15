import 'unplugin-icons/types/svelte';

declare module '*.html' {
  const value: string;
  export default value
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}
