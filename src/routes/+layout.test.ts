import { render, screen, within } from '@testing-library/svelte';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { mockPage } = vi.hoisted(() => ({
	mockPage: { url: { pathname: '/' } }
}));

vi.mock('$app/state', () => ({ page: mockPage }));

import LayoutHarness from '../test/layout-harness.svelte';

describe('site layout on the Work page', () => {
	beforeEach(() => {
		mockPage.url.pathname = '/';
	});

	it.each([
		{ pathname: '/', currentLink: 'Work' },
		{ pathname: '/about', currentLink: 'About' },
		{ pathname: '/contact', currentLink: 'Contact' }
	])('marks $currentLink as the current navigation item', ({ pathname, currentLink }) => {
		mockPage.url.pathname = pathname;
		render(LayoutHarness);

		const navigation = within(screen.getByRole('navigation', { name: 'Main navigation' }));
		expect(navigation.getByRole('link', { name: currentLink }).getAttribute('aria-current')).toBe(
			'page'
		);
	});

	it('keeps the home link, skip link, and footer available with the Work content', () => {
		render(LayoutHarness);

		expect(screen.getByRole('link', { name: 'jcgama — Work' }).getAttribute('href')).toBe('/');
		expect(screen.getByRole('link', { name: 'Skip to content' }).getAttribute('href')).toBe(
			'#main-content'
		);
		expect(screen.getByRole('main')).toBeTruthy();
		expect(screen.getByText('Footer content placeholder — details to be added later.')).toBeTruthy();
	});
});
