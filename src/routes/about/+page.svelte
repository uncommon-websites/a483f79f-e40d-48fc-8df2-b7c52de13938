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
<<<<<<< HEAD
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
=======
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
>>>>>>> 3f08d8918c3c0027f40bf204ac97de65ee0afe8e
		}
	];
</script>

<SecondaryHero
<<<<<<< HEAD
	title="Teaching AI to think with judgment"
	subtitle="Expert-curated data that brings human-level creative reasoning to foundation models"
	imageSrc="/generated/image-a-diverse-team-of-researchers-engaged-in.webp"
=======
	title="Teaching AI what humans feel"
	subtitle="Because intelligence needs taste"
	imageSrc="/generated/image-a-diverse-group-of-researchers-engaged-i.webp"
>>>>>>> 3f08d8918c3c0027f40bf204ac97de65ee0afe8e
/>

<!-- Story Section -->
<Story
	paragraphs={[
<<<<<<< HEAD
		"The best AI models struggle with something humans do naturally—understanding taste, nuance, and subjective quality. While foundation model labs push the boundaries of what's possible, their training data often lacks the creative judgment that separates good from extraordinary. We founded Verita AI because we saw brilliant researchers hitting walls not from technical limitations, but from data that couldn't teach machines how to think with discernment.",
		"Drawing from our experience scaling data operations at companies like Scale AI, we knew the solution wasn't more data—it was better curation. We built something different: a network of creative professionals who understand subjective reasoning across text, image, audio, and video. Film editors who know narrative flow, designers who understand visual harmony, writers who grasp tonal subtlety. These experts don't just label data; they teach machines the kind of judgment that can't be crowdsourced.",
		"Today, leading foundation model labs trust Verita AI to deliver the multimodal training data that enables human-level creative reasoning in their models. We're not just processing millions of annotations monthly—we're helping define what the next generation of AI will be capable of understanding. Because when you teach machines to recognize quality, beauty, and intent, you unlock possibilities that pure pattern recognition never could."
=======
		"Today's foundation models are limited by data that lacks depth and discernment. Generalist annotators struggle to evaluate aesthetics, tone, intent, or narrative continuity across modalities. While AI grows more powerful, it still can't reason with the nuance that separates good from great—the kind of judgment that makes human creativity irreplaceable.",
		"That's where Verita comes in. We work with seasoned creative professionals—from film editors to designers to poets—to teach AI models how to reason like humans do, across text, image, audio, and video. Founded by ex-Scale AI builders, our team understands exactly what's missing from today's data pipelines. We've rebuilt annotation from the ground up with tools and workflows designed for subjective reasoning.",
		"We're not just improving training data—we're unlocking AI's creative potential. Leading model labs work with Verita to push the frontier of human-like reasoning, teaching their models more than just facts. We're helping them teach judgment, taste, and the subtle distinctions that turn artificial intelligence into something that truly understands the human experience."
>>>>>>> 3f08d8918c3c0027f40bf204ac97de65ee0afe8e
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
<<<<<<< HEAD
	subtitle="Experienced builders transforming AI training data."
	stakeholders={[
		{
			name: "Rithika Kacham",
			position: "CEO & Founder",
			bio: "Leading Verita AI's mission to bring human-level creative judgment to foundation models through expert-curated training data.",
			image: "/generated/image-a-professional-headshot-of-rithika-kacha.webp"
=======
	subtitle="Ex-Scale AI operators with creative partners."
	stakeholders={[
		{
			name: "Rithika Kacham",
			position: "CEO",
			bio: "Leading the mission to teach AI human-level creative judgment through expert-curated multimodal training data.",
			image: "/generated/image-a-professional-headshot-of-a-young-india.webp"
>>>>>>> 3f08d8918c3c0027f40bf204ac97de65ee0afe8e
		},
		{
			name: "Rishi Kalakuntla",
			position: "Co-Founder",
<<<<<<< HEAD
			bio: "Building the technical infrastructure that enables creative professionals to teach AI models subjective reasoning across modalities.",
			image: "/generated/image-a-professional-headshot-of-rishi-kalakun.webp"
=======
			bio: "Building the infrastructure and tools that enable creative professionals to train AI models with taste and nuance.",
			image: "/generated/image-a-professional-portrait-of-a-young-india.webp"
>>>>>>> 3f08d8918c3c0027f40bf204ac97de65ee0afe8e
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
<<<<<<< HEAD
	title="Ready to teach your models better judgment?"
	subtitle="Let's elevate your training data"
	description="Join leading foundation model labs already using Verita AI's expert-curated multimodal data to train models with human-level creative reasoning."
	imageSrc="/generated/image-a-professional-woman-ai-researcher-stand.webp"
=======
	title="Want AI to reason more like a human?"
	subtitle="Let's build smarter models together"
	description="Tell us what you're building. If your latest model needs better intuition, sensory understanding, or taste-level differentiation, we can help. Reach out to see how our expert-curated annotations can shape more aligned and capable foundation models."
	imageSrc="/generated/image-a-group-of-researchers-in-a-modern-spaci.webp"
>>>>>>> 3f08d8918c3c0027f40bf204ac97de65ee0afe8e
/>
