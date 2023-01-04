<!-- Hero -->

<script>
  export let title = 'Hero';
  export let text = 'Hero';
</script>

<!--html-->

<div class="hero">
  <h1>{title}</h1>
  <p>{text}</p>
</div>

<!-- CSS -->

<style>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 0 100%;
    width:100%;
    background-color: #1e90ff;
    margin: 0;
    padding: 50px;
  }
  h1 {
    color: white;
  }
  p {
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: #1e90ff;
  }
</style>
