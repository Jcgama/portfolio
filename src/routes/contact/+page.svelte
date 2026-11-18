<script lang="ts">
	import profilePhoto from '#lib/assets/contact/profile-photo.png';
	import gmailLogo from '#lib/assets/contact/gmail-logo.svg';
	import githubLogo from '#lib/assets/contact/github-logo.svg';
	import linkedinLogo from '#lib/assets/contact/linkedin-logo.svg';
</script>

<svelte:head>
	<title>Contact — jcgama</title>
</svelte:head>

<main id="main-content" class="site-main">
	<section class="contact-card" aria-labelledby="contact-heading">
		<img class="profile-photo" src={profilePhoto} alt="Julio Cezar Gama" />

		<h1 id="contact-heading">Reach out to me!</h1>

		<nav class="contact-links" aria-label="Contact methods">
			<a
				class="contact-link contact-link--email"
				href="mailto:jcgama.uxdesign@gmail.com"
				aria-label="Email Julio Cezar Gama"
			>
				<img src={gmailLogo} alt="" />
			</a>
			<div class="contact-link-row">
				<a
					class="contact-link"
					href="https://github.com/Jcgama"
					target="_blank"
					rel="noreferrer"
					aria-label="Julio Cezar Gama on GitHub"
				>
					<img src={githubLogo} alt="" />
				</a>
				<a
					class="contact-link"
					href="https://www.linkedin.com/in/juliocezargama/"
					target="_blank"
					rel="noreferrer"
					aria-label="Julio Cezar Gama on LinkedIn"
				>
					<img src={linkedinLogo} alt="" />
				</a>
			</div>
		</nav>
	</section>
</main>

<style>
	.site-main {
		display: grid;
		padding-block: 2.25rem 3.5rem;
		place-items: start center;
	}

	.contact-card {
		display: flex;
		width: 100%;
		min-height: 36rem;
		align-items: center;
		flex-direction: column;
		padding: clamp(2.75rem, 6vw, 4.25rem) 1.5rem 3.5rem;
	}

	.profile-photo {
		width: clamp(9.5rem, 18vw, 11.25rem);
		height: clamp(9.5rem, 18vw, 11.25rem);
		border: 3px solid #80aef7;
		border-radius: 50%;
		object-fit: cover;
		object-position: 50% 42%;
	}

	h1 {
		margin: clamp(3.25rem, 7vw, 4.75rem) 0 1.5rem;
		font-size: clamp(1.45rem, 3vw, 1.75rem);
		line-height: 1.2;
		letter-spacing: -0.03em;
		text-align: center;
	}

	.contact-links {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-link-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.25rem;
	}

	.contact-link {
		display: grid;
		width: 5.75rem;
		height: 5.75rem;
		padding: 0.45rem;
		border: 1px solid #dcdcd8;
		border-radius: 0.65rem;
		background: #fff;
		place-items: center;
		transition:
			transform 160ms ease,
			box-shadow 160ms ease;
	}

	.contact-link--email {
		width: 6.5rem;
		height: 5.75rem;
		border: 0;
		padding: 0.55rem;
	}

	.contact-link img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.contact-link:hover {
		transform: translateY(-3px);
		box-shadow: 0 0.5rem 1.25rem rgb(0 0 0 / 10%);
	}

	@media (max-width: 600px) {
		.site-main {
			padding-block: 1.25rem 2.5rem;
		}

		.contact-card {
			min-height: 32rem;
			padding-inline: 1rem;
		}

		h1 {
			margin-top: 3rem;
		}

		.contact-link-row {
			gap: 0.75rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.contact-link {
			transition: none;
		}
	}
</style>
