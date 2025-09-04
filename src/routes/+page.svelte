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
	title="Expert data for AI that thinks like humans"
	subtitle="We deliver multimodal datasets and AI agents that understand judgment, not just patterns."
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
	title="Expert data and AI agents"
	text="We provide two solutions: multimodal datasets that teach AI human judgment, and secure AI agents for enterprise workflows. Both built with research-first principles."
/>

 

<Features
	title="What we do"
	subtitle="Expert data and secure AI agents built for the future"
	features={[
		{
			title: "Multimodal datasets",
			description:
				"Expert-curated data across text, audio, video, and design that teaches AI human judgment."
		},
		{
			title: "Enterprise AI agents",
			description:
				"Secure AI automation for regulated workflows with human oversight and audit trails."
		},
		{
			title: "Expert network",
			description:
				"3,000+ domain specialists from creative industries, research labs, and technical fields."
		},
		{
			title: "Research-first approach",
			description:
				"Every decision guided by advancing AI science and real-world deployment needs."
		},
		{
			title: "Fast delivery",
			description:
				"From rapid prototypes to production systems in days, not months."
		},
		{
			title: "Enterprise security",
			description:
				"Zero data egress, compliance frameworks, and audit logs for regulated industries."
		}
	]}
/>
<AboutTeaser />
<CallToAction
	title="Ready to get started?"
	subtitle="See how expert data and AI agents can transform your work."
	description="Book a demo to explore our solutions."
	imageSrc="/generated/image-a-clean-modern-office-space-bathed-in-na.webp"
	callsToAction={[
		{
			href: "/contact",
			label: "Book demo",
			variant: "primary"
		}
	]}
/>
