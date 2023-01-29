<h1 class="text-xl">// Travel & Hotels</h1>

<h2 class="text-xl mt-4">Travel Information</h2>

<p class="font-normal mt-8">
	Here is an overview of hotels located near the ceremony venue. Due to high season, we were
	unfortunately not able to reserve rooms for our guests. We therefore encourage you to book your
	room as soon as possible directly with the hotels. Thank you :)
</p>

<div class="mt-8 py-4">
    {#each hotels as hotel}
    <div class="mt-4">
        <h3 class="text-normal font-bold">{hotel.title}</h3>    
        <h3 class="text-normal">{hotel.url}</h3>    
        <h3 class="text-normal">{hotel.address}</h3>    
    </div>
{/each}

</div>


<script>
    const hotels = [
        {
            'title' : 'Gästehaus Hubertus Hotel Garni ',
            'url': 'www.hubertus-schliersee.de',
            'address' : 'Bayrischzeller Straße 8/ 83727 Schliersee '
        },
        {
            'title' : 's ́Quartier am Schliersee',
            'url': 'www.quartier-am-schliersee.de',
            'address' : 'Fischhauser Str. 1a/ 83727 Schliersee'
        },
        {
            'title' : 'Pension „Beim Melchern“',
            'url': 'www.beim-melchern.de',
            'address' : 'Achau 4/ 83730 Fischbachau / Hundham'
        },
        {
            'title' : 'Hotel Terofal',
            'url': 'www.hotelterofal.de',
            'address' : 'Xaver Terofal Platz 2 / 83727 Schliersee'
        },
        {
            'title' : 'Hotel Tannerhof',
            'url': 'www.natur-hotel-tannerhof.de',
            'address' : 'Tannerhofstrasse 32 / 83735 Bayrischzell'
        },
        {
            'title' : 'Hotel Alpenrose Bayrischzell',
            'url': 'www.bayrischzell-alpenrose.de',
            'address' : 'Schlierseer Strasse 6 / 83735 Bayrischzell'
        },
        {
            'title' : 'Hotel Aurachhof',
            'url': 'www.aurachhof.de',
            'address' : 'Bahnhofstrasse 4/ 83730 Fischbachau –Stauden'
        },
        {
            'title' : 'Gästehaus Sigrid',
            'url': 'www.gaestehaus-sigrid.de',
            'address' : 'Breitenbach 10/ 83727 Schliersee'
        },
        {
            'title' : 'Hotel Karma Bavaria',
            'url': 'www.karmagroup.com',
            'address' : 'Kirchbichlweg 18/ 83727 Schliersee'
        },
        {
            'title' : 'Hotel Bayerischer Hof',
            'url': 'www.bayerischerhof-online.de',
            'address' : 'Oskar-von-Miller-Str. 2-4/ 83714 Miesbach'
        },
        {
            'title' : 'Gasthof Hocheck',
            'url': '',
            'address' : 'Hocheckstrasse 1 / 83730 Fischbachau'
        },
        {
            'title' : 'Seehotel Schlierseer Hof',
            'url': '',
            'address' : 'Seestrasse 21/ 83727 Schliersee'
        },
        {
            'title' : 'Ferienwohnung Klepp',
            'url': 'www.ferienwohnung-klepp.de',
            'address' : 'Krugalmweg 12/ 83730 Fischbachau'
        },
        {
            'title' : 'Arabella Alpenhotel am Spitzingsee',
            'url': 'www.arabella-alpenhotel.com',
            'address' : 'Seeweg 7 / 83727 Spitzingsee'
        }
    ]
</script>