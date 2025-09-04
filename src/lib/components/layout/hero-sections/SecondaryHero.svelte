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

<header class=" relative" {...rest}>
	<div class="section-px section-py container mx-auto grid gap-16 gap-y-0">
		<div class="section-pb-sm container-sm grid text-balance">
			<h1 class="text-display mb-6 font-[450] text-white">
				{title}
			</h1>
			<p class="text-title3 font-normal text-gray-500">
				{subtitle}
			</p>
		</div>
		<div class=" aspect-video overflow-clip rounded-xl bg-white shadow-sm">
			<img
				class="h-full w-full object-cover"
				src={imageSrc}
				alt="Verita AI team collaborating on AI training data"
			/>
		</div>
	</div>
</header>
