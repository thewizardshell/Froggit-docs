// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Git Terminal UI Made Simple',
			customCss: ['./src/styles/custom.css'],
			logo:{
				src: './src/assets/froggit-icon-text.png',
				replacesTitle: true, // Reemplaza el título con el logo
			},
			description: 'Documentation for Froggit, a modern CLI Git UI.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/thewizardshell/froggit' // puedes cambiarlo por tu repo real
				}
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Install Froggit', slug: 'guides/install' },
						{ label: 'Navigation', slug: 'guides/navigation' },
					],
				},
				{
					label: 'Using Froggit',
					items: [
						{ label: 'File View', slug: 'guides/files' },
						{ label: 'Commit View', slug: 'guides/commit' },
						{ label: 'Branch View', slug: 'guides/branches' },
						{ label: 'Remote View', slug: 'guides/remotes' },
						{ label: 'Add Remote', slug: 'guides/add-remote' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
