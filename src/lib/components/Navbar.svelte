<script lang="ts">
	import { Button, Navbar, NavBrand, NavHamburger, NavLi, NavUl, Heading, Select, Dropdown, DropdownItem, ChevronDown, SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import { auth, signOut } from '$lib/Firebase';
	import authStore from '$lib/authStore';


	let userLoggedIn: boolean = false;
	console.log(authStore);
	authStore.subscribe(({ isLoggedIn, user }) => {
		if (isLoggedIn) {
			console.log(user);
			userLoggedIn = true;
		}
	});

	async function redirectToLogin() {
		await goto('/login');
	}

	function logout() {
		alert('logout');
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	}

    let countries = [
    {value:"us", name: "United States"},
    {value:"ca", name: "Canada"},
    {value:"fr", name: "France"},
  ]
  let states = [
    {value:"CA", name:"California"},
    {value:"TX", name:"Texas"},
    {value:"WH", name:"Washinghton"},
    {value:"FL", name:"Florida"},
    {value:"VG", name:"Virginia"},
    {value:"GE", name:"Georgia"},
    {value:"MI", name:"Michigan"}
  ]

  let visibility = false;
    function toggleMenu() {
        visibility = !visibility;
    }

    async function goTo() {
        await goto('/party');
        toggleMenu();
    }
</script>


<div class="bg-black md:mt-5 sticky top-0">
    <div class="hidden md:flex flex-row-reverse text-black">
        <select name="cars" id="cars">
            <option value="de">DE</option>
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
    </div>
   <div class="text-center text-white text-2xl mt-0 md:mt-0 text-white flex py-2 px-4 md:p-4" style="font-family: 'Cormorant Garamond', serif;">
        <div class="flex-auto text-left md:text-center p-1" >
            Amandine & Sebastian
        </div>
    
        <div class="md:hidden text-right flex-auto text-black text-white">
                <button value="b" class="text-white" on:click={toggleMenu}>☰</button>
        </div>
    </div>
    <ul class="hidden md:flex text-white justify-center mt-0">
        <li class="flex-initial w-32 h-14 bg-green-100 text-center pt-4">Date & Location</li>
        <li class="flex-initial w-32 h-14 bg-green-200 text-center pt-4">Flights & Hotels</li>
        <li class="flex-initial w-32 h-14 bg-green-300 text-center pt-4">Visit Bavaria</li>
        <li class="flex-initial w-32 h-14 bg-green-400 text-center pt-4">RSVP</li>
        <li class="flex-initial w-32 h-14 bg-green-500 text-center pt-4">Questions</li>
        <li class="flex-initial w-32 h-14 bg-green-500 text-center pt-4">Timeline</li>
        <li class="flex-initial w-32 h-14 bg-green-500 text-center pt-4"><a href="/party" on:click={toggleMenu}>Wedding Party</a></li>
    </ul>
</div>

{#if visibility}
<div class="md:hidden fixed top-0 bg-black text-white z-1 overflow-auto py-3 px-4 mt-0 text-2xl h-full w-full" style="font-family: 'Cormorant Garamond', serif;">
    <div class="md:hidden text-right flex-auto text-black text-white">
        <button value="b" class="text-white" on:click={toggleMenu}>X</button>
    </div>
    <div class="container mx-auto content-center pt-20">
        <div class="text-center mt-2">Date & Location</div>
        <div class="text-center mt-2">Flights & Hotel</div>
        <div class="text-center mt-2">Visit Bavaria</div>
        <div class="text-center mt-2">RSVP</div>
        <div class="text-center mt-2">Questions</div>
        <div class="text-center mt-2">Timeline</div>
        <div class="text-center mt-2"><button on:click={goTo}>Wedding Party</div>
      </div>

</div>
{/if}



<style>
    
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    
</style>