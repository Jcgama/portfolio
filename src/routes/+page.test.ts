import { render, screen, within } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import WorkPage from './+page.svelte';

describe('Work page', () => {
	it('introduces the portfolio before the selected work', () => {
		render(WorkPage);

		expect(screen.getByRole('heading', { level: 1, name: 'Nice to meet you' })).toBeTruthy();
		expect(screen.getByText('I\'m Júlio Gama, UX Designer and Software Engineer. I have a passion for creating products that give people what they need, solving problems via a user-centered design. Let\'s connect and create something great together!')).toBeTruthy();
		expect(screen.getByRole('heading', { level: 2, name: 'Selected work' })).toBeTruthy();
	});

	it('shows project cards with accessible image placeholders and project details', () => {
		render(WorkPage);

		const projects = screen.getAllByRole('article');
		expect(projects).toHaveLength(3);

		for (const [index, project] of projects.entries()) {
			expect(
				within(project).getByRole('img', { name: `Project ${index + 1} image placeholder` })
			).toBeTruthy();
			expect(
				within(project).getByRole('heading', {
					level: 3,
					name: 'Project title placeholder'
				})
			).toBeTruthy();
			expect(within(project).getByText(/Project summary placeholder/)).toBeTruthy();
			// todo: fix
			expect(within(project).getByText('Role and year placeholder')).toBeTruthy();
		}
	});
});
