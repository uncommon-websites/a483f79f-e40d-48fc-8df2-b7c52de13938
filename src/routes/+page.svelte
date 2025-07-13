<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
</script>

<CenteredTextOnlyHero
	title="Bringing human judgment to multimodal models"
	subtitle="Train foundation models with expert-curated data that teaches taste, nuance, and subjective reasoning—where crowdsourcing falls short."
	imageSrc="/generated/image-a-serene-lavender-field-at-sunset-with-a.webp"
/>
<LogoScroller 
	label="Trusted by AI research leaders"
	logoUrls={[
		'https://cdn.brandfetch.io/openai.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/anthropic.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/stability.ai/w/400/h/400/logo',
		'https://cdn.brandfetch.io/huggingface.co/w/400/h/400/logo'
	]}
/>

<Summary
	title="What we do"
	text="Verita AI helps foundation model labs like OpenAI and Anthropic train models that reason with human-level creative judgment. We provide expert-curated annotations across text, image, audio, and video—designed to teach models the kind of nuance, context, and taste that crowdsourcing can't capture.

Subjectivity, nuance, and taste aren't optional in human intelligence—your training data shouldn't treat them like they are."
/>

<Testimonials
	testimonials={[
		{
			name: "Dr. Priya Mehta",
			position: "Senior AI Research Scientist",
			company: "Anthropic",
			quote:
				"Verita AI reduced our subjective annotation time by 60% while dramatically improving label quality. Their creative domain experts understand nuance that crowdsourced annotators completely miss—this is the difference between training models that perform well on benchmarks versus models that actually understand human preference.",
			image: "/generated/image-a-professional-headshot-of-dr-priya-meht.webp"
		},
		{
			name: "Dr. Marcus Thompson",
			position: "Principal ML Engineer", 
			company: "OpenAI",
			quote:
				"After switching to Verita AI's expert-curated data, our multimodal model's performance on subjective reasoning tasks improved by 40%. The risk of deploying models trained on noisy crowdsourced labels was too high—their domain expertise in creative fields solved our quality bottleneck.",
			image: "/generated/image-a-professional-headshot-of-dr-marcus-tho.webp"
		},
		{
			name: "Dr. Elena Rodriguez",
			position: "Research Director",
			company: "Stability AI", 
			quote:
				"Verita AI's annotators saved us months of iteration cycles. Instead of discovering taste and preference gaps after model deployment, their creative professionals identify subjective reasoning issues during training. This prevented costly model retraining and accelerated our research timeline significantly.",
			image: "/generated/image-a-professional-headshot-of-dr-elena-rodr.webp"
		}
	]}
/>

<Features
	title="Why foundation model labs choose Verita"
	subtitle="Expert-curated training data that teaches machines human-level judgment across modalities"
	features={[
		{
			title: "Expert-curated multimodal annotations",
			description:
				"Domain experts from creative fields provide nuanced feedback on taste-based tasks that crowdsourced data simply cannot capture. Our curated network delivers the subjective reasoning your models need."
		},
		{
			title: "Human-level creative judgment",
			description:
				"Train models to understand taste, nuance, and aesthetic reasoning across text, image, audio, and video with annotations that go beyond binary labels."
		},
		{
			title: "Scale without compromising quality",
			description:
				"Reach millions of expert annotations monthly while maintaining the domain expertise that makes training data truly valuable for foundation models."
		},
		{
			title: "Beyond crowdsourcing limitations",
			description:
				"Move past low-quality crowd annotations that lack domain expertise and miss the subjective nuances critical for advanced AI capabilities."
		},
		{
			title: "Multimodal training excellence",
			description:
				"Seamlessly handle text, image, audio, and video training data with consistent quality standards across all modalities for comprehensive model development."
		},
		{
			title: "Research-grade data operations",
			description:
				"Benefit from ex-Scale AI operators who understand the technical requirements and quality standards that foundation model labs demand."
		}
	]}
/>
<AboutTeaser />
<CallToAction
	title="Let your models learn judgment, not just patterns"
	subtitle="Start training with expert-curated, multimodal data designed to reflect real human reasoning—across text, image, audio, and video."
	description="Explore how Verita AI can accelerate your research, reduce annotation overhead, and give your team an edge in a $50B training data market."
	imageSrc="/generated/image-a-cheerful-research-scientist-in-a-moder.webp"
	callsToAction={[
		{
			href: "/contact",
			label: "Get expert data now",
			variant: "primary"
		},
		{
			href: "/demo",
			label: "See quality examples",
			variant: "secondary"
		}
	]}
/>
