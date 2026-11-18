import { render, screen, within } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ContactPage from './+page.svelte';

describe('Contact page', () => {
	it('shows the profile and reachable contact methods', () => {
		render(ContactPage);

		expect(screen.getByRole('heading', { level: 1, name: 'Reach out to me!' })).toBeTruthy();
		expect(screen.getByRole('img', { name: 'Julio Cezar Gama' })).toBeTruthy();

		const contactLinks = screen.getByRole('navigation', { name: 'Contact methods' });
		expect(within(contactLinks).getByRole('link', { name: 'Email Julio Cezar Gama' }).getAttribute('href'))
			.toBe('mailto:jcgama.uxdesign@gmail.com');
		expect(within(contactLinks).getByRole('link', { name: 'Julio Cezar Gama on LinkedIn' }).getAttribute('href'))
			.toBe('https://www.linkedin.com/in/juliocezargama/');
		expect(within(contactLinks).getByRole('link', { name: 'Julio Cezar Gama on GitHub' }).getAttribute('href'))
			.toBe('https://github.com/Jcgama');
	});
});
