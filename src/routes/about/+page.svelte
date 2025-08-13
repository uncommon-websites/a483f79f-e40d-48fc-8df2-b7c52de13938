<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Excellence in data",
			description: "We don't just label—we curate. Every annotation is backed by domain expertise, real-world experience, and a commitment to capturing subjective nuance with precision."
		},
		{
			title: "Innovation through multimodal training",
			description: "We go beyond conventional pipelines by designing workflows that reflect the complexity of human perception across textual, visual, auditory, and cinematic formats."
		},
		{
			title: "Partnership with creative minds",
			description: "We collaborate with artists, critics, and craftspeople from across disciplines—not as a source of labor, but as co-creators of better AI systems."
		}
	];
</script>

<SecondaryHero
	title="Teaching AI what humans feel"
	subtitle="Because intelligence needs taste"
	imageSrc="/generated/image-a-diverse-group-of-researchers-engaged-i.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Today's foundation models are limited by data that lacks depth and discernment. Generalist annotators struggle to evaluate aesthetics, tone, intent, or narrative continuity across modalities. While AI grows more powerful, it still can't reason with the nuance that separates good from great—the kind of judgment that makes human creativity irreplaceable.",
		"That's where Verita comes in. We work with seasoned creative professionals—from film editors to designers to poets—to teach AI models how to reason like humans do, across text, image, audio, and video. Founded by ex-Scale AI builders, our team understands exactly what's missing from today's data pipelines. We've rebuilt annotation from the ground up with tools and workflows designed for subjective reasoning.",
		"We're not just improving training data—we're unlocking AI's creative potential. Leading model labs work with Verita to push the frontier of human-like reasoning, teaching their models more than just facts. We're helping them teach judgment, taste, and the subtle distinctions that turn artificial intelligence into something that truly understands the human experience."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
	subtitle="Ex-Scale AI operators with creative partners."
	stakeholders={[
		{
			name: "Rithika Kacham",
			position: "CEO",
			bio: "Leading the mission to teach AI human-level creative judgment through expert-curated multimodal training data.",
			image: "/generated/image-a-professional-headshot-of-a-young-india.webp"
		},
		{
			name: "Rishi Kalakuntla",
			position: "Co-Founder",
			bio: "Building the infrastructure and tools that enable creative professionals to train AI models with taste and nuance.",
			image: "/generated/image-a-professional-portrait-of-a-young-india.webp"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
	title="Want AI to reason more like a human?"
	subtitle="Let's build smarter models together"
	description="Tell us what you're building. If your latest model needs better intuition, sensory understanding, or taste-level differentiation, we can help. Reach out to see how our expert-curated annotations can shape more aligned and capable foundation models."
	imageSrc="/generated/image-a-group-of-researchers-in-a-modern-spaci.webp"
/>
