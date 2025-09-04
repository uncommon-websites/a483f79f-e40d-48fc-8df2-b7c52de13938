<!--

@component CenteredTextOnlyHero

This component displays a centered text hero with call to action buttons.
Takes up the full viewport height and centers content vertically.
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";

	// Types
	type Props = {
		title: string;
		subtitle: string;
		imageSrc: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		callsToAction = [cta],
		imageSrc = "https://www.unc.mn/image-placeholder.svg",
		...rest
	}: Props = $props();
</script>

<div class="grid h-[calc(100vh-var(--nav-height))] grid-rows-[1fr_auto]" {...rest}>
	<div class="relative isolate flex items-center justify-center overflow-hidden">
		<!-- Full-screen background video -->
		<video 
			class="absolute inset-0 h-full w-full object-cover -z-10"
			autoplay 
			muted 
			loop 
			playsinline
		>
			<source src="/hero.mp4" type="video/mp4" />
		</video>
		
		<!-- Dark overlay for text readability -->
		<div class="absolute inset-0 bg-black/40 -z-5"></div>

		<header
			class="section-px z-50 container mx-auto grid place-items-center text-center text-balance text-white"
			data-enter-container
		>
			<div class="grid max-w-prose place-items-center justify-center gap-6 lg:max-w-[80ch]">
				<h1 class="text-display w-full text-balance lg:!text-7xl text-white drop-shadow-lg" data-enter>
					<span class="block"><AnimateText text={title} /></span>
				</h1>

				<p
					data-enter
					class="text-headline block max-w-[45ch] text-pretty text-white/90 transition duration-500 ease-out drop-shadow-md"
				>
					{subtitle}
				</p>
			</div>

			{#if callsToAction.length > 0}
				<div class="mt-8 flex gap-4" data-enter>
					{#each callsToAction as cta, index}
						<Button href={cta.href} size="lg" variant="primary" class="max-lg:hidden"
							>{cta.label}</Button
						>
						<Button
							href={cta.href}
							size="md"
							variant="primary"
							class="lg:hidden">{cta.label}</Button
						>
					{/each}
				</div>
			{/if}
		</header>
	</div>
</div>
