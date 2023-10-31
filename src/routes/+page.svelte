<div style="width:100dvw; overflow:hidden;">
    <img src="/images/luna.png" alt="Moon" id="moon" />

    <div class="title">
        <h1>Hi, Maurizio Actis here!</h1>
    </div>
    <div style="height: 30dvh;">
        <img src="/images/astro.png" alt="Astronaut" id="astro" />
    </div>
    <div class="description">
        <p>
            I'm a passionate developer, based in Italy. I like to create stuff
            and web development is a great way to do that. I have solid
            knowledge about HTML, JS and CSS, and I love to use SvelteKit as a
            framework. I want to learn new stuff that can be applied to create
            something for the community, my dream is to build something that
            people use.
        </p>
    </div>

    <h2 class=" mt-32 text-center mb-16 text-5xl font-bold">
        My latest projects
    </h2>
    <div class="projects">
        <div id="satellite1" />
        <div id="satellite2" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
            <div
                class="text-base rounded-3xl p-8 relative bg-white bg-opacity-30 row-span-2"
            >
                <div class="text-2xl text-gray-900">My homelab</div>
                <p>
                    I strongly believe in self hosting as much services as
                    possible, also this website is hosted on my server at home!
                    you can learn more about my homelab <a
                        href="https://myapollo.it/my-selfhosted-stuff/">here</a
                    >.
                </p>
            </div>
            <div
                class="text-base rounded-3xl p-8 relative bg-white bg-opacity-30"
            >
                <a
                    href="https://cn-scwedding.website"
                    class="no-underline text-2xl text-gray-900 leading-7"
                >
                    Wedding website
                </a>
                <p>
                    A close friend of mine asked me to create a website for it's
                    wedding in Sicily, so there it is.
                </p>
            </div>
            <div
                class="text-base rounded-3xl p-8 relative bg-white bg-opacity-30"
            >
                <a
                    href="https://myapollo.it"
                    class="no-underline text-2xl text-gray-900">myapollo.it</a
                >
                <p>Personal blog, I talk about anything crosses my mind.</p>
            </div>
            <a
                class="link text-2xl text-gray-900 rounded-3xl p-8 relative bg-white bg-opacity-30 col-span-2 text-center flex justify-center gap-2"
                href="/projects"
            >
                <span>Check all of my projects here</span>
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                >
                    <path
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"
                    />
                </svg>
            </a>
        </div>
    </div>

    <div class="contact">
        <h1 class="text-3xl text-center font-semibold">Contact me</h1>
        <form
            action="https://formsubmit.co/5f02f38c408f6b38a132b44e9174296f"
            method="POST"
        >
            <input
                type="hidden"
                name="_subject"
                value="Messaggio da maurizioactis.it"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
                type="hidden"
                name="_next"
                value="https://maurizioactis.it/thanks.html"
            />
            <div class="flex gap-4">
                <div class="groupInput">
                    <label class="testoInput" for="name">Your name</label>
                    <input
                        name="name"
                        id="name"
                        class="campoInput"
                        type="name"
                    />
                    <div />
                </div>
                <div class="groupInput">
                    <label class="testoInput" for="Email">Email address</label>
                    <input
                        name="Email"
                        id="Email"
                        class="campoInput"
                        type="email"
                    />
                    <div />
                </div>
            </div>
            <div class="groupInput">
                <label class="testoInput" for="messsage">Your messagge</label>
                <textarea
                    name="message"
                    id="message"
                    required
                    class="campoInput"
                    rows="3"
                    style="width: 100%;"
                />
                <div />
            </div>
            <button type="submit" class="btnSend">
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
                <span>Send</span>
            </button>
        </form>
    </div>
    <div class="footer">
        <p>Made with ❤️ in 🇮🇹</p>
        <p>Maurizio Actis ©️ 2023</p>
    </div>

    <div id="trail" />
</div>

<style>
    .btnSend {
        font-family: inherit;
        font-size: 20px;
        background: rgb(92, 92, 92);
        color: white;
        padding: 0.7em 1em;
        padding-left: 0.9em;
        display: flex;
        align-items: center;
        border: none;
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.2s;
        margin: auto;
        margin-top: 1rem;
    }

    .btnSend span {
        display: block;
        margin-left: 0.3em;
        transition: all 0.3s ease-in-out;
    }

    .btnSend svg {
        display: block;
        transform-origin: center center;
        transition: transform 0.3s ease-in-out;
    }

    .btnSend:hover .svg-wrapper {
        animation: fly-1 0.6s ease-in-out infinite alternate;
    }

    .btnSend:hover svg {
        transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }

    .btnSend:hover span {
        transform: translateX(5em);
    }

    .btnSend:active {
        transform: scale(0.95);
    }

    @keyframes fly-1 {
        from {
            transform: translateY(0.1em);
        }

        to {
            transform: translateY(-0.1em);
        }
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 4rem;
    }

    .campoInput {
        height: 44px;
        background-color: #05060f0a;
        border-radius: 0.5rem;
        padding: 0 1rem;
        border: 2px solid transparent;
        font-size: 1rem;
        transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
            color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
            background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
    }

    .testoInput {
        display: block;
        margin-bottom: 0.3rem;
        font-size: 0.9rem;
        font-weight: bold;
        color: #05060f99;
        transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
    }

    .campoInput:hover,
    .campoInput:focus,
    .groupInput:hover .campoInput {
        outline: none;
        border-color: #05060f;
    }

    .groupInput:hover .testoInput,
    .campoInput:focus {
        color: #05060fc2;
    }

    .groupInput {
        margin-top: 0.5rem;
    }

    #satellite1 {
        background-image: url("/images/satellite1.png");
        background-size: contain;
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        position: absolute;
        border-radius: 50%; /* per renderlo circolare */
        /* Imposta il centro dell'orbita */
        left: -200px;
        top: 50%;
        transform-origin: center;
        /* Aggiungi animazione per il movimento */
        animation: orbit1 120s linear infinite; /* Modifica la durata e la velocità qui se necessario */
    }

    #satellite2 {
        background-image: url("/images/satellite2.png");
        background-size: contain;
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        position: absolute;
        border-radius: 50%; /* per renderlo circolare */
        /* Imposta il centro dell'orbita */
        left: -100px;
        top: 50%;
        transform-origin: center;
        /* Aggiungi animazione per il movimento */
        animation: orbit2 100s linear infinite; /* Modifica la durata e la velocità qui se necessario */
    }

    @keyframes orbit1 {
        from {
            transform: rotate(-300deg) translateX(450px) rotate(300deg);
        }
        to {
            transform: rotate(-660deg) translateX(450px) rotate(660deg);
        }
    }
    @keyframes orbit2 {
        from {
            transform: rotate(-90deg) translateX(250px) rotate(90deg);
        }
        to {
            transform: rotate(-450deg) translateX(250px) rotate(450deg);
        }
    }

    #moon {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 50%;
        max-height: 60%;
        overflow: hidden;
        object-fit: contain;
    }

    #astro {
        max-width: 40%;
        position: absolute;

        animation: boob 5s infinite ease-in-out;
    }

    @keyframes boob {
        0% {
            transform: translate(5px, 15px);
        }
        50% {
            transform: translate(0px, -10px);
        }
        100% {
            transform: translate(5px, 15px);
        }
    }

    #trail {
        position: fixed;
        width: 4rem;
        height: 4rem;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        backdrop-filter: invert(100%);
        z-index: 20;
    }
    .footer {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        margin: auto;
        align-items: center;
        text-align: center;
        color: white;
        margin-top: 8rem;
        position: relative;
        font-size: 24px;
        font-weight: 600;
        background: url("/images/marte.png");
        background-size: cover;
    }

    .title {
        text-align: center;
        font-size: clamp(1rem, 10dvw, 8rem);
        font-weight: 600;
        margin-top: 30dvh;
        position: relative;
        max-height: 40dvh;
        padding-left: 1rem;
        padding-right: 1rem;
        z-index: 2;
        transition: all 0.5s ease;
    }

    .description {
        width: 100%;
    }

    .description > p {
        max-width: 60rem;
        width: 80%;
        margin: auto;
        font-size: 24px;
        text-align: justify;
        background-color: rgba(255, 255, 255, 0.5);
        padding: 1rem;
        border-radius: 24px;
        backdrop-filter: blur(4px);
    }

    .projects {
        display: flex;
        position: relative;
        max-width: 80%;
        margin: auto;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }
</style>
