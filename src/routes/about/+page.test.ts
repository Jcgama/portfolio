import { render, screen, within } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import AboutPage from './+page.svelte';

describe('About page', () => {
	it('presents the three story sections with replaceable copy and image placeholders', () => {
		render(AboutPage);

		expect(screen.getByRole('heading', { level: 1, name: 'About me!' })).toBeTruthy();

		const sections = screen.getAllByRole('region');
		expect(sections).toHaveLength(3);

		for (const [index, title] of ['Getting started', 'Finding UX design', 'Moving forward'].entries()) {
			expect(within(sections[index]).getByRole('heading', { level: 2, name: title })).toBeTruthy();
			expect(within(sections[index]).getByText(/Copy placeholder/)).toBeTruthy();
		}

		expect(
			within(sections[1]).getAllByRole('img', { name: /About page image placeholder/ })
		).toHaveLength(2);
		expect(screen.getAllByRole('img', { name: /About page image placeholder/ })).toHaveLength(5);
	});
});
