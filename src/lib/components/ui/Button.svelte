<script lang="ts">
	// Types
	import type { Component, Snippet } from "svelte";
	import type { ButtonRootProps } from "bits-ui";
	import { Button } from "bits-ui";

	type Variant = "primary" | "secondary" | "ghost";
	type Size = "sm" | "md" | "lg";

	type Props = ButtonRootProps & {
		variant?: Variant;
		size?: Size;
		children: Snippet;
		iconOnly?: boolean;
		hideLabel?: boolean;
		rounded?: boolean;
		prefix?: Component;
		suffix?: Component;
	};

	// Props
	const {
		variant = "primary",
		size = "md",
		children,
		class: classes = "",
		prefix: Prefix,
		suffix: Suffix,
		iconOnly = false,
		hideLabel = false,
		...rest
	}: Props = $props();

	// Styles
	const variants: Record<Variant, string> = {
		primary: "bg-primary text-primary-foreground hover:brightness-90 active:brightness-80",
		secondary: "bg-card text-foreground border border-border hover:bg-card-hover active:brightness-95",
		ghost: "bg-transparent text-foreground hover:bg-accent active:brightness-95"
	};

	const sizes: Record<Size, string> = $derived({
		sm: iconOnly ? "p-1.5 text-sm" : "px-4 py-1.5 rounded text-sm",
		md: iconOnly ? "p-2 text-base" : "px-4.5 py-2 rounded text-base",
		lg: iconOnly ? "p-2.5 text-lg" : "px-5 py-2 rounded-lg text-lg"
	});

	const baseStyles =
		"inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [touch-action:manipulation]";
</script>

<Button.Root
	{...rest}
	class={[
		baseStyles,
		variants[variant],
		iconOnly && "aspect-square",
		sizes[size],
		"gap-2",
		classes
	]}
	data-variant={variant}
	data-size={size}
>
	{#if Prefix}
		<Prefix />
	{/if}
	<span class:sr-only={hideLabel || iconOnly}>
		{@render children?.()}
	</span>
	{#if Suffix}
		<Suffix />
	{/if}
</Button.Root>
