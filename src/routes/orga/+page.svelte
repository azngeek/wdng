<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';
	import {t, locale} from '$lib/i18n';
</script>

<h2 class="text-2xl mt-4">{$t('agenda.header')}</h2>

<article class="prose max-w-screen-lg mt-8">

	<div class="container mx-auto mt-8">

		<div class="border-2-2 border-opacity-20 border" style="left: 50%" />


        <!-- 14:00 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">14:00 Ankunft Gäste</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                            <li>Empfang: Bosco, Olga, Lara, Constanze</li>
                            <li>Sicherstellen, dass Sebi und Amandine smalltalken können.</li>
                            <li>Gäste über Ablagemöglichkeiten für Garderobe informieren</li>
                            <li>Gäste sollen um spätestens 14:25 Platz nehmen</li>
                    </p>
                </div>
            </div>
        </div>

         <!-- 14:30 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">14:30 - freie Trauung</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                            <li>Iris beginnt pünktlich mit der Rede</li>
                            <li>Sicherstellen, dass Emilie das Eheversprechen auf Französisch verteilt hat</li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 15:30 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">15:30 - Hochzeitsempfang</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Hochzeitsempfang mit Drinks und Fingerfood (Museumsbrot/ Champagne/ Wein/ Wasser/ Kaffee/Eis)</li>
                        <li>Start Live Bayerische Musik</li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 16:30 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">16:30 - 17:00 Photoshooting</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Jeweiligen Teams organisieren Fotoshootings</li>
                        <li>Insgesamt 9 Gruppen - Straffes Timing, da die nächste Aktivität um 17:15 ist!</li>
                        <li><a href="https://docs.google.com/spreadsheets/d/1Oo1gSEOYWDqbQ42FuM-gVahn0Khc8Qu-DVBcK_z3z6M/edit#gid=0">Link zur Tabelle</a></li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 17:00 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">17:00 - Box mit Geld leeren</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Box mit Geld ins Sebis Auto bringen und leeren</li>
                        <li>Box zurück an den Platz bringen.</li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 17:15 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">17:15 - Start Aktivität</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Achtung: Man kann NUR Bierverkostung ODER die Museumstour machen. Der Text auf Deutsch ist falsch.</li>
                    </p>
                </div>
            </div>
        </div>

         <!-- 18:00 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">18:00 - Fotos Sebi und Amandine</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Sicherstellen, dass Sebi und Amandine ihre Paarbilder machen :)</li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 18:15 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">18:15 - Ende Aktivität</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Nach dem Ende der Aktivität sollen die Gäste in die Tenne geführt werden.</li>
                        <li>Aufgabe muss an das gesamte Orga-Team verteilt werden, da dies zeitkritisch ist.</li>
                    </p>
                </div>
            </div>
        </div>

         <!-- 18:40 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">18:40 - Brautpaar kommt</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Sebi und Amandine kommen in die Tenne</li>
                        <li>Spätestens jetzt sitzen alle Gäste</li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 19:00 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">19:00 - Hochzeitsdinner</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Eröffnungsrede</li>
                        <li>Beginn Hochzeitsdinner</li>
                    </p>
                </div>
            </div>
        </div>

         <!-- 19:45 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">19:45 - Zwischengang</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Weitere Reden möglich</li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 20:45 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">20:45 - Hauptgang</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Weitere Reden möglich</li>
                    </p>
                </div>
            </div>
        </div>

         <!-- 21:30 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">21:30 - Hochzeitskuchen</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Mit der Band und der Küche soll der Kuchen zeitnah serviert werden</li>
                        <li>Dessert-Buffet wird eröffnet</li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 22:00 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">22:00 - Long-Drinks</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Party!</li>
                    </p>
                </div>
            </div>
        </div>

        <!-- 24:00 -->
        <div class="mb-8 mt-8 md:flex md:justify-between items-center">
            <div class="grid grid-cols-12 shadow md:px-6 md:py-2 w-full">
                <div class="col-span-9 md:col-span-10 w-full">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">24:00 - Midnight-Snacks</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        <li>Ein Mitternachtssnack steht zur Stärkung bereit</li>
                    </p>
                </div>
            </div>
        </div>



	</div>
</article>
