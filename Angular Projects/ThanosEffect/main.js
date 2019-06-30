const glove = document.querySelector(".infinity");
const snap = document.querySelector(".snap");
const content = document.querySelector(".content");
const svg = document.querySelector("svg");

const svgLater = svg;
console.log(svgLater);

var imageDataArray = [];
var canvasCount = 40;

$(".infinity").click(function() {
  // Hide default glove
  glove.style.display = "none";

  // Show Snap animation
  snap.className = "snap";

  setTimeout(() => {
    // Show the Glove Again
    glove.style.display = "block";

    // Hide the snap animation after 2500s
    snap.className = "hide";

    // get the svg data to make image data URL
    const svgData = new XMLSerializer().serializeToString(svg);

    // base 64 the svg data
    const svg64 = btoa(svgData);

    // base 64 svg data header
    const data64 = "data:image/svg+xml;base64,";

    // prepend the header to svg making image url
    const svgData64 = data64 + svg64;

    const image = document.createElement("img");

    // Add the image src
    image.src = svgData64;

    setTimeout(() => {
      // create a canvas and render the image there
      const canvas = document.createElement("canvas");

      // get the context and set 400px width and 400px height
      const ctx = canvas.getContext("2d");
      canvas.width = 400;
      canvas.height = 400;

      // draw the image on to the canvas
      ctx.drawImage(image, 44, 0, 312, 400);

      // Remove the svg from DOM
      content.removeChild(svg);

      let imageData = ctx.getImageData(44, 0, canvas.width, canvas.height);

      let rawPixelArr = imageData.data;

      // create more no. of empty imageData equal to this ImageData Length based on Canvas Count
      createBlankImageDatas(imageData);

      // put pixel info to imageDataArray (Weighted Distributed)
      for (let i = 0; i < rawPixelArr.length; i += 4) {
        //find the highest probability canvas the pixel should be in
        let p = Math.floor((i / rawPixelArr.length) * canvasCount);
        let a = imageDataArray[weightedRandomDistrib(p)];
        a[i] = rawPixelArr[i];
        a[i + 1] = rawPixelArr[i + 1];
        a[i + 2] = rawPixelArr[i + 2];
        a[i + 3] = rawPixelArr[i + 3];
      }

      // Create a new canvas with the imageDataArray based on canvas count
      for (let i = 0; i < canvasCount; i++) {
        let canvass = newCanvasFromImageData(
          imageDataArray[i],
          canvas.width,
          canvas.height
        );
        canvass.classList.add("dust");
        document.body.appendChild(canvass);
      }

      //apply animation
      $(".dust").each(function(index) {
        setTimeout(() => {
          animateTransform(
            $(this),
            100,
            -100,
            chance.integer({ min: -25, max: 25 }),
            800 + 110 * index
          );
        }, 20 * index);

        // remove the canvas from DOM tree when faded
        $(this)
          .delay(20 * index)
          .fadeOut(110 * index + 800, "easeInQuint", () => {
            $(this).remove();
          });
      });
    }, 1);
  }, 2500);
});

// create empty imageData equal to original ImageData Length
function createBlankImageDatas(imageData) {
  for (let i = 0; i < canvasCount; i++) {
    let arr = new Uint8ClampedArray(imageData.data);
    for (let j = 0; j < arr.length; j++) {
      arr[j] = 0;
    }
    imageDataArray.push(arr);
  }
}

function weightedRandomDistrib(peak) {
  var prob = [],
    seq = [];
  for (let i = 0; i < canvasCount; i++) {
    prob.push(Math.pow(canvasCount - Math.abs(peak - i), 3));
    seq.push(i);
  }
  return chance.weighted(seq, prob);
}

function animateTransform(elem, sx, sy, angle, duration) {
  var td = (tx = ty = 0);
  $({ x: 0, y: 0, deg: 0 }).animate(
    { x: sx, y: sy, deg: angle },
    {
      duration: duration,
      easing: "easeInQuad",
      step: function(now, fx) {
        if (fx.prop == "x") tx = now;
        else if (fx.prop == "y") ty = now;
        else if (fx.prop == "deg") td = now;
        elem.css({
          transform:
            "rotate(" + td + "deg)" + "translate(" + tx + "px," + ty + "px)"
        });
      }
    }
  );
}

// Create a new canvas with the imageDataArray
function newCanvasFromImageData(imageDataArray, w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  tempCtx = canvas.getContext("2d");
  tempImageData = new ImageData(imageDataArray, w, h);
  tempCtx.putImageData(tempImageData, 44, 0);

  return canvas;
}

// Time Effect
const gauntlet = document.querySelector(".gauntlet");
const time = document.querySelector(".time");

gauntlet.addEventListener("click", timeEffect);

function timeEffect() {
  gauntlet.className = "hide";
  time.className = "time";
  setTimeout(() => {
    gauntlet.className = "gauntlet";
    time.className = "hide";
    content.appendChild(svgLater);
  }, 2500);
}
