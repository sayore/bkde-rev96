<script lang="ts">
    import { onMount } from "svelte";
    onMount(async () => {
        //Hide when scrolling down and show when scrolling up
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.querySelector<HTMLDivElement>(".topMenu").style.top =
                    "0";
            } else {
                document.querySelector<HTMLDivElement>(".topMenu").style.top =
                    "-50px";
            }
            prevScrollpos = currentScrollPos;
        };
        //burger menu
        let burger = document.querySelector(".burger");
        let links = document.querySelector<HTMLDivElement>(".links");
        let links2 = document.querySelectorAll(".links a");
        burger.addEventListener("click", () => {
            links.classList.toggle("active");
            links2.forEach((link: HTMLLinkElement, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${
                        index / 7 + 0.3
                    }s`;
                }
            });
            burger.classList.toggle("toggle");
        });
    });
</script>

<main>
    <div class="topMenu">
        <div class="logo">
            <a href="/">
                <img src="/unterschrift_bright.webp" alt="logo" height="50" />
            </a>
        </div>
        <div class="links">
            <a href="/motivation">Motivation</a>
            <a href="/blog">Blog</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </div>
        <!-- Burger icon -->
        <div class="burger" style="border:1px solid red">
            <div class="line1" />
            <div class="line2" />
            <div class="line3" />
        </div>
    </div>
</main>

<style lang="scss">
    .topMenu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: #333;
        //fullwidth
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;

        border-bottom: 1px solid #1e90ff;

        //Hide when scrolling down and show when scrolling up
        transition: top 0.5s;
    }
    .logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
    }
    .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }
    a {
        margin: 0 10px;
        text-decoration: none;
        color: white;
    }
    a:hover {
        color: #1e90ff;
    }

    .links {
        display: flex;
    }
    .burger {
        display: none;
    }

    /**Burger Menu*/
    .burger {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 10px;
        z-index: 10;
    }
    .burger:focus {
        outline: none;
    }
    .burger div {
        width: 2rem;
        height: 0.25rem;
        background: #fff;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
    .burger .toggle div {
        background: #fff;
        opacity: 1;
        transform: rotate(45deg);
    }
    .burger .toggle div:nth-child(2) {
        opacity: 0;
    }
    .burger .toggle div:nth-child(3) {
        transform: rotate(-45deg);
    }

    /**Hide default links when mobile*/
    @media (max-width: 768px) {
        .links {
            display: none;
        }
        .burger {
            display: flex;
        }
    }
</style>
