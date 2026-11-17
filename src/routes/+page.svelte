<script lang="ts">
	const projects = [
		{ number: '01', imageLabel: 'Project 1 image placeholder' },
		{ number: '02', imageLabel: 'Project 2 image placeholder' },
		{ number: '03', imageLabel: 'Project 3 image placeholder' }
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
		<p class="eyebrow">Portfolio</p>
		<h1 id="page-title">Work</h1>
		<p class="bio-placeholder">
			<span class="placeholder-label">Short bio placeholder</span>
			A brief introduction about who am i, what i do, and the kind of work i want to
			share.
		</p>
	</section>

	<section class="work" aria-labelledby="work-title">
		<div class="section-heading">
			<h2 id="work-title">Selected work</h2>
			<p>Project details and imagery coming soon</p>
		</div>

		<ul class="project-grid">
			{#each projects as project (project.number)}
				<li>
					<article class="project-card" aria-labelledby="project-title-{project.number}">
						<div class="project-image" role="img" aria-label={project.imageLabel}>
							<span>Project image placeholder</span>
						</div>
						<div class="project-copy">
							<p class="project-number">Project {project.number}</p>
							<h3 id="project-title-{project.number}">Project title placeholder</h3>
							<p class="project-description">
								Project summary placeholder — add the challenge, approach, and outcome.
							</p>
							<p class="project-meta">Role and year placeholder</p>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	.site-main {
		width: min(100% - 3rem, 76rem);
		margin-inline: auto;
		padding-block: clamp(4rem, 10vw, 8rem);
	}

	.intro {
		max-width: 46rem;
		margin-bottom: clamp(4rem, 10vw, 8rem);
	}

	.eyebrow,
	.placeholder-label,
	.project-number,
	.project-meta {
		font-size: 0.75rem;
		font-weight: 650;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.eyebrow {
		margin: 0 0 0.75rem;
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

	.placeholder-label {
		display: block;
		margin-bottom: 0.5rem;
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

	.section-heading > p {
		margin-bottom: 0;
		color: #505050;
		font-size: 0.875rem;
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
			width: min(100% - 2rem, 76rem);
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
</style>
