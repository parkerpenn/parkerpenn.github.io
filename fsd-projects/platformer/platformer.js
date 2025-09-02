$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platfrom
    createPlatform(460, 560, 100, 10, "gold");
    createPlatform(785, 540, 500, 10, "purple");
    createPlatform(460, 690, 125, 10, "purple");
    createPlatform(1150, 410, 200, 10, "gold");
    createPlatform(950, 310, 150, 10, "purple");
    createPlatform(650, 300, 150, 10, "gold");
    createPlatform(300, 400, 125, 15, "purple");
    createPlatform(140, 270, 90, 10, "gold");
    createPlatform(1200, 200, 90, 10, "purple");
    createPlatform(1310, 590, 90, 15, "gold");






    // TODO 3 - Create Collectables
   createCollectable("steve", 1250, 50);
   createCollectable("diamond", 180, 180);
   createCollectable("max", 1350, 550);



    
    // TODO 4 - Create Cannons
    createCannon("right", 400, 1000);
    createCannon("right", 500, 850);
    createCannon("top", 510, 600)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
