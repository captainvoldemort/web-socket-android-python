// Define a function named 'openSocket' for WebSocket communication.
openSocket = () => {
    // Create a new WebSocket connection to the server at "ws://127.0.0.1:9997/".
    socket = new WebSocket("ws://127.0.0.1:9997/");
    
    // Get the HTML element with id "msg" and store it in the 'msg' variable.
    let msg = document.getElementById("msg");

    // Add an event listener for when the WebSocket connection is opened.
    socket.addEventListener('open', (e) => {
        // Update the HTML element with id "status" to indicate that the connection is opened.
        document.getElementById("status").innerHTML = "Opened";
    });

    // Add an event listener for when a message is received from the WebSocket server.
    socket.addEventListener('message', (e) => {
        // Get the 2D rendering context of the "msg" element.
        let ctx = msg.getContext("2d");

        // Create a new Image element.
        let image = new Image();

        // Set the source of the image to a URL created from the received data (image data).
        image.src = URL.createObjectURL(e.data);

        // Add an event listener for when the image has finished loading.
        image.addEventListener("load", (e) => {
            // Draw the loaded image on the canvas, fitting it to the canvas dimensions.
            ctx.drawImage(image, 0, 0, msg.width, msg.height);
        });
    });
}
