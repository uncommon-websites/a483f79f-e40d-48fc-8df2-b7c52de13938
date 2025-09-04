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
			title: "Ground truth foundation",
			description: "We build the truth layer that becomes the foundation for reliable, safe AI systems."
		},
		{
			title: "Human judgment at scale",
			description: "Our network of domain experts teaches machines the subjective reasoning that can't be crowdsourced."
		},
		{
			title: "Research-first approach",
			description: "Every dataset we create advances the frontier of what's possible in multimodal AI."
		}
	];
</script>

<SecondaryHero
	title="Building ground truth for the next generation of intelligence"
	subtitle="We transform AI models into creative reasoning systems through expert-curated multimodal datasets that teach machines taste, judgment, and human-level understanding"
	imageSrc="/generated/image-a-group-of-ai-researchers-and-data-annot.webp"
/>

<!-- About Verita AI Section -->
<Story
	paragraphs={[
		"The name Verita comes from the Latin word for truth. In the world of machine learning, ground truth is the foundation on which models are trained and evaluated. It is the signal against which everything else is measured. At Verita AI, we see ourselves as builders of that truth layer for artificial intelligence.",
		"Our mission is to deliver the highest-quality, human-centered data and systems that guide AI toward reliability, safety, and ultimately AGI. We are a research-first company founded on the belief that advancing AI requires not only cutting-edge models, but also rigorous data, robust evaluation, and human judgment at scale.",
		"Our work blends the precision of science with the imagination of art, pushing the frontier of multimodal data and enterprise AI. To us, truth is not static. It is a living standard, shaped by people, evolving with technology, and essential for building systems that can learn, adapt, and act responsibly in the real world.",
		"Verita AI exists to create ground truth for the next generation of intelligence. We built something different: a network of creative professionals who understand subjective reasoning across text, image, audio, and video. These experts don't just label data; they teach machines the kind of judgment that can't be crowdsourced, enabling human-level creative reasoning in the world's most advanced AI models."
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
			image: "/generated/image-a-professional-headshot-of-rithika-kacha.webp"
		},
		{
			name: "Rishi Kalakuntla",
			position: "Co-Founder",
			bio: "Building the technical infrastructure that enables creative professionals to teach AI models subjective reasoning across modalities.",
			image: "/generated/image-a-professional-headshot-of-rishi-kalakun.webp"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
	title="Ready to build ground truth for your AI?"
	subtitle="Partner with domain experts"
	description="Join leading foundation model labs who trust Verita AI to deliver the expert-curated multimodal training data that enables human-level creative reasoning in their models."
	imageSrc="/generated/image-a-professional-ai-researcher-is-deeply-f.webp"
/>
