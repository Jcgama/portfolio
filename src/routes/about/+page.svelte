<svelte:head>
	<title>About — jcgama</title>
	<meta
		name="description"
		content="A little about jcgama, with more details and images coming soon."
	/>
</svelte:head>

<main id="main-content" class="site-main about-page">
	<section class="story-section story-section--opening" aria-labelledby="getting-started">
		<div class="story-copy">
			<h1>About me!</h1>
			<p class="section-index">01 / Getting started</p>
			<h2 id="getting-started">Getting started</h2>
			<p class="copy-placeholder">
				Copy placeholder — a few words about where my interest in design began.
			</p>
		</div>

		<div class="story-gallery" aria-label="About image placeholders">
			<div class="image-placeholder image-placeholder--portrait" role="img" aria-label="About page image placeholder 1">
				<span>Image placeholder</span>
			</div>
			<div class="image-placeholder image-placeholder--landscape" role="img" aria-label="About page image placeholder 2">
				<span>Image placeholder</span>
			</div>
		</div>
	</section>

	<section class="story-section story-section--middle" aria-labelledby="finding-ux">
		<div class="story-gallery story-gallery--middle" aria-label="About image placeholders">
			<div class="image-placeholder image-placeholder--middle-primary" role="img" aria-label="About page image placeholder 3">
				<span>Image placeholder</span>
			</div>
			<div class="image-placeholder image-placeholder--middle-secondary" role="img" aria-label="About page image placeholder 4">
				<span>Image placeholder</span>
			</div>
		</div>

		<div class="story-copy">
			<p class="section-index">02 / Finding my path</p>
			<h2 id="finding-ux">Finding UX design</h2>
			<p class="copy-placeholder">
				Copy placeholder — a little about the experiences and interests that led me to UX design.
			</p>
		</div>
	</section>

	<section class="story-section story-section--closing" aria-labelledby="moving-forward">
		<div class="story-copy">
			<p class="section-index">03 / What comes next</p>
			<h2 id="moving-forward">Moving forward</h2>
			<p class="copy-placeholder">
				Copy placeholder — thoughts on what I hope to learn, make, and contribute next.
			</p>
		</div>

		<div class="image-placeholder image-placeholder--closing" role="img" aria-label="About page image placeholder 5">
			<span>Image placeholder</span>
		</div>
	</section>
</main>

<style>
	.about-page {
		padding-block: clamp(4rem, 9vw, 7.5rem) clamp(5rem, 10vw, 9rem);
	}

	.section-index {
		margin: 0 0 1rem;
		font-size: 0.75rem;
		font-weight: 650;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: clamp(2.5rem, 5vw, 4rem);
		font-size: clamp(3rem, 6vw, 5.5rem);
		font-weight: 600;
		letter-spacing: -0.075em;
		line-height: 0.9;
	}

	.story-section {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		align-items: center;
		column-gap: clamp(2rem, 6vw, 6rem);
	}

	.story-section + .story-section {
		margin-top: clamp(5rem, 12vw, 10rem);
	}

	.story-copy {
		grid-column: span 6;
		max-width: 36rem;
	}

	.section-index {
		margin-bottom: 0.75rem;
		color: #505050;
	}

	h2 {
		margin-bottom: 1.25rem;
		font-size: clamp(2rem, 4vw, 3.25rem);
		font-weight: 550;
		letter-spacing: -0.06em;
		line-height: 1.05;
	}

	.copy-placeholder {
		max-width: 34rem;
		margin-bottom: 0;
		color: #363636;
		font-size: clamp(1rem, 1.5vw, 1.1875rem);
		line-height: 1.75;
	}

	.story-gallery {
		display: grid;
		grid-column: span 6;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 1rem;
	}

	.image-placeholder {
		display: grid;
		min-width: 0;
		place-items: center;
		overflow: hidden;
		border: 1px solid rgb(67 67 60 / 12%);
		background-color: #e7e2db;
		background-image:
			radial-gradient(ellipse at 30% 25%, rgb(255 255 255 / 55%), transparent 48%),
			linear-gradient(145deg, #d6c8b7 0%, #b8c0b2 52%, #8e9a8d 100%);
		color: #292a27;
		text-align: center;
	}

	.image-placeholder > span {
		padding: 0.55rem 0.8rem;
		border: 1px solid rgb(41 42 39 / 22%);
		border-radius: 999px;
		background: rgb(245 245 243 / 85%);
		font-size: 0.8125rem;
	}

	.image-placeholder--portrait {
		min-height: clamp(15rem, 31vw, 26rem);
		border-radius: 45% 45% 1.25rem 1.25rem;
	}

	.image-placeholder--landscape {
		min-height: clamp(11rem, 22vw, 19rem);
		margin-top: 4rem;
		border-radius: 1.25rem 1.25rem 45% 1.25rem;
		background-image:
			radial-gradient(ellipse at 70% 22%, rgb(255 255 255 / 48%), transparent 45%),
			linear-gradient(145deg, #c8d0ca 0%, #d2bda5 55%, #a98770 100%);
	}

	.story-section--middle .story-copy {
		grid-column: 7 / span 6;
	}

	.story-gallery--middle .image-placeholder--middle-primary {
		min-height: clamp(15rem, 29vw, 24rem);
		border-radius: 1.25rem 45% 1.25rem 1.25rem;
		background-image:
			radial-gradient(ellipse at 30% 25%, rgb(255 255 255 / 55%), transparent 48%),
			linear-gradient(145deg, #c8c0b5 0%, #a9b5b2 52%, #788c8a 100%);
	}

	.story-gallery--middle .image-placeholder--middle-secondary {
		min-height: clamp(11rem, 21vw, 18rem);
		margin-top: 3rem;
		border-radius: 45% 1.25rem 1.25rem 1.25rem;
		background-image:
			radial-gradient(ellipse at 70% 22%, rgb(255 255 255 / 48%), transparent 45%),
			linear-gradient(145deg, #d4c6b3 0%, #c1b09a 55%, #9a806f 100%);
	}

	.story-section--closing .story-copy {
		grid-column: span 6;
	}

	.image-placeholder--closing {
		grid-column: span 6;
		min-height: clamp(16rem, 32vw, 27rem);
		border-radius: 1.25rem 45% 1.25rem 1.25rem;
		background-image:
			radial-gradient(ellipse at 28% 30%, rgb(255 255 255 / 48%), transparent 48%),
			linear-gradient(145deg, #d1c9bb 0%, #b3b8ad 48%, #7d8b7b 100%);
	}

	@media (max-width: 700px) {
		.about-page {
			padding-block: 3.5rem 5rem;
		}

		.story-section {
			grid-template-columns: minmax(0, 1fr);
			row-gap: 2rem;
		}

		.story-section + .story-section {
			margin-top: 5rem;
		}

		.story-copy,
		.story-section--middle .story-copy,
		.story-section--closing .story-copy {
			grid-column: 1;
		}

		.story-gallery,
		.image-placeholder--closing {
			grid-column: 1;
		}

		.story-gallery {
			gap: 0.75rem;
		}

		.image-placeholder--portrait {
			min-height: 16rem;
		}

		.image-placeholder--landscape {
			min-height: 12rem;
			margin-top: 2.5rem;
		}

		.image-placeholder--closing {
			min-height: 16rem;
		}
	}

	@media (max-width: 400px) {
		.story-gallery {
			grid-template-columns: minmax(0, 1fr);
		}

		.image-placeholder--portrait {
			min-height: 18rem;
		}

		.image-placeholder--landscape {
			min-height: 13rem;
			margin-top: 0;
		}

		.story-gallery--middle .image-placeholder--middle-primary {
			min-height: 16rem;
		}

		.story-gallery--middle .image-placeholder--middle-secondary {
			min-height: 13rem;
			margin-top: 0;
		}
	}
</style>
