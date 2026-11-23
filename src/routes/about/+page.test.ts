import { render, screen, within } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import AboutPage from './+page.svelte';

describe('About page', () => {
	it('shows the supplied photo in each story section', () => {
		render(AboutPage);

		expect(screen.getByRole('heading', { level: 1, name: 'Hello there!' })).toBeTruthy();

		const sections = screen.getAllByRole('region');
		expect(sections).toHaveLength(3);

		expect(within(sections[0]).getByRole('heading', { level: 2, name: 'Introduction' })).toBeTruthy();
		expect(within(sections[0]).getByRole('img', { name: 'Julio at Miyajima' })).toBeTruthy();
		expect(within(sections[1]).getByRole('heading', { level: 2, name: 'Diving deeper into UX' })).toBeTruthy();
		expect(within(sections[1]).getByRole('img', { name: 'UX design wireframes' })).toBeTruthy();
		expect(within(sections[2]).getByRole('heading', { level: 2, name: 'Going forward' })).toBeTruthy();
		expect(within(sections[2]).getByRole('img', { name: 'Julio at Fushimi Inari' })).toBeTruthy();
	});
});
