<script lang="ts">
    import LrSplit from "../lib/LRSplit.svelte";
    export let reverse: boolean = false;
</script>

<div>
    <LrSplit leftPercent={70} rightPercent={30} {reverse}>
        <div slot="left">
            <h1>Angular</h1>
            <img class="logo-top-right-in-block" src="https://angular.io/assets/images/logos/angular/angular.svg" />
            <p>
                Angular ist ein modernes, typescript-basiertes
                JavaScript-Framework, das eine vollständige
                Komponentenarchitektur bietet. Es ermöglicht Entwicklern, die
                leistungsstarken und skalierbaren Web- und Mobile-Frontends zu
                erstellen, die schnell und effizient entwickelt werden können.
                Es verfügt über eine einfach zu erlernende Syntax, eine
                interaktive Entwicklungsumgebung, robuste Bibliotheken und
                Tools, gute Test- und Debugging-Tools sowie eine einfache
                Integration von Drittanbieter-Bibliotheken.
            </p>
        </div>
        <div slot="right">
            <p>Vorteile von Angular:</p>
            <ul>
                <li>Moderner, Typescript-basierter Code</li>
                <li>Vollständige Komponentenarchitektur</li>
                <li>Einfach zu erlernende Syntax</li>
                <li>Interaktive Entwicklungsumgebung</li>
                <li>Robuste Bibliotheken und Tools</li>
                <li>Gute Test- und Debugging-Tools</li>
                <li>Einfache Integration von Drittanbieter-Bibliotheken</li>
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
