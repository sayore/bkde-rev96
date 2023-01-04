<script lang="ts">
    import LrSplit from "../lib/LRSplit.svelte";
    export let reverse: boolean = false;
</script>

<div>
    <LrSplit leftPercent={70} rightPercent={30} {reverse}>
        <div slot="left">
            <h1>Vue</h1>
            <img class="logo-top-right-in-block" src="https://vuejs.org/images/logo.png" />

            <p>
                Vue ist ein progressives JavaScript-Framework, das eine
                leistungsstarke und skalierbare Frontend-Entwicklung ermöglicht.
                Es ist einfach zu erlernen und bietet eine sehr leistungsfähige
                Komponentenarchitektur, die es Entwicklern ermöglicht, ein
                effizientes und leistungsstarkes Web- und Mobile-Frontend zu
                erstellen. Vue bietet auch ein gutes Dokumentationssystem, eine
                große und aktive Community sowie einen guten Test-Support.
            </p>
        </div>
        <div slot="right">
            <p>Vorteile von Svelte:</p>
            <ul>
                <li>Hohe Leistung</li>
                <li>Einfache Syntax</li>
                <li>Gutes Dokumentationssystem</li>
                <li>Vollständige Komponentenarchitektur</li>
                <li>Einfache Integration von Drittanbieter-Bibliotheken</li>
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
