<script>
import { Form, TextInput, PasswordInput, Button } from 'carbon-components-svelte';
import { createEventDispatcher, onMount } from "svelte";
import { createUserWithEmailAndPassword, updateProfile } from 'Firebase/auth';
import { goto } from '$app/navigation';
    

    let username, email, password;

    async function signUp() {
        try {
            let user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(user.user, { displayName: username });
            await goto('/admin');
        } catch (e) {
            console.log('error from creating user', e);
        }
    }

 

</script>

<h1>Auths</h1>


<div class="form">
    <Form>
        <TextInput bind:value={username} labelText="Username" placeholder="Enter your username" name="username"/>
        <div class="space" />
        <TextInput bind:value={email} labelText="Email address" placeholder="Enter your email" type="email" name="email" />
        <div class="space" />
        <PasswordInput
            bind:value={password}
            tooltipAlignment="start"
            tooltipPosition="left"
            labelText="Password"
            placeholder="Enter password"
            name="password"
        />
        <div class="space" />
        <Button size="small" on:click={signUp}>Sign Up</Button>
    </Form>
</div>
<style>
    .form {
        width: 400px;
    }
    .form .space {
        margin: .6em 0;
    }
</style>
