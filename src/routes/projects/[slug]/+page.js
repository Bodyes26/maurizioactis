import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageLoad} */ export function load({ params }) {
    if (params.slug === "hello-world") {
        let project = {
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
        return project;
    }
    throw error(404, "Not found");
}
