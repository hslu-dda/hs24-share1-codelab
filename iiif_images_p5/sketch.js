// url to call the API
let api_query = "https://api.vam.ac.uk/v2/objects/search?images_exist=true&q_actor=william-morris";

// variable to save the response
let data;

function setup() {
    createCanvas(800, 800);

    // No loop to avoid multiple image loads
    noLoop();

    // call the api
    d3.json(api_query).then((response) => {

        // Store the fetched data
        data = response;
        console.log("Data fetched:", data);

        // Manually trigger draw() once data is ready
        redraw();
    });
}

function draw() {
    background(220);

    // check if api data has loaded
    if (data != undefined && data.records && data.records.length > 0) {

        // variable for all the artworks
        let records = data.records;

        // loop over all artworks (15x)
        for (let i = 0; i < records.length; i++) {
            // get the current artwork
            let artwork = records[i];

            // Get the image url
            // IIIF = International Image Interoperability Framework
            // {base_url}/{region}/{size}/{rotation}/{quality}.{format}
            // e.g. https://framemark.vam.ac.uk/collections/2019MF6825/full/300,/0/default.jpg
            // creates an image with 200 pixel witdh and auto height
            let iiif_url = artwork._images._iiif_image_base_url + "/full/200,/0/default.jpg";

            // load the images with the created url
            loadImage(iiif_url, (loadedImage) => {
                // the loaded image is saved in the variable "loadedImage"
                console.log("Image loaded successfully");
                image(loadedImage, random(width), random(height)); // Draw at the top-left corner
            });
        }
    } else {
        text("Loading...", 10, 50);
    }

    console.log("draw");
}
