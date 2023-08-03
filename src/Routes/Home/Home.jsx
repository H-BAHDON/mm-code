import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

var Stars = {
  canvas: null,
  context: null,
  circleArray: [],
  colorArray: [
    "#4c1a22",
    "#4c1a23",
    "#5d6268",
    "#1f2e37",
    "#474848",
    "#542619",
    "#ead8cf",
    "#4c241f",
    "#d6b9b1",
    "#964a47"
  ],

  mouseDistance: 50,
  radius: 0.5,
  maxRadius: 1.5,

  //  MOUSE
  mouse: {
    x: undefined,
    y: undefined,
    down: false,
    move: false
  },

  //  INIT
  init: function () {
    this.canvas = document.getElementById("stars");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.display = "block";
    this.context = this.canvas.getContext("2d");

    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("resize", this.resize);

    this.prepare();
    this.animate();
  },

  //  CIRCLE
  Circle: function (x, y, dx, dy, radius, fill) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = this.radius;

    this.draw = function () {
      Stars.context.beginPath();
      Stars.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      Stars.context.fillStyle = fill;
      Stars.context.fill();
    };

    this.update = function () {
      if (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0)
        this.dx = -this.dx;
      if (
        this.y + this.radius > Stars.canvas.height ||
        this.y - this.radius < 0
      )
        this.dy = -this.dy;

      this.x += this.dx;
      this.y += this.dy;

      //  INTERACTIVITY
      if (
        Stars.mouse.x - this.x < Stars.mouseDistance &&
        Stars.mouse.x - this.x > -Stars.mouseDistance &&
        Stars.mouse.y - this.y < Stars.mouseDistance &&
        Stars.mouse.y - this.y > -Stars.mouseDistance
      ) {
        if (this.radius < Stars.maxRadius) this.radius += 1;
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
    };
  },

  //  MOUSE MOVE
  mouseMove: function (event) {
    Stars.mouse.x = event.x;
    Stars.mouse.y = event.y;
  },

  //  RESIZE
  resize: function () {
    Stars.canvas.width = window.innerWidth;
    Stars.canvas.height = window.innerHeight;
  },

  //  PREPARE
  prepare: function () {
    Stars.circleArray = [];
    for (var i = 0; i < 800; i++) {
      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight;
      var dx = (Math.random() - 0.5) * 2;
      var dy = (Math.random() - 0.5) * 2;
      var radius = Math.random() * 3 + 1;
      var fill = Stars.colorArray[Math.floor(Math.random() * Stars.colorArray.length)];

      Stars.circleArray.push(new Stars.Circle(x, y, dx, dy, radius, fill));
    }
  },

  //  ANIMATE
  animate: function () {
    requestAnimationFrame(Stars.animate);
    Stars.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (var i = 0; i < Stars.circleArray.length; i++) {
      Stars.circleArray[i].update();
    }
  }
};

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Call the function to initialize the stars animation
    Stars.init();
  }, []);

  const handleGetStartedClick = () => {
    // Replace '/platform' with the actual path of your desired page
    navigate('/platform');
  };

  return (
    <>
      <div className="container">
        <canvas id="stars" className="stars-canvas"></canvas>
        <div className="d-flex align-items-center justify-content-center flex-column min-vh-100 content-container">
          <h1 className="display-3 mb-4">MM-code</h1>
          <h2 className="lead mb-4">Let's Get Started</h2>
          <button onClick={handleGetStartedClick} className="btn btn-success btn-lg">
            Get Started
            <i className="ml-2 fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
