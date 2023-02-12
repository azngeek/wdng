<h1 class="text-xl">// Travel & Hotels</h1>

<h2 class="text-xl mt-4">Travel Information</h2>

<p class="font-normal mt-8">
	{$t('travel_hotels.paragraph_1')}
</p>

<p class="font-normal mt-8">
	{$t('travel_hotels.paragraph_2')}
</p>

<div class="grid grid-cols-8">
    <div id="map" class="h-96 md:h-screen col-span-8 md:col-span-5 mt-4 overflow-auto"  />
    <div class="h-96  md:h-screen col-span-8 md:col-span-3 bg-white mt-4 p-4 overflow-auto z-10"  >
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

<p class="font-normal mt-8">
	Here is an overview of hotels located near the ceremony venue. Due to high season, we were
	unfortunately not able to reserve rooms for our guests. We therefore encourage you to book your
	room as soon as possible directly with the hotels. Thank you :)
</p>

<p class="font-normal mt-8">
	Here is an overview of hotels located near the ceremony venue. Due to high season, we were
	unfortunately not able to reserve rooms for our guests. We therefore encourage you to book your
	room as soon as possible directly with the hotels. Thank you :)
</p>



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
        {
            'title' : 'Gästehaus Sigrid',
            'url': 'www.gaestehaus-sigrid.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipM1vG3IiU_KHV7gigz-I4vsL5lRKZY5hnj1dP8U=w408-h408-k-no',
            'gmapsLink': 'https://goo.gl/maps/1dJ8xiEWtAeBR3Bn9',
            'loc': { lat: 47.734718, lng: 11.8566212 },
            'address' : 'Breitenbach 10/ 83727 Schliersee'
        },
             
        {
            'title' : 'Hotel Karma Bavaria',
            'url': 'www.karmagroup.com',
            'image': 'https://lh3.googleusercontent.com/gps-proxy/ALm4wwkC2eqxp0ZdzXALdnQ8cc-STYUGkmOmkSmL26nMl_KzmMCJMvQzZAUTOU4BJ4ZTTVpWLGwoRVXQ4KmuApBwoPTC9oRnyqD9Y-PMUXGtz-ygyLm92UWLPdp_5Dw_hvrMGawHMaeQHxXIfeBNchvRzc1g--jCdH_zmD2RspznKKjWEcRTJ143bizrUw=w408-h275-k-no',
            'gmapsLink': 'https://goo.gl/maps/SMHbBdRuCTBuaPHB9',
            'loc': { lat: 47.7433015, lng: 11.8494716 },
            'address' : 'Kirchbichlweg 18/ 83727 Schliersee'
        },
        {
            'title' : 'Hotel Bayerischer Hof',
            'url': 'www.bayerischerhof-online.de',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipPlCEeAP0KoQipYPsfGizVWQGXLY4u5tTmAOGTS=w408-h272-k-no',
            'gmapsLink': 'https://goo.gl/maps/BxuDzfjuQbYsXUFWA',
            'loc': { lat: 47.7940219, lng: 11.8385109 },
            'address' : 'Oskar-von-Miller-Str. 2-4/ 83714 Miesbach'
        },

        {
            'title' : 'Gasthof Hocheck',
            'url': '',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipNiHbbD99QvCScRQAoi5c0fsEV88H-DkI9TLDo=w426-h240-k-no',
            'gmapsLink': 'https://goo.gl/maps/PHZ7k81ZLRtdPZ8V9',
            'loc': { lat: 47.7724242, lng: 11.9752632 },
            'address' : 'Hocheckstrasse 1 / 83730 Fischbachau'
        },

        {
            'title' : 'Seehotel Schlierseer Hof',
            'url': '',
            'image': 'https://lh5.googleusercontent.com/p/AF1QipOLj1Ay_RvvrqJ7WLaAaQdd1KfIk_30YNhUvBP4=w425-h240-k-no',
            'gmapsLink': 'https://goo.gl/maps/HV55KY799fTC6ykd8',
            'loc': { lat: 47.7317105, lng: 11.8635859 },
            'address' : 'Seestrasse 21/ 83727 Schliersee'
        },

        {
            'title' : 'Arabella Alpenhotel am Spitzingsee',
            'url': 'www.arabella-alpenhotel.com',
            'image': 'https://media-cdn.holidaycheck.com/w_768,h_432,c_fill,q_auto,f_auto/ugc/images/6c274d5d-0f50-4ceb-8ef9-a99328f71862',
            'gmapsLink': 'https://goo.gl/maps/taAwM8XugWTquX1U9',
            'loc': { lat: 47.6623269, lng: 11.8854182 },
            'address' : 'Seeweg 7 / 83727 Spitzingsee'
        }
    ]

    import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';
    import {t} from '$lib/i18n';

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
    "blbla" +
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