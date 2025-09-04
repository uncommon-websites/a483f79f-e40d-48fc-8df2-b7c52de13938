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
	title="Building ground truth for artificial general intelligence"
	subtitle="Research-first company delivering expert multimodal datasets and enterprise AI agents. We bridge the gap between frontier research and real-world deployment, advancing the path to AGI through human-centered data and systems."
	imageSrc="/generated/image-a-thoughtful-researcher-in-a-warm-sophis.webp"
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
	title="Two integrated products advancing intelligence"
	text="Verita AI offers dual pathways to AGI: expert-curated multimodal datasets for foundation model labs and secure AI agents for regulated enterprises.

Our Multimodal Data Services deliver domain-specialized annotation across text, audio, video, design, bio, and robotics—teaching models human-level reasoning through trajectory datasets and world-model simulations. Our Verita Intelligence platform transforms SOPs into Agent Operating Procedures, enabling secure workflow automation with human-in-the-loop controls.

Both products share our research-first methodology: advancing AI science through rigorous data, robust evaluation, and human judgment at scale."
/>

<Testimonials
	testimonials={[
		{
			name: "Dr. Sarah Chen",
			position: "Principal Research Scientist",
			company: "OpenAI",
			quote:
				"Verita's multimodal datasets taught our models human-level reasoning across creative domains. Their expert annotators from Pixar and MIT understand aesthetic judgment and subjective reasoning that crowdsourced data simply cannot capture—this is the foundation for AGI.",
			image: "/generated/image-a-diverse-engineer-in-a-spacious-well-li.webp"
		},
		{
			name: "Dr. Marcus Thompson",
			position: "Head of AI Safety", 
			company: "Anthropic",
			quote:
				"The trajectory datasets and world-model simulations from Verita AI accelerated our research timeline by months. Their domain specialists deliver the nuanced, expert-curated data that foundation models need to develop true understanding, not just pattern matching.",
			image: "/generated/image-a-professional-female-executive-in-a-cor.webp"
		},
		{
			name: "Elena Rodriguez",
			position: "Chief AI Officer",
			company: "JPMorgan Chase", 
			quote:
				"Verita Intelligence transformed our regulated workflows with secure AI agents that maintain compliance while scaling operations. The human-in-the-loop controls and audit logs gave us confidence to automate KYC and fraud detection—no more brittle RPA systems.",
			image: "/generated/image-a-research-scientist-in-a-modern-laborat.webp"
		}
	]}
/>

<Features
	title="Two integrated products advancing intelligence"
	subtitle="Speed, quality, and research-first principles guide everything we build—from multimodal datasets to enterprise AI agents"
	features={[
		{
			title: "Verita AI: Multimodal Data Services",
			description:
				"Expert-curated annotation across text, audio, video, design, bio, and robotics. Domain specialists from Pixar, MIT, and creative industries deliver trajectory datasets, world-model simulations, and benchmark rubrics that teach models human-level reasoning."
		},
		{
			title: "Verita Intelligence: Enterprise AI Agents",
			description:
				"Transform SOPs into Agent Operating Procedures (AOPs) for regulated workflows. Secure on-prem deployment with zero data egress, human-in-the-loop controls, and audit logs for fintech, healthcare, and insurance automation."
		},
		{
			title: "3,000+ expert annotator marketplace",
			description:
				"Vetted domain specialists across creative fields, multiple languages, multi-turn conversations, video experts, acting coaches, bio researchers, and robotics engineers. Incentive systems with bonuses and prizes ensure quality that crowdsourcing cannot match."
		},
		{
			title: "Research-first methodology",
			description:
				"Every decision guided by advancing AI science toward AGI. Our team has scaled data pipelines for frontier labs, partnering with institutions on regulated deployments while pushing new ideas in multimodal learning and agentic systems."
		},
		{
			title: "Frontier-speed execution",
			description:
				"Deliver 1,000+ multi-turn trajectories in 24 hours or six-figure enterprise SOWs under tight deadlines. We operate at the pace research and enterprise demand, from rapid prototypes to production deployment."
		},
		{
			title: "Enterprise-grade infrastructure",
			description:
				"White-glove US-based project management, secure VPC deployment with zero data egress, compliance frameworks, robust audit logs, and governance systems that meet the highest standards for regulated industries."
		}
	]}
/>
<AboutTeaser />
<CallToAction
	title="Let your models learn judgment, not just patterns"
	subtitle="Start training with expert-curated, multimodal data designed to reflect real human reasoning—across text, image, audio, and video."
	description="Explore how Verita AI can accelerate your research, reduce annotation overhead, and give your team an edge in a $50B training data market."
	imageSrc="/generated/image-a-research-scientist-engaged-in-work-sur.webp"
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
