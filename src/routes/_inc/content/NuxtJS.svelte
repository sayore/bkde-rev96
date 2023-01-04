<script lang="ts">
    import LrSplit from "../lib/LRSplit.svelte";
    export let reverse: boolean = false;
</script>

<div>
    <LrSplit leftPercent={70} rightPercent={30} {reverse}>
        <div slot="left">
            <h1>NuxtJS</h1>
            <img class="logo-top-right-in-block" src="https://cdn.worldvectorlogo.com/logos/nuxt-2.svg" />
            <p>
                NuxtJS ist ein Open-Source-Framework, das es Entwicklern
                ermöglicht, moderne Web-Apps mit Vue.js zu erstellen. Es bietet
                ein flexibles Routing-System, eine schnelle und effiziente
                Code-Struktur, Hot-Reloading und Unterstützung für moderne
                Technologien wie Progressive Web Apps (PWA), Server-Side
                Rendering (SSR) und mehr. Mit NuxtJS können Entwickler eine
                performante Web-App erstellen, die schnell und sicher ist. Es
                ermöglicht Entwicklern, eine schnelle Entwicklung zu ermöglichen
                und schnelle Ergebnisse zu erzielen.
            </p>
        </div>
        <div slot="right">
            <p>Vorteile von NuxtJS:</p>
            <ul>
                <li>Einfaches und flexibles Routing-System</li>
                <li>Unterstützt moderne Technologien wie PWA, SSR und mehr</li>
                <li>Hot-Reloading</li>
                <li>Hohe Leistung</li>
                <li>Einfache Integration von Drittanbieter-Bibliotheken</li>
                <li>Gutes Dokumentationssystem</li>
                <li>Aktive und freundliche Community</li>
                <li>Guter Test-Support</li>
            </ul>
        </div>
    </LrSplit>
</div>

<style lang="scss">
    // header formatting
    h1 {
        font-size: 3rem;
        text-align: left;
        margin: 0;
        margin-top: 2rem;
    }

    // paragraph formatting
    p {
        font-size: 1.5rem;
        text-align: left;
        margin: 0;
        margin-top: 2rem;
    }
</style>
