<h1 class="text-xl">// Travel & Hotels</h1>

<h2 class="text-xl mt-4">Travel Information</h2>

<p class="font-normal mt-8">
	Here is an overview of hotels located near the ceremony venue. Due to high season, we were
	unfortunately not able to reserve rooms for our guests. We therefore encourage you to book your
	room as soon as possible directly with the hotels. Thank you :)
</p>

<p class="font-normal mt-8">Also please research on desktop for best experience.</p>

<div class="grid grid-cols-8">
    <div id="map" class="h-96 md:h-screen col-span-8 md:col-span-5 mt-4 overflow-auto"  />
    <div class="h-96  md:h-screen col-span-8 md:col-span-3 mt-4 bg-red-200 p-4 overflow-auto z-10"  >
        {#each hotels as hotel, index}
        <div class="mt-4">
            <img src="{hotel.image}" class="w-54" />
            <h3 class="text-normal font-bold">{index + 1} - {hotel.title}</h3>    
            <h3 class="text-normal">{hotel.url}</h3>    
            <a href="{hotel.gmapsLink}" target="_blank">Google Link</a>  
            <h3 class="text-normal">{hotel.address}</h3> 
            <p><a on:click={() => {
                locationClicked(index)
            }}>Hier clicken</a></p>
        </div>
    {/each}
    </div>
</div>



<script lang="ts">
    const hotels = [
        {
            'title' : 'Gästehaus Hubertus Hotel Garni',
            'url': 'www.hubertus-schliersee.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipMFCl_0ll7Qayc-NzId-nVUi41jEDW4KiWjzNfa=w408-h306-k-no',
            'gmapsLink': 'https://goo.gl/maps/SuKwrAwiJyHzG8gdA',
            'address' : 'Bayrischzeller Straße 8/ 83727 Schliersee ',
            'loc': { lat: 47.7028556, lng: 11.8841472 }
        },
        {
            'title' : 's ́Quartier am Schliersee',
            'url': 'www.quartier-am-schliersee.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipOabYCqs3EaEm0wXfXvBOuViFCzLLY23kvbDTJw=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/LMnpLk3BdMYuGwRp9',
            'address' : 'Fischhauser Str. 1a/ 83727 Schliersee',
            'loc': { lat: 47.7113023, lng: 11.8663592 }
        },
        {
            'title' : 'Hotel Terofal',
            'url': 'www.hotelterofal.de',
            'address' : 'Xaver Terofal Platz 2 / 83727 Schliersee',
            'image': 'https://cdn.worldota.net/t/1024x768/content/15/37/1537e2f477ab37b3197494676809cad0a4864323.jpeg',
            'gmapsLink': 'https://goo.gl/maps/rjXWo96HHHnMX2UP7',
            'loc': { lat: 47.7331732, lng: 11.8640432 }
        },
        {
            'title' : 'Hotel Tannerhof',
            'url': 'www.natur-hotel-tannerhof.de',
            'address' : 'Tannerhofstrasse 32 / 83735 Bayrischzell',
            'image': 'https://lh3.googleusercontent.com/gps-proxy/ALm4wwkj3F7ajQAXTQ5bsl10RAK5Vm8JR1VN_Ht6NVXrje3smpBpvg6ee1blOTljXRW1tswN8ynSvf1Ba-VeHF2Yk8yvIlfdw1MVswc0qDGvGd3XmmU3X00kRzL2s4ERgLUiim2n_ex_1j-eTcN64fVHxbv_db_n9Cx25B7pR8G_GHriU8jmt_XVdvK1=w408-h272-k-no',
            'gmapsLink': 'https://goo.gl/maps/y8Rg9ceEEdF7effE7',
            'loc': { lat: 47.6730785, lng: 12.0205728 }
        },
        {
            'title' : 'Hotel Alpenrose Bayrischzell',
            'url': 'www.bayrischzell-alpenrose.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipN7A1tsAk2haxJPJxKslNwk2xd80W-umpROtMdf=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/vHBfS9wNyBP8dDsy6',
            'address' : 'Schlierseer Strasse 6 / 83735 Bayrischzell',
            'loc': { lat: 47.6745466, lng: 12.0103703 }
        },
      
        {
            'title' : 'Hotel Aurachhof',
            'url': 'www.aurachhof.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipMHTL0Me9RsG3Oyq3vZeDJqyq5mqo6y0w4i87ON=w408-h306-k-no',
            'gmapsLink': 'https://goo.gl/maps/ehh1wrKesFsD1mcc8',
            'loc': { lat: 47.638597, lng: 12.0632335 },
            'address' : 'Bahnhofstrasse 4/ 83730 Fischbachau –Stauden'
        },
          // hier
        {
            'title' : 'Gästehaus Sigrid',
            'url': 'www.gaestehaus-sigrid.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipN7A1tsAk2haxJPJxKslNwk2xd80W-umpROtMdf=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/vHBfS9wNyBP8dDsy6',
            'loc': { lat: 47.6745466, lng: 12.0103703 },
            'address' : 'Breitenbach 10/ 83727 Schliersee'
        },
        {
            'title' : 'Hotel Karma Bavaria',
            'url': 'www.karmagroup.com',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipN7A1tsAk2haxJPJxKslNwk2xd80W-umpROtMdf=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/vHBfS9wNyBP8dDsy6',
            'loc': { lat: 47.6745466, lng: 12.0103703 },
            'address' : 'Kirchbichlweg 18/ 83727 Schliersee'
        },
        {
            'title' : 'Hotel Bayerischer Hof',
            'url': 'www.bayerischerhof-online.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipN7A1tsAk2haxJPJxKslNwk2xd80W-umpROtMdf=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/vHBfS9wNyBP8dDsy6',
            'loc': { lat: 47.6745466, lng: 12.0103703 },
            'address' : 'Oskar-von-Miller-Str. 2-4/ 83714 Miesbach'
        },
        {
            'title' : 'Gasthof Hocheck',
            'url': '',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipN7A1tsAk2haxJPJxKslNwk2xd80W-umpROtMdf=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/vHBfS9wNyBP8dDsy6',
            'loc': { lat: 47.6745466, lng: 12.0103703 },
            'address' : 'Hocheckstrasse 1 / 83730 Fischbachau'
        },
        {
            'title' : 'Seehotel Schlierseer Hof',
            'url': '',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipN7A1tsAk2haxJPJxKslNwk2xd80W-umpROtMdf=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/vHBfS9wNyBP8dDsy6',
            'loc': { lat: 47.6745466, lng: 12.0103703 },
            'address' : 'Seestrasse 21/ 83727 Schliersee'
        },
        {
            'title' : 'Ferienwohnung Klepp',
            'url': 'www.ferienwohnung-klepp.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipN7A1tsAk2haxJPJxKslNwk2xd80W-umpROtMdf=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/vHBfS9wNyBP8dDsy6',
            'loc': { lat: 47.6745466, lng: 12.0103703 },
            'address' : 'Krugalmweg 12/ 83730 Fischbachau'
        },
        {
            'title' : 'Arabella Alpenhotel am Spitzingsee',
            'url': 'www.arabella-alpenhotel.com',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipN7A1tsAk2haxJPJxKslNwk2xd80W-umpROtMdf=w408-h271-k-no',
            'gmapsLink': 'https://goo.gl/maps/vHBfS9wNyBP8dDsy6',
            'loc': { lat: 47.6745466, lng: 12.0103703 },
            'address' : 'Seeweg 7 / 83727 Spitzingsee'
        }
    ]

    import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';

    var markerDict = new Map();

    function locationClicked(index) {
        var marker = markerDict.get(index);
        console.log(marker);
        map.setZoom(12);
        map.setCenter(marker.getPosition() as google.maps.LatLng);
    }

    let map: google.maps.Map;


	onMount(() => {

		const loader = new Loader({
			apiKey: 'AIzaSyDTmK_YB6FWixG9BczztAcaV6WtNZgVatY',
			version: 'weekly'
		});


		var grayStyles = [
			{
				featureType: 'all',
				stylers: [{ saturation: -20 }, { lightness: 30 }]
			}
		];

		loader.load().then(() => {
			const loc = { lat: 47.7063905, lng: 11.8763645 };

			map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
				center: loc,
				zoom: 12,
				styles: grayStyles
			});

            const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

            hotels.forEach((hotel, index) => {
                if(hotel.hasOwnProperty('loc')) {
                    var marker = new google.maps.Marker({
                        position: hotel.loc,
                        map,
                        label: (index + 1).toString(),
                        title: "Hello",
                    });

                    var infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        ariaLabel: "Uluru",
                    });

                    marker.addListener("click", () => {
                        infowindow.open({
                        anchor: marker,
                        map,
                        });
                    });

                    markerDict.set(index, marker);
                    marker.setMap(map);
                }
            });
		});
	});
</script>