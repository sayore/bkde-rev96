<script lang="ts">
  import ReactJS from "./content/ReactJS.svelte";
  import Angular from "./content/Angular.svelte";
  import Vue from "./content/Vue.svelte";
  import Svelte from "./content/Svelte.svelte";
  import Card from "./lib/Card.svelte";
  import TopMenu from "./lib/TopMenu.svelte";
  import BackgroundParticles from "./lib/BackgroundParticles.svelte";
  import CountWords from "./lib/CountWords.svelte";
  import NuxtJs from "./content/NuxtJS.svelte";
  import LitJs from "./content/LitJS.svelte";
  import Hero from "./lib/Hero.svelte";
  import { getContext } from "svelte";
  import { onMount, getAllContexts } from "svelte";

  //Array with links to logos of common web frameworks
  let frameworks: { img: string; name: string }[] = [
    { img: "https://svelte.dev/svelte-logo.svg", name: "Svelte" },
    { img: "https://vuejs.org/images/logo.png", name: "VueJS" },
    {
      img: "https://angular.io/assets/images/logos/angular/angular.svg",
      name: "Angular",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      name: "ReactJS",
    },
    { img: "https://lit.dev/images/logo.svg", name: "LitJS" },
    { img: "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg", name: "NuxtJS" },
    ];

  function openCard(e: MouseEvent): void {
    e.preventDefault();
    console.log((<HTMLDivElement>e.target).getAttribute("description"));
  }

  // Make the screen move to the nearest content block so it's centered in 1 second after a scroll event finished
  function scrollToNearestContentBlock(): void {
    let contentBlocks = document.getElementsByClassName("scroll-target");
    let nearestContentBlock = contentBlocks[0];
    let nearestContentBlockDistance = 1000000;
    for (let i = 0; i < contentBlocks.length; i++) {
      let contentBlock = contentBlocks[i];
      let contentBlockDistance = Math.abs(
        contentBlock.getBoundingClientRect().top
      );
      if (contentBlockDistance < nearestContentBlockDistance) {
        nearestContentBlock = contentBlock;
        nearestContentBlockDistance = contentBlockDistance;
      }
    }
    //Log the distance
    console.log(nearestContentBlockDistance);

    //Only snap if 50px in range to the nearest content block
    if (nearestContentBlockDistance < 50) {
      return;
    }
    
    nearestContentBlock.scrollIntoView({ behavior: "smooth" });

    //remove the active css class from the previously active element
    let activeElement = document.getElementsByClassName("scrolled-to")[0];
    if (activeElement) {
      activeElement.classList.remove("scrolled-to");
    }
    //get the next element after the nearest content block and add an active css class to it
    let nextElement = nearestContentBlock.nextElementSibling;
    if (nextElement) {
      nextElement.classList.add("scrolled-to");
      console.log(nextElement);
    }
  }

  //Add the scroll event listener, and remove it if another scroll event happens before the timeout is over
  let scrollTimeout: NodeJS.Timeout;
  function addScrollEventListener(): void {
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(scrollToNearestContentBlock, 500);
    });
  }

  onMount(async () => {
    addScrollEventListener();
    //Make the unterschrift image point slightly towards the mouse cursor
    let unterschriftA = document.getElementById("unterschrift_fg");
    let unterschriftB = document.getElementById("unterschrift_bg");
    let unterschriftHeader = document.getElementById("unterschrift_header");
    if (!!unterschriftA && !!unterschriftB) {
      document.addEventListener("mousemove", (e: MouseEvent) => {
        const mouseX =
          (e.clientX / window.innerWidth - 0.5) * 1.5 * (Math.PI / 4);
        const mouseY =
          (e.clientY / window.innerHeight - 0.5) * -1.5 * (Math.PI / 4);
        const maxAngle = Math.PI / 4 /2;
        const xAngle = Math.max(-maxAngle, Math.min(maxAngle, mouseX));
        const yAngle = Math.max(-maxAngle, Math.min(maxAngle, mouseY));

        unterschriftA.style.transform = `rotateX(${yAngle}rad) rotateY(${xAngle}rad) translateZ(50px)`;
        unterschriftB.style.transform = `rotateX(${yAngle}rad) rotateY(${xAngle}rad) translateZ(-50px)`;
        unterschriftHeader.style.transform = `rotateX(${yAngle}rad) rotateY(${xAngle}rad) translateZ(30px)`;
      });
    } else {
      console.log("unterschrift not found");
    }
  });
</script>

<main>
  <div class="fwh-content-block">
    <div
      style="position:absolute;"
      class="scroll-target scroll-target-no-offset"
    />
    <img
      id="unterschrift_fg"
      style="width:60%;position:absolute;"
      src="unterschrift_bright_fg.webp"
      alt="Unterschrift"
    />
    <img
      id="unterschrift_bg"
      style="width:60%;position:absolute;"
      src="unterschrift_bright_bg.webp"
      alt="Unterschrift"
    />
    <div id="unterschrift_header" style="width:60%;position:absolute;">
      <div style="float:right;position:relative;top:120px;">
        <h1 style="font-size:3rem;">B. K.</h1>
        <h2 style="font-size:2rem;">Webentwickler</h2>
      </div>
    </div>
  </div>

  <div class="content-block">
    <div class="scroll-target" />
    <div style="padding:1rem;">
      <p>
        Als erfahrener Webentwickler verstehe ich, dass es heutzutage wichtig
        ist, eine professionelle und moderne Webseite zu haben, die es Ihnen
        ermöglicht, sich in der heutigen Online-Welt zu profilieren. Mit über 10
        Jahren Erfahrung in der Webentwicklung habe ich eine breite Palette an
        Technologien und Frameworks erlernt und verwende sie, um Ihnen eine
        benutzerfreundliche und aussagekräftige Webseite zu bieten.
      </p>
      <p>
        Mit meinemtiefen Verständnis für Schnittstellen und Programmierung kann
        ich alles von einfachen statischen Seiten bis hin zu komplexen,
        dynamischen Webapplikationen bauen, die Ihren Anforderungen entsprechen.
        Ich verwende verschiedene Frameworks wie HTML, CSS, JavaScript, jQuery
        und PHP, um sicherzustellen, dass Ihre Webseite immer auf dem neuesten
        Stand ist. Ich arbeite auch mit Content-Management-Systemen wie
        WordPress und Drupal, um
      </p>
      <p>
        Ihre Webseite zu verwalten und zu aktualisieren. Ich werde
        sicherstellen, dass Ihre Website auf allen gängigen Browsern und
        Mobilgeräten funktioniert, um sicherzustellen, dass Ihre Klienten Ihre
        Webseite auf jedem Gerät ansehen können. Mit meiner umfangreichen
        Erfahrung in der Webentwicklung werde ich sicherstellen, dass ich Ihnen
        eine benutzerfreundliche und professionelle Webseite biete, die Ihren
        Anforderungen entspricht. Ich werde mein Bestes geben, um einen
        erstklassigen Service zu bieten.
      </p>
    </div>

    <div class="spacer" />
    <div class="scroll-target" />
    <Hero title="Frameworks" text="Übersicht" />

    <ul id="cards">
      {#each frameworks as framework}
        <a href="#{framework.name}" class="text-decoration:none;">
          <Card
            description={framework.name}
            link=""
            effect={undefined}
            image={framework.img}
          />
        </a>
      {/each}
    </ul>
    <div class="spacer" />

    <div id="Svelte" class="anchor" />
    <div class="scroll-target" />
    <Svelte reverse />

    <div id="VueJS" class="anchor" />
    <div class="scroll-target" />
    <Vue reverse />

    <div id="Angular" class="anchor" />
    <div class="scroll-target" />
    <Angular reverse />

    <div id="ReactJS" class="anchor" />
    <div class="scroll-target" />
    <ReactJS reverse />

    <div id="LitJS" class="anchor" />
    <div class="scroll-target" />
    <LitJs reverse />

    <div id="NuxtJS" class="anchor" />
    <div class="scroll-target" />
    <NuxtJs reverse />

    <CountWords />
  </div>
</main>

<style lang="scss">
  // flexbox 4 in a row for the cards
  #cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    gap: 10px;
    margin: 30px;
    padding: 0;
    list-style: none;
    > a {
      flex: 1 1 200px;
      //margin: 0.1px;
    }
  }

  .anchor {
    display: block;
    position: relative;
    top: -25vh;
    visibility: hidden;
  }

  //main in center
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: visible;
  }

  /**list */
  ul {
    list-style: none;
    padding: 0;
    margin: auto;
  }

  .full-height {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .content-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    margin: 0;
    @media (min-width: 768px) {
      width: 70%;
    }
    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  .fwh-content-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    overflow: visible;
  }

  .scroll-target {
    display: block;
    position: relative;
    top: -5vh;
    visibility: hidden;
  }

  .scroll-target-no-offset {
    display: block;
    position: relative;
    top: -100vh;
    visibility: hidden;
  }

  #unterschrift {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  //hide on mobile
  .hide-on-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
</style>
