<script>
    import { goto } from "$app/navigation";
    let projects = [];

    projects.push({
        url: "https://annartworks.it",
        image: "/images/projects/annart1.png",
        title: "Anna.rt",
        description:
            "Anna.rt is a website for a young artist. It's a simple website with a gallery and a contact form.\n It has a backend to manage the gallery and the messages from the contact form.\n It's built with SvelteKit and Pocketbase and hosted on cloudflare pages, and the db is hosted on my server with scheduled backups.",
        content: null,
    });

    projects.push({
        url: "",
        image: "/images/projects/olimpiadi1.png",
        title: "Olimpiadi Frass",
        description:
            "I've created this web app to replace a convoluted excel document, to manage the activities of my parish.\n It's built with SvelteKit and TailwindCSS and hosted on my server with scheduled backups. It has all the functions to manage the activities and games of the parish, with point systems and statistics.",
        content: null,
    });

    projects.push({
        url: "https://myapollo.it/my-selfhosted-stuff/",
        image: "",
        title: "My homelab",
        content: null,

        description:
            "I strongly believe in owning and protecting as much of my personal data as possible, so I invested some time to learn about self-hosting, and built my home server to host all of my data. you can learn more about my homelab on my blog.",
    });

    projects.push({
        url: "https://cn-scwedding.website",
        image: "/images/projects/cn-scwedding1.png",
        title: "Wedding website",
        content: null,
        description:
            "A close friend of mine asked me to create a website for it's wedding in Sicily. He wanted something to guide the guests in it's city and a place to collect all the photos and videos of the day. It's made with Svelte and hosted on Cloudflare Pages. It has a backend with Pocketbase to manage images and videos uploads from guests.",
    });

    projects.push({
        url: "https://github.com/Bodyes26/filepond-sveltekit",
        image: "",
        title: "Filepond - Sveltekit",
        content: null,

        description:
            "For the project above I needed a way to upload files to my server, so I created a SvelteKit project for Filepond, a file upload library. It uses SvelteKit server pages to save the file where you want it. It's available on github.",
    });
</script>

<div class="w-screen min-h-screen p-4">
    <h1 class="text-center text-6xl mt-12">My projects</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 mt-4">
        {#each projects as project, i}
            <div class="card shadow-lg">
                <div class="tools">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        role="button"
                        tabindex="-1"
                        class="circle"
                        on:click={() => {
                            projects = projects.filter(
                                (p, index) => index != i
                            );
                        }}
                    >
                        <span class="red box" />
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        role="button"
                        tabindex="-1"
                        class="circle"
                        on:click={() => {
                            project.content.classList.toggle("nascondi");
                        }}
                    >
                        <span class="yellow box" />
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        class="circle"
                        role="button"
                        tabindex="-1"
                        on:click={() => {
                            goto(project.url);
                        }}
                    >
                        <span class="green box" />
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        role="button"
                        tabindex="-1"
                        class="text-lg ml-4"
                        on:click={() => {
                            project.content.classList.remove("nascondi");
                        }}
                    >
                        {project.title}
                    </div>
                </div>
                <div class="card__content" bind:this={project.content}>
                    {#if project.image == ""}
                        <div />
                    {:else}
                        <img
                            src={project.image}
                            alt={project.title}
                            class="rounded-lg shadow-lg mb-4"
                        />
                    {/if}

                    <p>{project.description}</p>
                    <a href={project.url} class="link">{project.url}</a>
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="nascondi hidden" />

<style>
    .card {
        height: min-content;
        margin: 0 auto 1rem auto;
        background-color: #fbfbfb;
        border-radius: 12px;
        z-index: 1;
    }
    .card__content {
        padding: 1rem;
        max-height: 500px;
        transition: max-height 0.5s ease, padding 0.5s ease;
        overflow: hidden;
        display: grid;
    }

    .tools {
        display: flex;
        align-items: center;
        padding: 9px;
    }

    .circle {
        padding: 0 3px;
        margin-top: 5px;
    }

    .box {
        display: inline-block;
        align-items: center;
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    .red {
        background-color: #ff605c;
        position: relative;
    }

    .red::after {
        content: "";
        width: 100%;
        padding-bottom: 100%;
        border-radius: 50%;
        position: absolute;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGlkPSJNZW51IC8gQ2xvc2VfU00iPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMTYgMTZMMTIgMTJNMTIgMTJMOCA4TTEyIDEyTDE2IDhNMTIgMTJMOCAxNiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPg==");
        inset: 0;
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .yellow::after {
        content: "";
        width: 100%;
        padding-bottom: 100%;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        position: absolute;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
        opacity: 0;
        background-repeat: no-repeat;
        transition: opacity 0.5s ease;
    }

    .green::after {
        content: "";
        width: 100%;
        padding-bottom: 100%;
        border-radius: 50%;
        position: absolute;
        left: 2px;
        top: 2px;
        background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAxMi44NTE3MDMsMS4xNDg0NCBDIDEyLjc1Mjg0MywxLjA0OTQ0IDEyLjYzNTU2MywxIDEyLjUwMDE2NCwxIEwgOS4wMDAxMTE5LDEgYyAtMC4xMzUzOTksMCAtMC4yNTI0ODMsMC4wNDk1IC0wLjM1MTU0LDAuMTQ4NDQgLTAuMDk4ODYsMC4wOTkgLTAuMTQ4MzQ0LDAuMjE2MTQgLTAuMTQ4MzQ0LDAuMzUxNTQgMCwwLjEzNTQgMC4wNDk0OCwwLjI1MjY4IDAuMTQ4MzQ0LDAuMzUxNTQgbCAxLjEyNDkwOCwxLjEyNSAtMi41OTM3NzksMi41OTM3OCBjIC0wLjA1MjA3LDAuMDUyMiAtMC4wNzgxNSwwLjExMiAtMC4wNzgxNSwwLjE3OTcgMCwwLjA2NzcgMC4wMjYwOCwwLjEyNzYzIDAuMDc4MTUsMC4xNzk3IGwgMC44OTA2NDQsMC44OTA2NSBjIDAuMDUyMDcsMC4wNTIxIDAuMTExOTA1LDAuMDc4MSAwLjE3OTcwMSwwLjA3ODEgMC4wNjc3LDAgMC4xMjc1MzYsLTAuMDI2IDAuMTc5NjA1LC0wLjA3ODEgbCAyLjU5Mzg3NTEsLTIuNTkzNzggMS4xMjQ4MTEsMS4xMjQ5MSBjIDAuMDk5MDYsMC4wOTkgMC4yMTYzMzIsMC4xNDg1MyAwLjM1MTczMSwwLjE0ODUzIDAuMTM1Mzk5LDAgMC4yNTI1NzksLTAuMDQ5NiAwLjM1MTUzOSwtMC4xNDg1MyAwLjA5ODg3LC0wLjA5ODkgMC4xNDgzNDUsLTAuMjE2MTQgMC4xNDgzNDUsLTAuMzUxNTQgbCAwLC0zLjUwMDA2IGMgOS42ZS01LC0wLjEzNTQ5IC0wLjA0OTEsLTAuMjUyNDggLTAuMTQ4MjQ5LC0wLjM1MTQ0IHogTSA1LjkyOTg0NjksNy4xNzk1NiBjIC0wLjA1MjA3LC0wLjA1MjEgLTAuMTEyMDAxLC0wLjA3ODEgLTAuMTc5NzAxLC0wLjA3ODEgLTAuMDY3NywwIC0wLjEyNzYzMiwwLjAyNiAtMC4xNzk3MDEsMC4wNzgxIGwgLTIuNTkzNzc5LDIuNTkzNzggLTEuMTI1MDAzLC0xLjEyNTEgYyAtMC4wOTg5NiwtMC4wOTg4IC0wLjIxNjA0NCwtMC4xNDgzNSAtMC4zNTE1MzksLTAuMTQ4MzUgLTAuMTM1NDk1LDAgLTAuMjUyNjc1LDAuMDQ5NiAtMC4zNTE2MzUsMC4xNDgzNSAtMC4wOTg5NiwwLjA5OSAtMC4xNDg0NDEsMC4yMTYzMyAtMC4xNDg0NDEsMC4zNTE3MyBsIDAsMy41MDAwNSBjIDAsMC4xMzU0IDAuMDQ5NDgsMC4yNTI1OCAwLjE0ODQ0MSwwLjM1MTU0IEMgMS4yNDc1NDg5LDEyLjk1MDQ2IDEuMzY0NzI0OSwxMyAxLjUwMDEyMzksMTMgbCAzLjUwMDA1MiwwIGMgMC4xMzUzOTksMCAwLjI1MjU3OSwtMC4wNDk2IDAuMzUxNTM5LC0wLjE0ODQ0IDAuMDk4OTYsLTAuMDk5IDAuMTQ4NDQxLC0wLjIxNjE0IDAuMTQ4NDQxLC0wLjM1MTU0IDAsLTAuMTM1NCAtMC4wNDk0OCwtMC4yNTI2OCAtMC4xNDg0NDEsLTAuMzUxNzMgTCA0LjIyNjcxMTksMTEuMDIzNDggNi44MjA0OTA5LDguNDI5NiBjIDAuMDUyMDcsLTAuMDUyMSAwLjA3ODA1LC0wLjExMTkgMC4wNzgwNSwtMC4xNzk3IDAsLTAuMDY3NyAtMC4wMjYwOCwtMC4xMjc1MyAtMC4wNzgwNSwtMC4xNzk3IEwgNS45Mjk4NDY5LDcuMTc5NTYgWiIvPjwvc3ZnPg==");
        opacity: 0;
        background-repeat: no-repeat;
        transition: opacity 0.5s ease;
    }

    .yellow:hover::after {
        opacity: 1;
    }

    .red:hover::after {
        opacity: 1;
    }

    .green:hover::after {
        opacity: 1;
    }
    .yellow {
        background-color: #ffbd44;
        position: relative;
        cursor: pointer;
    }

    .green {
        background-color: #00ca4e;
        position: relative;
    }

    .nascondi {
        max-height: 0;
        padding: 0;
    }
</style>
