<script lang="ts">
	const projects = [
		{ number: '01', imageLabel: 'Project 1 image placeholder', role: 'Researcher', year: '2026' },
		{ number: '02', imageLabel: 'Project 2 image placeholder', role: 'Designer', year: '2025' },
		{ number: '03', imageLabel: 'Project 3 image placeholder', role: 'Developer', year: '2024' }
	];
	const workHistory = [
		{ year: '2017 - 2018', role: 'Software Engineer', company: 'Questa' },
		{ year: '2018 - 2020', role: 'Software Engineer', company: 'Grão investimentos' },
		{ year: '2020 - 2021', role: 'Software Engineer', company: 'Midway/Riachuelo' },
		{ year: '2021 - 2026', role: 'Software Engineer', company: 'QuintoAndar' }
	];
</script>

<svelte:head>
	<title>Work — jcgama</title>
	<meta
		name="description"
		content="Selected work by jcgama. Project descriptions and imagery are placeholders for now."
	/>
</svelte:head>

<main id="main-content" class="site-main work-page">
	<section class="intro" aria-labelledby="page-title">
		<h1 id="page-title">Nice to meet you</h1>
		<p class="bio-placeholder">
			I'm Júlio Gama, UX Designer and Software Engineer. I have a passion for creating products that give people what they need, solving problems via a user-centered design. Let's connect and create something great together!
		</p>
	</section>

	<section class="work" aria-labelledby="work-title">
		<div class="section-heading">
			<h2 id="work-title">Places I've worked at</h2>
		</div>

		<ul class="work-history-list">
			{#each workHistory.reverse() as work (work.year)}
				<li>
					<details class="work-history-item">
						<summary>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path
									d="m9 18 6-6-6-6"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<span>{work.company} - {work.role}, {work.year}</span>
						</summary>
						<div class="work-history-details">
							<p>Details coming soon.</p>
						</div>
					</details>
				</li>
			{/each}
		</ul>
	</section>

	<section class="work" aria-labelledby="work-title">
		<div class="section-heading">
			<h2 id="work-title">Selected work</h2>
		</div>

		<ul class="project-grid">
			{#each projects as project (project.number)}
				<li>
					<article class="project-card" aria-labelledby="project-title-{project.number}">
						<div class="project-image" role="img" aria-label={project.imageLabel}>
							<span>Project image placeholder</span>
						</div>
						<div class="project-copy">
							<p class="project-number">Case study {project.number}</p>
							<h3 id="project-title-{project.number}">Project title placeholder</h3>
							<p class="project-description">
								Project summary placeholder — add the challenge, approach, and outcome.
							</p>
							<p class="project-meta">{project.role}, {project.year}</p>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	.site-main {
		padding-block: clamp(4rem, 10vw, 8rem);
	}

	.intro {
		max-width: 46rem;
		margin-bottom: clamp(4rem, 10vw, 8rem);
	}

	.project-number,
	.project-meta {
		font-size: 0.75rem;
		font-weight: 650;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1,
	h2,
	h3,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 1.25rem;
		font-size: clamp(3rem, 9vw, 6.5rem);
		letter-spacing: -0.07em;
		line-height: 0.95;
	}

	.bio-placeholder {
		max-width: 40rem;
		margin-bottom: 0;
		font-size: clamp(1.125rem, 2.5vw, 1.5rem);
		line-height: 1.55;
	}


	.section-heading {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	h2 {
		margin-bottom: 0;
		font-size: clamp(1.5rem, 3vw, 2rem);
		letter-spacing: -0.04em;
	}

	.work-history-list {
		padding: 0;
		border-top: 1px solid #d5d5d2;
		list-style: none;
		margin-bottom: 4rem;
	}

	.work-history-item {
		border-bottom: 1px solid #d5d5d2;
	}

	.work-history-item span {
		color: #424242;
	}

	.work-history-item summary {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-block: 1.125rem;
		font-weight: 600;
		line-height: 1.4;
		cursor: pointer;
		list-style: none;
	}

	.work-history-item summary::-webkit-details-marker {
		display: none;
	}

	.work-history-item summary:focus-visible {
		border-radius: 0.125rem;
		outline: 3px solid #222;
		outline-offset: 4px;
	}

	.work-history-item summary svg {
		width: 1.25rem;
		height: 1.25rem;
		flex: 0 0 auto;
		transition: transform 160ms ease;
	}

	.work-history-item[open] summary svg {
		transform: rotate(90deg);
	}

	.work-history-details {
		padding: 0 2.25rem 1.25rem 0;
	}

	.work-history-details p {
		max-width: 46rem;
		margin: 0;
		color: #505050;
		line-height: 1.5;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.project-card {
		height: 100%;
		overflow: hidden;
		border: 1px solid #d5d5d2;
		border-radius: 0.75rem;
		background: #fff;
	}

	.project-image {
		display: grid;
		min-height: 15rem;
		place-items: center;
		padding: 1rem;
		background-color: #e5e5e2;
		background-image: radial-gradient(#b8b8b4 0.8px, transparent 0.8px);
		background-size: 14px 14px;
		color: #363636;
		text-align: center;
	}

	.project-image > span {
		padding: 0.5rem 0.75rem;
		border: 1px solid #c5c5c1;
		border-radius: 999px;
		background: #f7f7f5;
		font-size: 0.875rem;
	}

	.project-copy {
		padding: 1.25rem;
	}

	.project-number {
		margin-bottom: 0.75rem;
		color: #505050;
	}

	h3 {
		margin-bottom: 0.75rem;
		font-size: 1.25rem;
		letter-spacing: -0.025em;
	}

	.project-description {
		margin-bottom: 1.25rem;
		color: #424242;
		line-height: 1.5;
	}

	.project-meta {
		margin-bottom: 0;
		color: #505050;
	}

	@media (max-width: 900px) {
		.project-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 600px) {
		.site-main {
			padding-block: 3.5rem;
		}

		.intro {
			margin-bottom: 4rem;
		}

		.section-heading {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.5rem;
		}

		.project-grid {
			grid-template-columns: 1fr;
		}

		.project-image {
			min-height: 13rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.work-history-item summary svg {
			transition: none;
		}
	}
</style>
