<script lang="ts">
	import Tag from '$lib/components/shared/Tag.svelte';
	import Chevron from '../icons/Chevron.svelte';
	import LG from '../logos/LG.svelte';
	import CloudQuizVector from '../work-vectors/CloudQuizVector.svelte';

	const tags = ['Vue.js', 'Vuex', 'JavaScript', 'Firebase', 'GCP'];
</script>

<div
	class="flex max-md:flex-col w-full max-md:w-[30rem] max-w-5xl max-md:max-w-full md:h-[30rem] rounded-2xl overflow-hidden"
>
	<div
		class="flex items-center justify-center relative w-full md:w-1/2 h-[30rem] max-xs:h-[20rem] z-0 bg-cloudQuiz"
	>
		<CloudQuizVector className="absolute bottom-0 left-0 w-full h-[95%] z-0" />

		<!-- <MemphiDots
			className="max-lg:hidden ignore-movement bottom-[4rem] -right-36 w-44 text-accent opacity-70"
		/> -->

		<img
			src="work/cloud-quiz.png"
			alt="Cloud Quiz Generator"
			class="w-2/3 h-2/3 object-contain z-[1] overflow-visible"
		/>
	</div>

	<div
		class="flex flex-col w-full md:w-1/2 gap-3 max-md:gap-4 p-4 sm:p-6 md:pt-12 z-[1] bg-cloudQuiz2"
	>
		<h2 class="text-inverted text-2xl max-xs:text-xl font-bold font-display w-full m-0">
			Cloud Quiz Generator
		</h2>

		<div class="flex flex-wrap gap-2 w-full">
			{#each tags as tag}
				<Tag color="var(--pfl-cloud-quiz)" alternative>
					{tag}
				</Tag>
			{/each}
		</div>

		<p class="text-inverted text-lg w-full max-lg:text-base">
			Cloud Quiz Generator is an educational tool crafted to bolster your understanding of Cloud
			technology. Through meticulously curated quizzes, delve into the intricacies of Cloud
			computing at your own pace.
		</p>

		<div class="flex items-center justify-between w-full mt-auto">
			<LG mono className="text-cloudQuiz h-6 w-fit" />

			<a
				href="https://cloud-quiz-generator.firebaseapp.com"
				target="_blank"
				class="text-cloudQuiz flex items-center gap-2 font-medium hover:translate-x-[0.25rem] transition-all text-right"
			>
				Check it out!
				<div class="size-4">
					<Chevron className="text-cloudQuiz" />
				</div>
			</a>
		</div>
	</div>
</div>
