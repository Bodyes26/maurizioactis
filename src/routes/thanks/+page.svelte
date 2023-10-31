<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let counter = 5;
    onMount(() => {
        setInterval(() => {
            counter--;
            if (counter === 0) {
                goto("/");
            }
        }, 1000);
    });
</script>

<div id="wrapper">
    <h1>thanks!</h1>
    <span>I'll reach out ASAP</span>
    <div>
        <span>Going back to </span><a href="/">maurizioactis.it</a>
        <span>in {counter} seconds</span>
    </div>
</div>

<style>
    #wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    #wrapper > h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
    }

    #wrapper > div {
        margin-top: 2rem;
    }
</style>
