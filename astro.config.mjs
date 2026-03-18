// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The Terminal TUI for Git Mastery',
			customCss: ['./src/styles/custom.css'],
			logo:{
				src: './src/assets/froggit-icon-text.png',
				replacesTitle: true,
			},
			description: 'Documentation for Froggit, a modern CLI Git UI.',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/thewizardshell/froggit'
				},
				{
					icon: 'document',
					label:'Roadmap',
					href: '/roadmap',
				}
			],
			sidebar: [
				{
					label: 'Introduction',
					translations: { es: 'Introducción' },
					items: [
						{ label: 'Introduction', slug: 'guides/introduction', translations: { es: 'Introducción' } },
						{ label: 'Philosophy', slug: 'guides/philosophy', translations: { es: 'Filosofía' } },
					],
				},
				{
					label: 'Getting Started',
					translations: { es: 'Primeros Pasos' },
					items: [
						{ label: 'Installation', slug: 'guides/install', translations: { es: 'Instalación' } },
						{ label: 'Quick Start', slug: 'guides/quick-start', translations: { es: 'Inicio Rápido' } },
						{ label: 'Configuration', slug: 'guides/configuration', translations: { es: 'Configuración' } },
						{ label: 'Navigation', slug: 'guides/navigation', translations: { es: 'Navegación' } },
					],
				},
				{
					label: 'Using Froggit',
					translations: { es: 'Usando Froggit' },
					items: [
						{ label: 'File View', slug: 'guides/files', translations: { es: 'Vista de Archivos' } },
						{ label: 'Commit View', slug: 'guides/commit', translations: { es: 'Vista de Commit' } },
						{ label: 'Branch View', slug: 'guides/branches', translations: { es: 'Vista de Ramas' } },
						{ label: 'Remote View', slug: 'guides/remotes', translations: { es: 'Vista de Remotos' } },
						{ label: 'Add Remote', slug: 'guides/add-remote', translations: { es: 'Agregar Remoto' } },
					],
				},
				{
					label: 'Advanced Features',
					translations: { es: 'Funciones Avanzadas' },
					items: [
						{ label: 'Advanced Mode', slug: 'advanced/advanced-mode', translations: { es: 'Modo Avanzado' } },
						{ label: 'Diff Preview', slug: 'advanced/diff-preview', translations: { es: 'Vista Previa de Diff' } },
						{ label: 'Merge', slug: 'advanced/merge', translations: { es: 'Merge' } },
						{ label: 'Rebase', slug: 'advanced/rebase', translations: { es: 'Rebase' } },
						{ label: 'Stash', slug: 'advanced/stash', translations: { es: 'Stash' } },
						{ label: 'Log Graph', slug: 'advanced/log-graph', translations: { es: 'Gráfico de Commits' } },
					],
				},
				{
					label: 'Integrations',
					translations: { es: 'Integraciones' },
					items: [
						{ label: 'GitHub Copilot AI', slug: 'integrations/copilot-ai', translations: { es: 'GitHub Copilot AI' } },
						{ label: 'GitHub CLI', slug: 'integrations/github-cli', translations: { es: 'GitHub CLI' } },
					],
				},
				{
					label: 'Reference',
					translations: { es: 'Referencia' },
					items: [
						{ label: 'Keyboard Shortcuts', slug: 'reference/keyboard-shortcuts', translations: { es: 'Atajos de Teclado' } },
					],
				},
			],
		}),
	],
});
