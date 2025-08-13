<script lang="ts">
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";

	let {
		title,
		subtitle,
		imageSrc = "https://www.unc.mn/image-placeholder.svg",
		...rest
	}: {
		title: string;
		subtitle: string;
		imageSrc: string;
		[key: string]: any;
	} = $props();
</script>

<header class="relative bg-gradient-to-br from-primary-50 to-primary-100 border-b border-primary-200" {...rest}>
	<div class="section-px section-py container mx-auto grid gap-16 gap-y-0">
		<div class="section-pb-sm container-sm grid text-balance">
			<h1 class="text-display font-[450] text-primary-900 mb-6">
				{title}
			</h1>
			<p class="text-title3 text-primary-700 font-normal">
				{subtitle}
			</p>
		</div>
		<div class="aspect-video overflow-clip rounded-xl bg-white shadow-sm border border-primary-200">
			<img
				class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
				src={imageSrc}
				alt="Verita AI team collaborating on AI training data"
			/>
		</div>
	</div>
</header>
