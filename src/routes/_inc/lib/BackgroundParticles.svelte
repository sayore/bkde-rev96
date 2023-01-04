<script>
  import { onMount } from "svelte";
  
  onMount(async () => {
    var canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var particles = [];
    var particleCount = 100;
    var particleSize = 32;
    var particleSpeed = 0.1;
    var particleHue = 0;
    var particleSaturation = 40;
    var particleLightness = 50;
    var particleAlpha = 0.5;
    var particleBlur = 0;
    var particleFade = 0.01;
    var particleGravity = 0.00;
    var particleCollision = false;
    var particleBounce = 0.6;
    var imageLinks=[
      "https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae",
      "/jsicon.png",
      "https://svelte.dev/svelte-logo.svg",
      "https://vuejs.org/images/logo.png",
      "https://angular.io/assets/images/logos/angular/angular.svg",
      "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      "https://lit.dev/images/logo.svg",
      "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg",
    ];
    var images = [];
    imageLinks.forEach(imagelink => {
      var img = new Image();
      img.src = imagelink;
      images.push(img);
    });
    
    var particleColor =
      "hsla(" +
      particleHue +
      "," +
      particleSaturation +
      "%," +
      particleLightness +
      "%," +
      particleAlpha +
      ")";
    function getAngle(x1, y1, x2, y2) {
      var xDistance = x2 - x1;
      var yDistance = y2 - y1;
      return Math.atan2(yDistance, xDistance);
    }
    var particle = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      size: particleSize,
      color: particleColor,
      fade: particleFade,
      image: images[0],
      update: function () {
        this.x += this.vx;
        if(this.vx>2) this.vx*=0.99;
        this.y += this.vy;
        if(this.vy>2) this.vy*=0.99;
        this.vy += particleGravity;

        //Minimum Speed
        if (this.vx < 0.001 && this.vx > -0.001) {
          this.vx = Math.random()*5-2.5;
        }
        if (this.vy < 0.001 && this.vy > -0.001) {
          this.vy = Math.random()*5-2.5;
        }

        //change color depending on speed
        var speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        var tsixty = Math.round(speed * 360/100 + particleHue);
        var hundo = Math.round(speed * 360/5 + particleHue);

        //change size depending on speed
        var size = Math.round(Math.sqrt(this.vx*this.vy) * 1 + particleSize);
        this.size = size;

        //Add drag
        this.vx *= 0.999;
        this.vy *= 0.999;

        // The closer the particle is to the x center of the screen, the more it will be faded out
        var xCenter = canvas.width / 2;
        var yCenter = canvas.height / 2;
        var xDistance = Math.abs(this.x - xCenter);
        var yDistance = Math.abs(this.y - yCenter);
        var xFade = Math.abs(xDistance / xCenter);
        var yFade = Math.abs(yDistance / yCenter);
        var fade = xFade;
        //make fade more gradual
        fade = fade * fade;
        fade = fade * fade;
        fade = fade * fade;

        this.color =
          "hsla(" +
          tsixty +
          "," +
          hundo +
          "%," +
          particleLightness +
          "%," +
          fade +
          ")";

        this.fade=fade;
        if (this.x - this.size > canvas.width) {
          this.x = -this.size;
        }
        if (this.x + this.size < 0) {
          this.x = canvas.width + this.size;
        }
        if (this.y - this.size > canvas.height) {
          this.y = -this.size;
        }
        if (this.y + this.size < 0) {
          this.y = canvas.height + this.size;
        }
        if (particleCollision) {
          for (var i = 0; i < particles.length; i++) {
            var distance = getDistance(
              this.x,
              this.y,
              particles[i].x,
              particles[i].y
            );
            var minDist = this.size + particles[i].size;
            if (distance < minDist) {
              var angle = getAngle(
                this.x,
                this.y,
                particles[i].x,
                particles[i].y
              );
              var targetX = this.x + Math.cos(angle) * minDist;
              var targetY = this.y + Math.sin(angle) * minDist;
              var ax = (targetX - particles[i].x) * particleBounce;
              var ay = (targetY - particles[i].y) * particleBounce;
              this.vx -= ax;
              this.vy -= ay;
              particles[i].vx += ax;
              particles[i].vy += ay;
            }
          }
        }
      },
      render: function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        //ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        //ctx.rect(this.x-this.size/2,this.y,this.size,this.size)
        //Define Image as the Typescript Logo
        ctx.globalAlpha=this.fade;
        ctx.drawImage(this.image, this.x-this.size/2, this.y, this.size, this.size)
        ctx.fill();
      },
    };
    function init() {
      for (var i = 0; i < particleCount; i++) {
        var p = Object.create(particle);
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height;
        p.vx = (Math.random() - 0.5) * particleSpeed;
        p.vy = (Math.random() - 0.5) * particleSpeed;
        p.size = particleSize;
        p.color = particleColor;
        p.image = images[Math.floor(Math.random() * images.length)];
        particles.push(p);
      }
    }
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].render();
      }
      requestAnimationFrame(loop);
    }
    function getDistance(x1, y1, x2, y2) {
      var xDistance = x2 - x1;
      var yDistance = y2 - y1;
      return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
    init();
    loop();
  });
</script>
