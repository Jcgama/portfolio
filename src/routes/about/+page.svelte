<script lang="ts">
	import miyajimaPhoto from '#lib/assets/about/me_at_miyajima.jpeg';
	import wireframesImage from '#lib/assets/about/wireframes.png';
	import fushimiInariPhoto from '#lib/assets/about/me_at_fushimi_inari.jpeg';
</script>

<svelte:head>
	<title>About — jcgama</title>
	<meta
		name="description"
		content="A little about jcgama and the journey from software engineering into UX design."
	/>
</svelte:head>

<main id="main-content" class="site-main about-page">
	<section class="story-section story-section--opening" aria-labelledby="getting-started">
		<div class="story-copy">
			<h1>Hello there!</h1>
			<p class="section-index">1 / 3 - Let’s start from the beginning</p>
			<h2 id="getting-started">Introduction</h2>
			<p class="copy-placeholder">
				When I started my career as a Software Engineer, what drove me to mobile and front-end development was the human aspect of it. Turning interfaces into real products and seeing people interacting with them has alwasy brought me a lot of joy. Naturally, this led me to seeking the answer to the question: “what makes an app or site ‘better’ than another?”. And that’s how I got in contact with UX Design.
			</p>
		</div>

		<div class="story-gallery">
			<img class="story-image story-image--opening" src={miyajimaPhoto} alt="Julio at Miyajima" />
		</div>
	</section>

	<section class="story-section story-section--middle" aria-labelledby="finding-ux">
		<div class="story-gallery story-gallery--middle">
			<img
				class="story-image story-image--middle-primary"
				src={wireframesImage}
				alt="UX design wireframes"
				loading="lazy"
			/>
		</div>

		<div class="story-copy">
			<p class="section-index">2 / 3 - Along the road</p>
			<h2 id="finding-ux">Diving deeper into UX</h2>
			<p class="copy-placeholder">
				I’ve worked closely with design teams over the years of experience as a Software Engineer. Watching them work, as well as doing my bit of reading on the field, honed my skills in telling apart good designs from poor ones. Raising my hand as much as I could during handoffs and implementing great designs made me grasp important concepts regarding heuristics, typography, graphic design and UX as a whole. In recent times, I’ve started building study cases, conducting interviews and analyzing data with the intent of deepening even further my knowledge in UX Design.
			</p>
		</div>
	</section>

	<section class="story-section story-section--closing" aria-labelledby="moving-forward">
		<div class="story-copy">
			<p class="section-index">3 / 3 - Great expectations</p>
			<h2 id="moving-forward">Going forward</h2>
			<p class="copy-placeholder">
				Being a developer with genuine interest in UX Design has made me able to grasp the process of building a product from start to finish, understanding what are the crucial aspects of every step of the road: from understanding user needs, reaching a good problem, creating prototypes, managing handoffs and deadlines, collecting and analyzing data and so on. I am very eager to collaborate and create products that make a real difference in people’s lives, and I hope my skills can contribute for a smoother workflow, from ideation to shipping.
			</p>
		</div>

		<img
			class="story-image story-image--closing"
			src={fushimiInariPhoto}
			alt="Julio at Fushimi Inari"
			loading="lazy"
		/>
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
		margin-top: clamp(3.5rem, 5vw, 5rem);
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
		grid-template-columns: minmax(0, 1fr);
		align-items: center;
	}

	.story-image {
		display: block;
		width: 88%;
		min-width: 0;
		border: 1px solid rgb(67 67 60 / 12%);
		height: auto;
		justify-self: center;
	}

	.story-image--opening {
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 1.25rem 1.25rem 45% 1.25rem;
	}

	.story-section--middle .story-copy {
		grid-column: 7 / span 6;
	}

	.story-image--middle-primary {
		border-radius: 1.25rem 45% 1.25rem 1.25rem;
	}

	.story-section--closing .story-copy {
		grid-column: span 6;
	}

	.story-image--closing {
		grid-column: span 6;
		border-radius: 1.25rem 45% 1.25rem 1.25rem;
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
			margin-top: 3.5rem;
		}

		.story-copy,
		.story-section--middle .story-copy,
		.story-section--closing .story-copy {
			grid-column: 1;
		}

		.story-gallery,
		.story-image--closing {
			grid-column: 1;
		}
	}
</style>
