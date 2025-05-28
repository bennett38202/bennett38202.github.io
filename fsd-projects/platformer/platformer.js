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


    // TODO 2 - Create Platforms
    createPlatform(250, 625, 600, 10);
    createPlatform(1100, 198, 370, 15);
    createPlatform(850,495,150,10);
    createPlatform(237,317,763,10);
    createPlatform(1200,446,248,10);
    createPlatform(100,510,187,10);
    createPlatform(100,100,1100,10);



    // TODO 3 - Create Collectables
    createCollectable("steve",625,625);
    createCollectable("kennedi",250,300);
    createCollectable("database",1120,572);
    createCollectable("grace",826,289);


    
    // TODO 4 - Create Cannons
    //createCannon("right",200,500);
    createCannon("right",672,1200);
    createCannon("left",243,2000);
    createCannon("top",327,600);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
