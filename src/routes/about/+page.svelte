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
			title: "Expert curation",
			description: "We believe quality data comes from domain experts, not crowds."
		},
		{
			title: "Technical precision",
			description: "Building tools and workflows designed specifically for subjective reasoning."
		},
		{
			title: "Research impact",
			description: "Enabling breakthrough capabilities in the world's most advanced AI models."
		}
	];
</script>

<SecondaryHero
	title="Teaching AI to think with judgment"
	subtitle="Expert-curated data that brings human-level creative reasoning to foundation models"
	imageSrc="https://www.unc.mn/image-placeholder.svg"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"The best AI models struggle with something humans do naturally—understanding taste, nuance, and subjective quality. While foundation model labs push the boundaries of what's possible, their training data often lacks the creative judgment that separates good from extraordinary. We founded Verita AI because we saw brilliant researchers hitting walls not from technical limitations, but from data that couldn't teach machines how to think with discernment.",
		"Drawing from our experience scaling data operations at companies like Scale AI, we knew the solution wasn't more data—it was better curation. We built something different: a network of creative professionals who understand subjective reasoning across text, image, audio, and video. Film editors who know narrative flow, designers who understand visual harmony, writers who grasp tonal subtlety. These experts don't just label data; they teach machines the kind of judgment that can't be crowdsourced.",
		"Today, leading foundation model labs trust Verita AI to deliver the multimodal training data that enables human-level creative reasoning in their models. We're not just processing millions of annotations monthly—we're helping define what the next generation of AI will be capable of understanding. Because when you teach machines to recognize quality, beauty, and intent, you unlock possibilities that pure pattern recognition never could."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
	subtitle="Experienced builders transforming AI training data."
	stakeholders={[
		{
			name: "Rithika Kacham",
			position: "CEO & Founder",
			bio: "Leading Verita AI's mission to bring human-level creative judgment to foundation models through expert-curated training data.",
			image: "https://www.unc.mn/image-placeholder.svg"
		},
		{
			name: "Rishi Kalakuntla",
			position: "Co-Founder",
			bio: "Building the technical infrastructure that enables creative professionals to teach AI models subjective reasoning across modalities.",
			image: "https://www.unc.mn/image-placeholder.svg"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
	title="Ready to teach your models better judgment?"
	subtitle="Let's elevate your training data"
	description="Join leading foundation model labs already using Verita AI's expert-curated multimodal data to train models with human-level creative reasoning."
/>
