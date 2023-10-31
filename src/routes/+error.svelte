<script>
    import { page } from "$app/stores";
</script>

<div class="w-screen h-screen flex items-center justify-center flex-col gap-12">
    <h1 class="text-9xl bold">{$page.status}</h1>
    <h1 class="text-4xl text-center mt-4">
        {#if $page.status === 404}
            Page {$page.error.message}
        {/if}
    </h1>

    <a href="/" class="text-2xl text-center mt-4 link">Go back to home</a>
</div>

<style>
    .bold {
        font-family: "AvenirBold", sans-serif;
    }
</style>
