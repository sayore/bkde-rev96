<script lang="ts">
    import LrSplit from "../lib/LRSplit.svelte";
    export let reverse: boolean = false;
</script>

<div>
    <LrSplit leftPercent={70} rightPercent={30} {reverse}>
        <div slot="left">
            <h1>ReactJS</h1>
            <img class="logo-top-right-in-block" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />

            <p>
                ReactJS ist ein JavaScript-Framework, das Entwicklern
                ermöglicht, dynamische Benutzeroberflächen zu erstellen und zu
                verwalten. Es ermöglicht Entwicklern, ihren Code zu schreiben
                und zu organisieren, ohne auf eine vorgegebene Struktur
                festgelegt zu sein. Es verfügt über eine leistungsstarke und
                schnelle JavaScript-Engine, eine einfache Syntax, eine
                reaktionsschnelle Benutzeroberfläche und eine starke Integration
                mit anderen Frameworks.
            </p>
        </div>
        <div slot="right">
            <p>Vorteile von ReactJS:</p>
            <ul>
                <li>Leistungsstarke und schnelle JavaScript-Engine</li>
                <li>Einfache Syntax</li>
                <li>Reaktionsschnelle Benutzeroberfläche</li>
                <li>Starke Integration mit anderen Frameworks</li>
                <li>Einfache Verwaltung dynamischer Benutzeroberflächen</li>
                <li>Geeignet für kleine und große Projekte</li>
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
