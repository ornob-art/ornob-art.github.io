declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"a-brief-history-of-human-evolution.md": {
	id: "a-brief-history-of-human-evolution.md";
  slug: "a-brief-history-of-human-evolution";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"abiogenesis.md": {
	id: "abiogenesis.md";
  slug: "abiogenesis";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ace-of-base.md": {
	id: "ace-of-base.md";
  slug: "ace-of-base";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"before-the-big-bang-and-the-end-of-the-universe.md": {
	id: "before-the-big-bang-and-the-end-of-the-universe.md";
  slug: "before-the-big-bang-and-the-end-of-the-universe";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"bermuda-triangle.md": {
	id: "bermuda-triangle.md";
  slug: "bermuda-triangle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"birth-of-man.md": {
	id: "birth-of-man.md";
  slug: "birth-of-man";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"birth-of-the-universe.md": {
	id: "birth-of-the-universe.md";
  slug: "birth-of-the-universe";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"brain-trapped-in-scroll.md": {
	id: "brain-trapped-in-scroll.md";
  slug: "brain-trapped-in-scroll";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cemetery-of-thoughts.md": {
	id: "cemetery-of-thoughts.md";
  slug: "cemetery-of-thoughts";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"copernicus-silent-revolution.md": {
	id: "copernicus-silent-revolution.md";
  slug: "copernicus-silent-revolution";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dancing-plague-of-1518.md": {
	id: "dancing-plague-of-1518.md";
  slug: "dancing-plague-of-1518";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dark-matter-dark-energy.md": {
	id: "dark-matter-dark-energy.md";
  slug: "dark-matter-dark-energy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"darwins-scientific-revolution.md": {
	id: "darwins-scientific-revolution.md";
  slug: "darwins-scientific-revolution";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"darwins-theory-of-evolution.md": {
	id: "darwins-theory-of-evolution.md";
  slug: "darwins-theory-of-evolution";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"death-of-conscience.md": {
	id: "death-of-conscience.md";
  slug: "death-of-conscience";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"death-of-socrates.md": {
	id: "death-of-socrates.md";
  slug: "death-of-socrates";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"discipline-is-not-a-rule-it-is-a-philosophy-of-life.md": {
	id: "discipline-is-not-a-rule-it-is-a-philosophy-of-life.md";
  slug: "discipline-is-not-a-rule-it-is-a-philosophy-of-life";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"earths-magnetic-field-the-real-mystery-inside.md": {
	id: "earths-magnetic-field-the-real-mystery-inside.md";
  slug: "earths-magnetic-field-the-real-mystery-inside";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"emptiness-amidst-abundance.md": {
	id: "emptiness-amidst-abundance.md";
  slug: "emptiness-amidst-abundance";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"evolution-of-life.md": {
	id: "evolution-of-life.md";
  slug: "evolution-of-life";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"extinction-of-dinosaurs.md": {
	id: "extinction-of-dinosaurs.md";
  slug: "extinction-of-dinosaurs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"from-temporary-memory-to-permanent-memory.md": {
	id: "from-temporary-memory-to-permanent-memory.md";
  slug: "from-temporary-memory-to-permanent-memory";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"galileo-and-the-catholic-church.md": {
	id: "galileo-and-the-catholic-church.md";
  slug: "galileo-and-the-catholic-church";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"god-particle-the-particle-without-which-nothing-in-the-universe-would-exist.md": {
	id: "god-particle-the-particle-without-which-nothing-in-the-universe-would-exist.md";
  slug: "god-particle-the-particle-without-which-nothing-in-the-universe-would-exist";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"human-civilization-after-5-billion-years.md": {
	id: "human-civilization-after-5-billion-years.md";
  slug: "human-civilization-after-5-billion-years";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"humans-as-creators-of-thought-the-construction-of-reality-from-the-mind.md": {
	id: "humans-as-creators-of-thought-the-construction-of-reality-from-the-mind.md";
  slug: "humans-as-creators-of-thought-the-construction-of-reality-from-the-mind";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hunters-life.md": {
	id: "hunters-life.md";
  slug: "hunters-life";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"lethologica.md": {
	id: "lethologica.md";
  slug: "lethologica";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"mars-magnetic-field-mysteries-and-futurehabitation.md": {
	id: "mars-magnetic-field-mysteries-and-futurehabitation.md";
  slug: "mars-magnetic-field-mysteries-and-futurehabitation";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"memory.md": {
	id: "memory.md";
  slug: "memory";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"modern-talking.md": {
	id: "modern-talking.md";
  slug: "modern-talking";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"moon-birth.md": {
	id: "moon-birth.md";
  slug: "moon-birth";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"moral-crisis-behind-religion.md": {
	id: "moral-crisis-behind-religion.md";
  slug: "moral-crisis-behind-religion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"one-thousand-and-one-nights.md": {
	id: "one-thousand-and-one-nights.md";
  slug: "one-thousand-and-one-nights";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"phineas-gage-a-miraculous-chapter-in-the-history-of-medicine.md": {
	id: "phineas-gage-a-miraculous-chapter-in-the-history-of-medicine.md";
  slug: "phineas-gage-a-miraculous-chapter-in-the-history-of-medicine";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"quote.md": {
	id: "quote.md";
  slug: "quote";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"soul-or-consciousness.md": {
	id: "soul-or-consciousness.md";
  slug: "soul-or-consciousness";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"superintelligent-ai.md": {
	id: "superintelligent-ai.md";
  slug: "superintelligent-ai";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"supernova.md": {
	id: "supernova.md";
  slug: "supernova";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-art-of-doing-nothing.md": {
	id: "the-art-of-doing-nothing.md";
  slug: "the-art-of-doing-nothing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-beginning-of-the-first-farming.md": {
	id: "the-beginning-of-the-first-farming.md";
  slug: "the-beginning-of-the-first-farming";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-birth-of-the-sun-and-the-earth.md": {
	id: "the-birth-of-the-sun-and-the-earth.md";
  slug: "the-birth-of-the-sun-and-the-earth";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-chemistry-of-creation-is-suffering-the-only-fuel-for-art.md": {
	id: "the-chemistry-of-creation-is-suffering-the-only-fuel-for-art.md";
  slug: "the-chemistry-of-creation-is-suffering-the-only-fuel-for-art";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-end-of-the-solar-system.md": {
	id: "the-end-of-the-solar-system.md";
  slug: "the-end-of-the-solar-system";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-mind-trapped-in-time.md": {
	id: "the-mind-trapped-in-time.md";
  slug: "the-mind-trapped-in-time";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-moon-is-moving-away-the-earth-is-slowing-down-what-will-be-the-consequences.md": {
	id: "the-moon-is-moving-away-the-earth-is-slowing-down-what-will-be-the-consequences.md";
  slug: "the-moon-is-moving-away-the-earth-is-slowing-down-what-will-be-the-consequences";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-mystery-of-mary-celeste.md": {
	id: "the-mystery-of-mary-celeste.md";
  slug: "the-mystery-of-mary-celeste";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-mystery-of-the-disappearance-of-d-b-cooper.md": {
	id: "the-mystery-of-the-disappearance-of-d-b-cooper.md";
  slug: "the-mystery-of-the-disappearance-of-d-b-cooper";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-nature-of-karma-in-the-conflict-between-wisdom-and-ignorance.md": {
	id: "the-nature-of-karma-in-the-conflict-between-wisdom-and-ignorance.md";
  slug: "the-nature-of-karma-in-the-conflict-between-wisdom-and-ignorance";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-origin-of-the-first-life.md": {
	id: "the-origin-of-the-first-life.md";
  slug: "the-origin-of-the-first-life";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-philosophy-of-imperfection-why-mistakes-are-the-driving-force-of-civilization.md": {
	id: "the-philosophy-of-imperfection-why-mistakes-are-the-driving-force-of-civilization.md";
  slug: "the-philosophy-of-imperfection-why-mistakes-are-the-driving-force-of-civilization";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-unsolved-mystery-of-somerton-beach.md": {
	id: "the-unsolved-mystery-of-somerton-beach.md";
  slug: "the-unsolved-mystery-of-somerton-beach";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-unsolved-story-of-the-dyatlov-pass.md": {
	id: "the-unsolved-story-of-the-dyatlov-pass.md";
  slug: "the-unsolved-story-of-the-dyatlov-pass";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tunguska-event.md": {
	id: "tunguska-event.md";
  slug: "tunguska-event";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"what-would-happen-if-the-earth-or-any-adventurous-person-went-into-a-black-hole.md": {
	id: "what-would-happen-if-the-earth-or-any-adventurous-person-went-into-a-black-hole.md";
  slug: "what-would-happen-if-the-earth-or-any-adventurous-person-went-into-a-black-hole";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"what-would-happen-if-the-earth-started-spinning-in-the-opposite-direction.md": {
	id: "what-would-happen-if-the-earth-started-spinning-in-the-opposite-direction.md";
  slug: "what-would-happen-if-the-earth-started-spinning-in-the-opposite-direction";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"what-would-happen-if-the-earth-started-spinning-twice-as-fast.md": {
	id: "what-would-happen-if-the-earth-started-spinning-twice-as-fast.md";
  slug: "what-would-happen-if-the-earth-started-spinning-twice-as-fast";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"what-would-happen-if-the-earths-north-and-south-magnetic-poles-swapped-places.md": {
	id: "what-would-happen-if-the-earths-north-and-south-magnetic-poles-swapped-places.md";
  slug: "what-would-happen-if-the-earths-north-and-south-magnetic-poles-swapped-places";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"what-would-happen-if-the-world-suddenly-stopped-for-a-second.md": {
	id: "what-would-happen-if-the-world-suddenly-stopped-for-a-second.md";
  slug: "what-would-happen-if-the-world-suddenly-stopped-for-a-second";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"when-we-ourselves-become-products.md": {
	id: "when-we-ourselves-become-products.md";
  slug: "when-we-ourselves-become-products";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"why-are-black-holes-mysterious.md": {
	id: "why-are-black-holes-mysterious.md";
  slug: "why-are-black-holes-mysterious";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"why-does-time-pass-so-quickly-as-we-get-older.md": {
	id: "why-does-time-pass-so-quickly-as-we-get-older.md";
  slug: "why-does-time-pass-so-quickly-as-we-get-older";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"why-doesnt-the-moon-crash-into-the-earth.md": {
	id: "why-doesnt-the-moon-crash-into-the-earth.md";
  slug: "why-doesnt-the-moon-crash-into-the-earth";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"why-the-sun-wont-become-a-black-hole.md": {
	id: "why-the-sun-wont-become-a-black-hole.md";
  slug: "why-the-sun-wont-become-a-black-hole";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"wormhole.md": {
	id: "wormhole.md";
  slug: "wormhole";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
