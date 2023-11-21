<script>
    import IconaArrowLeft from "../lib/iconaArrowLeft.svelte";
    import IconaArrowRight from "../lib/iconaArrowRight.svelte";
    import { setupViewTransition } from "sveltekit-view-transition";

    const { transition } = setupViewTransition();

    let projects = [],
        backdrop;
    $: projects;

    let project = {
        id: "0",
        url: "https://annartworks.it",
        image: "/images/projects/annart1.png",
        images: [
            "/images/projects/annart1.png",
            "/images/projects/annart2.png",
            "/images/projects/annart3.png",
        ],
        title: "Anna.rt",
        description:
            "Anna.rt is a website for a young artist. It's a simple website with a gallery and a contact form.\n It has a backend to manage the gallery and the messages from the contact form.\n It's built with SvelteKit and Pocketbase and hosted on cloudflare pages, and the db is hosted on my server with scheduled backups.",
        content: null,
        contentFull: null,
        box: null,
        height: null,
        width: null,
        x: null,
        y: null,
        fullscreen: false,
        fullDescription:
            "Anna.rt is a website for a young artist. It's a simple website with a gallery and a contact form.\n It has a backend to manage the gallery and the messages from the contact form.\n It's built with SvelteKit and Pocketbase and hosted on cloudflare pages, and the db is hosted on my server with scheduled backups.\n\n\nDevelopment time: about 2 weeks.\n\n\n\nMost difficult part: the admin page, I didn't had a clear vision on how to set it up, so it was a lot of trial to see what worked.",
    };
    projects.push({
        url: "https://annartworks.it",
        image: "/images/projects/annart1.png",
        images: [
            "/images/projects/annart1.png",
            "/images/projects/annart2.png",
            "/images/projects/annart3.png",
        ],
        title: "Anna.rt",
        description:
            "Anna.rt is a website for a young artist. It's a simple website with a gallery and a contact form.\n It has a backend to manage the gallery and the messages from the contact form.\n It's built with SvelteKit and Pocketbase and hosted on cloudflare pages, and the db is hosted on my server with scheduled backups.",
        content: null,
        contentFull: null,
        box: null,
        height: null,
        width: null,
        x: null,
        y: null,
        fullscreen: false,
        fullDescription:
            "Anna.rt is a website for a young artist. It's a simple website with a gallery and a contact form.\n It has a backend to manage the gallery and the messages from the contact form.\n It's built with SvelteKit and Pocketbase and hosted on cloudflare pages, and the db is hosted on my server with scheduled backups.\n\n\nDevelopment time: about 2 weeks.\n\n\n\nMost difficult part: the admin page, I didn't had a clear vision on how to set it up, so it was a lot of trial to see what worked.",
    });

    projects.push({
        url: "",
        image: "/images/projects/olimpiadi1.png",
        images: [
            "/images/projects/olimpiadi1.png",
            "/images/projects/olimpiadi2.png",
            "/images/projects/olimpiadi3.png",
            "/images/projects/olimpiadi4.png",
        ],
        title: "Olimpiadi Frass",
        description:
            "I've created this web app to replace a convoluted excel document, to manage the activities of my parish.\n It's built with SvelteKit and TailwindCSS and hosted on my server with scheduled backups. It has all the functions to manage the activities and games of the parish, with point systems and statistics.",
        content: null,
        box: null,
        x: null,
        contentFull: null,
        y: null,
        height: null,
        width: null,
        fullscreen: false,
    });

    projects.push({
        url: "https://myapollo.it/my-selfhosted-stuff/",
        image: "",
        title: "My homelab",
        content: null,
        box: null,
        x: null,
        contentFull: null,
        y: null,
        height: null,
        width: null,
        fullscreen: false,

        description:
            "I strongly believe in owning and protecting as much of my personal data as possible, so I invested some time to learn about self-hosting, and built my home server to host all of my data. you can learn more about my homelab on my blog.",
    });

    projects.push({
        url: "https://cn-scwedding.website",
        image: "/images/projects/cn-scwedding1.png",
        images: [
            "/images/projects/cn-scwedding1.png",
            "/images/projects/cn-scwedding2.png",
        ],
        title: "Wedding website",
        content: null,
        box: null,
        x: null,
        contentFull: null,
        y: null,
        height: null,
        width: null,
        fullscreen: false,
        description:
            "A close friend of mine asked me to create a website for it's wedding in Sicily. He wanted something to guide the guests in the city and a place to collect all the photos and videos of the day. It's made with Svelte and hosted on Cloudflare Pages. It has a backend with Pocketbase to manage images and videos uploads from guests.",
    });

    projects.push({
        url: "https://github.com/Bodyes26/filepond-sveltekit",
        image: "",
        title: "Filepond - Sveltekit",
        content: null,
        box: null,
        contentFull: null,
        x: null,
        y: null,
        height: null,
        width: null,
        fullscreen: false,

        description:
            "For the project above I needed a way to upload files to my server, so I created a SvelteKit project for Filepond, a file upload library. It uses SvelteKit server pages to save the file where you want it. It's available on github.",
    });

    function rimuoviTuttoSchermo() {
        projects.forEach((project) => {
            project.fullscreen = false;
            project.box.style.transform = `translate(0px, 0px)`;
            project.box.style.top = 0 + "px";
            project.box.style.left = 0 + "px";
            project.box.style.height = project.height + "px";
            project.box.style.width = project.width + "px";
            project.box.classList.remove("fullscreen");
            project.box.classList.remove("!fixed");
            backdrop.classList.remove("!opacity-100");
            backdrop.classList.remove("!z-10");
            project.contentFull.classList.add("!hidden");
            project.content.classList.remove("!hidden");
            setTimeout(() => {
                project.box.style.transform = "";
                project.box.style.top = "";
                project.box.style.left = "";
                project.box.style.width = "";
                project.box.style.height = "";
            }, 50);
        });
    }

    function toogleFullScreen(project) {
        console.log("toogleFullScreen per progetto", project.title);
        if (project.box.classList.contains("fullscreen")) {
            project.fullscreen = false;
            project.box.style.transform = `translate(0px, 0px)`;
            project.box.style.top = 0 + "px";
            project.box.style.left = 0 + "px";
            project.box.style.height = project.height + "px";
            project.box.style.width = project.width + "px";
            project.box.classList.remove("fullscreen");
            project.box.classList.remove("!fixed");
            backdrop.classList.remove("!opacity-100");
            backdrop.classList.remove("!z-10");
            project.contentFull.classList.add("!hidden");
            project.content.classList.remove("!hidden");
            setTimeout(() => {
                project.box.style.transform = "";
                project.box.style.top = "";
                project.box.style.left = "";
                project.box.style.width = "";
                project.box.style.height = "";
            }, 50);
        } else {
            project.fullscreen = true;
            const rect = project.box.getBoundingClientRect();
            console.log(rect);
            project.box.classList.add("!fixed");
            project.box.style.top = rect.y + "px";
            project.box.style.left = rect.x + "px";
            let finalX = 20 - rect.x;
            let finalY = 20 - rect.y;
            let rectHeight = rect.height;
            let rectWidth = rect.width;
            project.box.style.height = rectHeight + "px";
            project.box.style.width = rectWidth + "px";
            project.height = rectHeight;
            project.width = rectWidth;
            project.content.classList.add("!hidden");
            project.contentFull.classList.remove("!hidden");
            setTimeout(() => {
                project.box.style.transform = `translate(${finalX}px, ${finalY}px)`;
                project.box.classList.add("fullscreen");
                backdrop.classList.add("!opacity-100");
                backdrop.classList.add("!z-10");
            }, 10);
        }
    }

    function removeFromList(project) {
        if (project.fullscreen) {
            toogleFullScreen(project);
        }
        const i = projects.indexOf(project);
        let temp = [];
        for (let index = 0; index < projects.length; index++) {
            const project = projects[index];
            if (index != i) {
                temp = [...temp, project];
            }
        }
        projects = temp;
    }
</script>

<div class="w-screen min-h-screen p-4">
    <h1 class="text-center text-6xl mt-12">My projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8 mt-4">
        <div class="card shadow-lg" use:transition={{ name: "scaling" }}>
            <div class="tools">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    role="button"
                    tabindex="-1"
                    class="circle"
                    on:click={() => {
                        removeFromList(project);
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
                <a
                    class="circle"
                    role="button"
                    tabindex="-1"
                    href="/projects/hello-world"
                >
                    <span class="green box" />
                </a>
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
            <div class="card__content">
                {#if project.image == ""}
                    <div />
                {:else}
                    <img
                        src={project.image}
                        alt={project.title}
                        class="rounded-lg shadow-lg mb-4"
                    />
                {/if}
                <div>
                    <p>{project.description}</p>
                    <a href={project.url} class="link">{project.url}</a>
                </div>
            </div>
            <div class="card__content tuttoSchermoContent !hidden">
                {#if project.image == ""}
                    <div />
                {:else}
                    <div class="carousel rounded-box w-full col-span-3">
                        {#each project.images as image, i}
                            <div
                                class="carousel-item w-full relative"
                                id="carousel_{project.title}_{i}"
                            >
                                <img
                                    src={image}
                                    alt={project.title}
                                    class="w-full"
                                />
                                <div
                                    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                                >
                                    {#if i == 0}
                                        <a
                                            href="#carousel_{project.title}_{project
                                                .images.length - 1}"
                                            class="btn btn-circle glass"
                                        >
                                            <IconaArrowLeft />
                                        </a>
                                    {:else}
                                        <a
                                            href="#carousel_{project.title}_{i -
                                                1}"
                                            class="btn btn-circle glass"
                                        >
                                            <IconaArrowLeft />
                                        </a>
                                    {/if}
                                    {#if i == project.images.length - 1}
                                        <a
                                            href="#carousel_{project.title}_0"
                                            class="btn btn-circle glass"
                                        >
                                            <IconaArrowRight />
                                        </a>
                                    {:else}
                                        <a
                                            href="#carousel_{project.title}_{i +
                                                1}"
                                            class="btn btn-circle glass"
                                        >
                                            <IconaArrowRight />
                                        </a>
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}
                <div class="col-span-2">
                    <p>{project.fullDescription}</p>
                    <a href={project.url} class="link">{project.url}</a>
                </div>
            </div>
        </div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="backdrop" on:click={rimuoviTuttoSchermo} bind:this={backdrop} />
</div>

<div class="nascondi hidden" />
<div class="tuttoSchermo hidden" />
<div class="tuttoSchermoContent hidden" />
<div class="fullscreen hidden" />

<style>
    :global(::view-transition-old(scaling)) {
        transform: scale(0.5); /* Imposta la dimensione iniziale */
        opacity: 0; /* Opzionale: puoi anche gestire l'opacità durante la transizione */
    }

    :global(::view-transition-new(scaling)) {
        transform: scale(1); /* Imposta la dimensione finale */
        opacity: 1; /* Opzionale: opacità finale */
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Definisce la transizione */
    }
    .card {
        height: min-content;
        margin: 0 auto 1rem auto;
        background-color: #fbfbfb;
        border-radius: 12px;
        max-height: 4096px;
        z-index: 1;
        overflow: hidden;
        position: relative;
        transition: transform 0.3s ease-in-out, z-index 0.3s ease-in-out,
            width 0.3s ease-in-out, height 0.3s ease-in-out,
            max-height 0.3s ease-in-out;
    }

    .fullscreen {
        width: calc(100% - 40px) !important;
        height: calc(100% - 40px) !important;
        z-index: 9999;
    }

    .backdrop {
        opacity: 0;
        transition: all 0.5s ease;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2); /* Opacità */
        backdrop-filter: blur(10px); /* Sfocatura */
        z-index: -1; /* Assicurati che sia inferiore a quello di .tuttoSchermo */
    }

    .tuttoSchermoContent {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 2rem;
    }

    .card__content {
        padding: 1rem;
        height: fit-content;
        display: grid;
        transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
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
