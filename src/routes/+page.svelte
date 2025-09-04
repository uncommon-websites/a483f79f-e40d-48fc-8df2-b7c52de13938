<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
</script>

<CenteredTextOnlyHero
	title="AI can see and hear. Now it can judge."
	subtitle="Train multimodal models with expert-annotated data. Verita brings human-level taste, context, and nuance to the most complex creative tasks."
	imageSrc="/generated/image-a-professional-researcher-sits-at-a-wood.webp"
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
	title="Training AI to think, not just process"
	text="We curate expert-annotated multimodal datasets for subjective domains like design, writing, and visual storytelling. While others provide crowdsourced labels, we deliver the human judgment that creative AI systems need to truly understand context and quality."
/>

 

<Features
	title="Why frontier labs choose Verita"
	subtitle="The annotation platform built for creative AI systems"
	features={[
		{
			title: "Expert-curated datasets",
			description:
				"Multimodal data labeled by domain specialists from Pixar, MIT, and top creative organizations, not crowdsourced gig workers."
		},
		{
			title: "Subjective reasoning annotation",
			description:
				"Labels that capture taste, intent, and creative judgment for training AI systems that understand context, not just content."
		},
		{
			title: "Domain specialist network",
			description:
				"3,000+ professionals from creative industries who understand what good looks like in design, writing, and visual storytelling."
		},
		{
			title: "Research-grade methodology",
			description:
				"Every annotation process designed with AI researchers to ensure data quality that advances the science, not just the metrics."
		},
		{
			title: "Rapid deployment",
			description:
				"From concept to labeled dataset in weeks, not months, with iterative feedback loops built for research timelines."
		},
		{
			title: "Secure infrastructure",
			description:
				"Enterprise-grade security with zero data egress, compliance frameworks, and full audit trails for sensitive model training."
		}
	]}
/>
<AboutTeaser />
<CallToAction
	title="See the quality difference"
	subtitle="Compare our expert annotations with crowdsourced labels and discover why frontier labs trust Verita for their most important training data."
	description="Book a demo to see how domain expertise transforms AI training."
	imageSrc="/generated/image-a-clean-modern-office-space-bathed-in-na.webp"
	callsToAction={[
		{
			href: "/contact",
			label: "Book demo",
			variant: "primary"
		}
	]}
/>
