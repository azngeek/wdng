<script>
	import Divider from "$lib/components/Divider.svelte";
    import {t, locale} from '$lib/i18n';
</script>


<article class="prose max-w-screen-lg mt-8">

	<h2>{$t('best_man_maid_of_honor.intro')}</h2>

    <h3>{$t('best_man_maid_of_honor.maid.header')}</h3>
    <p>{$t('best_man_maid_of_honor.maid.paragraph_1')}</p>
    <p>{$t('best_man_maid_of_honor.maid.paragraph_2')}</p>
    <p>{$t('best_man_maid_of_honor.maid.paragraph_3')}</p>
    <p>{$t('best_man_maid_of_honor.maid.paragraph_4')}</p>
    <p>{$t('best_man_maid_of_honor.maid.paragraph_5')}</p>
    <p>{$t('best_man_maid_of_honor.maid.paragraph_6')}</p>
    <p>{$t('best_man_maid_of_honor.maid.paragraph_7')}</p>
    <p>{$t('best_man_maid_of_honor.maid.paragraph_8')}</p>

    <section class="overflow-hidden text-neutral-700">
      <div class="container mx-auto px-5 py-2 ">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-2/4 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full object-cover object-center"
                src="emilie1_cropped.jpg" />
            </div>
          </div>
          <div class="flex w-1/4 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full object-cover object-center"
                src="emilie4.jpeg" />
            </div>
          </div>
          <div class="flex w-1/4 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full  object-cover object-center"
                src="emilie2.jpg" />
            </div>
          </div>
         
        </div>
      </div>
    </section>
   
    <div class="mt-8">&nbsp;</div>

    <h3>{$t('best_man_maid_of_honor.man.header')}</h3>
    <p>{$t('best_man_maid_of_honor.man.paragraph_1')}</p>
    <p>{$t('best_man_maid_of_honor.man.paragraph_2')}</p>
    <p>{$t('best_man_maid_of_honor.man.paragraph_3')}</p>
    <p>{$t('best_man_maid_of_honor.man.paragraph_4')}</p>
    <p>{$t('best_man_maid_of_honor.man.paragraph_5')}</p>
    <p>{$t('best_man_maid_of_honor.man.paragraph_6')}</p>

    <div class="mt-8 text-center prose prose-img:rounded-xl max-w-screen-lg">
		<img 
		class="md:w-5/5 mx-auto"
		src="/dubai.jpeg"
		alt="wasmeier_path"
		/>
		<div class="md:w-4/5 mx-auto text-right text-xs mt-0">
		  <span></span>
		</div>
	</div>
	
</article>