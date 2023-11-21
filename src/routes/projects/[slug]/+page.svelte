<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { setupViewTransition } from "sveltekit-view-transition";

    const { transition } = setupViewTransition();

    function toogleFullScreen(project) {
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

<div class="w-screen h-screen p-12">
    <div class="card shadow-lg" use:transition={{ name: "scaling" }}>
        <div class="tools">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                role="button"
                tabindex="-1"
                class="circle"
                on:click={() => {
                    removeFromList(data);
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
                    data.content.classList.toggle("nascondi");
                }}
            >
                <span class="yellow box" />
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <a class="circle" role="button" tabindex="-1" href="/projects">
                <span class="green box" />
            </a>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                role="button"
                tabindex="-1"
                class="text-lg ml-4"
                on:click={() => {
                    data.content.classList.remove("nascondi");
                }}
            >
                {data.title}
            </div>
        </div>
        <div class="card__content">
            {#if data.image == ""}
                <div />
            {:else}
                <div class="carousel rounded-box w-full col-span-3">
                    {#each data.images as image, i}
                        <div
                            class="carousel-item w-full relative"
                            id="carousel_{data.title}_{i}"
                        >
                            <img src={image} alt={data.title} class="w-full" />
                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                            >
                                {#if i == 0}
                                    <a
                                        href="#carousel_{data.title}_{data
                                            .images.length - 1}"
                                        class="btn btn-circle glass"
                                    >
                                        prev
                                    </a>
                                {:else}
                                    <a
                                        href="#carousel_{data.title}_{i - 1}"
                                        class="btn btn-circle glass"
                                    >
                                        prev
                                    </a>
                                {/if}
                                {#if i == data.images.length - 1}
                                    <a
                                        href="#carousel_{data.title}_0"
                                        class="btn btn-circle glass"
                                    >
                                        next
                                    </a>
                                {:else}
                                    <a
                                        href="#carousel_{data.title}_{i + 1}"
                                        class="btn btn-circle glass"
                                    >
                                        next
                                    </a>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
            <div class="col-span-2">
                <p>{data.fullDescription}</p>
                <a href={data.url} class="link">{data.url}</a>
            </div>
        </div>
    </div>
</div>

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
        height: 100%;
        width: 100%;
        margin: 0 auto 1rem auto;
        background-color: #fbfbfb;
        border-radius: 12px;
    }

    .card__content {
        padding: 1rem;
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 2rem;
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
</style>
