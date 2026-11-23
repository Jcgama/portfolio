<script lang="ts">
	import { page } from '$app/state';
	import favicon from '#lib/assets/favicon.svg';
	import gmailLogo from '#lib/assets/contact/gmail-logo.svg';
	import githubLogo from '#lib/assets/contact/github-logo.svg';
	import linkedinLogo from '#lib/assets/contact/linkedin-logo.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site-shell">
	<a class="skip-link" href="#main-content">Skip to content</a>

	<header class="site-header">
		<div class="header-inner">
			<a class="wordmark" href="/" aria-label="jcgama — Work">jcgama</a>
			<nav aria-label="Main navigation">
				<ul>
					<li><a href="/" aria-current={page.url.pathname === '/' ? 'page' : undefined}>Work</a></li>
					<li>
						<a href="/about" aria-current={page.url.pathname === '/about' ? 'page' : undefined}
							>About</a
						>
					</li>
					<li>
						<a
							href="/contact"
							aria-current={page.url.pathname === '/contact' ? 'page' : undefined}>Contact</a
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	{@render children()}

	<footer class="site-footer">
		<div class="footer-inner">
			<p>Get in touch</p>
			<nav class="footer-contact" aria-label="Footer contact links">
				<ul>
					<li>
						<a href="mailto:jcgama.uxdesign@gmail.com" aria-label="Email me">
							<img src={gmailLogo} alt="" />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Jcgama"
							target="_blank"
							rel="noreferrer"
							aria-label="Julio Cezar Gama on GitHub"
						>
							<img src={githubLogo} alt="" />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/juliocezargama/"
							target="_blank"
							rel="noreferrer"
							aria-label="Julio Cezar Gama on LinkedIn"
						>
							<img src={linkedinLogo} alt="" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		background: #f5f5f3;
		scroll-behavior: smooth;
		overflow-y: scroll;
		scrollbar-gutter: stable;
		scrollbar-width: none;
	}

	:global(html::-webkit-scrollbar) {
		width: 0;
		height: 0;
	}

	:global(body) {
		margin: 0;
		color: #202020;
		font-family: Arial, Helvetica, sans-serif;
		background-color: #f5f5f3;
		background-image: radial-gradient(#cececa 0.8px, transparent 0.8px);
		background-size: 18px 18px;
	}

	:global(.site-main) {
		flex: 1;
		width: min(100% - 3rem, 76rem);
		margin-inline: auto;
	}

	:global(.visually-hidden) {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		clip-path: inset(50%);
	}

	:global(a) {
		color: inherit;
	}

	:global(a:focus-visible) {
		border-radius: 0.125rem;
		outline: 3px solid #222;
		outline-offset: 4px;
	}

	.site-shell {
		display: flex;
		min-height: 100vh;
		min-height: 100svh;
		flex-direction: column;
	}

	.skip-link {
		position: fixed;
		z-index: 1;
		top: 0.75rem;
		left: 0.75rem;
		padding: 0.75rem 1rem;
		transform: translateY(-160%);
		border-radius: 0.25rem;
		background: #202020;
		color: #fff;
		text-decoration: none;
	}

	.skip-link:focus {
		transform: translateY(0);
	}

	.site-header {
		padding: 1.5rem 1.5rem 0;
	}

	.header-inner,
	.footer-inner {
		display: flex;
		width: min(100%, 88rem);
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		margin-inline: auto;
	}

	.header-inner {
		width: min(100%, 76rem);
	}

	.footer-inner {
		width: min(100%, 76rem);
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 0.75rem 1rem;
	}

	.wordmark {
		font-size: 1.25rem;
		font-weight: 750;
		letter-spacing: -0.06em;
		text-decoration: none;
	}

	nav ul {
		display: flex;
		align-items: center;
		gap: clamp(1rem, 3vw, 2rem);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav a {
		display: inline-block;
		padding-block: 0.5rem;
		font-size: 0.9375rem;
		text-decoration: none;
	}

	nav a[aria-current='page'] {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.3em;
	}

	.site-footer {
		padding: 1.5rem;
		border-top: 1px solid #d5d5d2;
	}

	.footer-inner {
		min-height: 2rem;
	}

	.footer-inner p {
		margin: 0;
		color: #505050;
		font-size: 0.875rem;
	}

	.footer-contact ul {
		gap: 0.25rem;
	}

	.footer-contact a {
		display: grid;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border-radius: 0.25rem;
		place-items: center;
	}

	.footer-contact a:hover {
		background: #e8e8e5;
	}

	.footer-contact img {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		object-fit: contain;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}
	}

	@media (max-width: 600px) {
		:global(.site-main) {
			width: min(100% - 2rem, 76rem);
		}

		.site-header {
			padding: 1.25rem 1rem 0;
		}

		.header-inner {
			width: min(100%, 76rem);
			gap: 0.75rem;
		}

		.wordmark {
			font-size: 1.125rem;
		}

		nav ul {
			gap: clamp(0.75rem, 4vw, 1.25rem);
		}

		nav a {
			font-size: 0.875rem;
		}

		.site-footer {
			padding-inline: 1rem;
		}
	}
</style>
