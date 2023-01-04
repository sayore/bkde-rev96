<script lang="ts">
    import LrSplit from "../lib/LRSplit.svelte";
    export let reverse: boolean = false;
</script>

<div>
    <LrSplit leftPercent={70} rightPercent={30} {reverse}>
        <div slot="left">
            <h1>LitJS</h1>
            <img class="logo-top-right-in-block" src="https://lit.dev/images/logo.svg" />
            <p>
                LitJS ist ein leistungsstarkes, modernes JavaScript-Framework,
                das es Entwicklern ermöglicht, schnell leistungsstarke Web-Apps
                zu erstellen. Es ist besonders leicht zu erlernen und bietet
                eine leistungsstarke Komponentenarchitektur mit Unterstützung
                für moderne Technologien wie Progressive Web Apps (PWA),
                Server-Side Rendering (SSR) und mehr. Es stellt eine
                umfassende Open-Source-Bibliothek von JavaScript-Bibliotheken
                bereit, die für die Entwicklung von Web-Apps und
                mobilen Anwendungen verwendet werden kann. Mit LitJS können
                Entwickler viele komplexe Funktionen erstellen, ohne dass
                sie sich auf komplexe APIs und Frameworks stützen müssen. Mit
                seiner benutzerfreundlichen API, seiner leistungsstarken
                Komponentenarchitektur und seiner Unterstützung für moderne
                Technologien ist LitJS eine ausgezeichnete Wahl für die
                Entwicklung von Web-Apps.
            </p>
        </div>
        <div slot="right">
            <p>Vorteile von LitJS:</p>
            <ul>
                <li>Einfach zu erlernen</li>
                <li>Hohe Leistung</li>
                <li>Umfangreiche Komponentenarchitektur</li>
                <li>
                    Unterstützung moderner Technologien wie PWA, SSR und mehr
                </li>
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
