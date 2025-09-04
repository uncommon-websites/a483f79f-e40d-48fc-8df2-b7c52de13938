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
	imageSrc="/generated/image-a-thoughtful-researcher-in-a-warm-natura.webp"
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
	title="Building ground truth for the next generation of intelligence"
	text="The name Verita comes from the Latin word for truth. In machine learning, ground truth is the foundation on which models are trained and evaluated. At Verita AI, we see ourselves as builders of that truth layer for artificial intelligence.

We are a research-first company founded on the belief that advancing AI requires not only cutting-edge models, but also rigorous data, robust evaluation, and human judgment at scale. Our work blends the precision of science with the imagination of art, pushing the frontier of multimodal data and enterprise AI systems that move the world closer to AGI."
/>

<Testimonials
	testimonials={[
		{
			name: "Dr. Priya Mehta",
			position: "Senior AI Research Scientist",
			company: "Anthropic",
			quote:
				"Verita AI reduced our subjective annotation time by 60% while dramatically improving label quality. Their creative domain experts understand nuance that crowdsourced annotators completely miss—this is the difference between training models that perform well on benchmarks versus models that actually understand human preference.",
			image: "/generated/image-a-diverse-research-scientist-silhouetted.webp"
		},
		{
			name: "Sarah Chen",
			position: "CTO", 
			company: "Runway AI",
			quote:
				"As an AI startup focused on creative tools, we needed annotators who understand visual storytelling and aesthetic judgment. Verita's network of domain experts from Pixar and creative industries delivered the specialized datasets that differentiated our models in a crowded market.",
			image: "/generated/image-a-creative-leader-in-a-design-studio-abs.webp"
		},
		{
			name: "Michael Rodriguez",
			position: "Head of AI Operations",
			company: "JPMorgan Chase", 
			quote:
				"Verita Intelligence transformed our KYC workflows with secure AI agents that maintain compliance while scaling operations. The human-in-the-loop guardrails and audit logs gave us confidence to deploy in our regulated environment—no more brittle RPA bots.",
			image: "/generated/image-a-fintech-executive-in-a-professional-of.webp"
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
