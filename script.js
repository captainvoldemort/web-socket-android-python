let videoSocket; // WebSocket connection for video
let numericSocket; // WebSocket connection for numeric data
let flagSocket; // WebSocket connection for flags
let flagCounts = {
    flag1: 0,
    flag2: 0,
    flag3: 0,
    flag4: 0
}; 

// Define a function to open a WebSocket connection for video.
openVideoSocket = () => {
    // Create a new WebSocket connection to the server for video at "ws://127.0.0.1:9997/video".
    videoSocket = new WebSocket("ws://127.0.0.1:9997/video");
    
    // Get the HTML element with id "msg" and store it in the 'msg' variable.
    let msg = document.getElementById("msg");

    // Add an event listener for when the WebSocket connection for video is opened.
    videoSocket.addEventListener('open', (e) => {
        // Update the HTML element with id "status" to indicate that the video connection is opened.
        document.getElementById("status").innerHTML = "Video Connection Opened";
    });

    // Add an event listener for when a message is received from the video WebSocket server.
    videoSocket.addEventListener('message', (e) => {
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

// Define a function to open a WebSocket connection for flags.
openFlagSocket = () => {
    // Create a new WebSocket connection to the server for flags at "ws://127.0.0.1:9997/flags".
    flagSocket = new WebSocket("ws://127.0.0.1:9997/flags");
    
    // Add an event listener for when the WebSocket connection for flags is opened.
    flagSocket.addEventListener('open', (e) => {
        // Update the HTML element with id "status" to indicate that the flag connection is opened.
        document.getElementById("status").innerHTML = "Flag Connection Opened";
    });

    // Add an event listener for when a message is received from the flag WebSocket server.
    flagSocket.addEventListener('message', (e) => {
        // Get the 4-bit flag value from the message.
        let flags = e.data;
    
        // Update the specific flag counts with the received flag value.
        for (let i = 0; i < flags.length; i++) {
            let flagChannel = `flag${i + 1}`;
            flagCounts[flagChannel] += parseInt(flags[i]);
        }
    
        // Update the flag count elements in the HTML.
        for (let i = 1; i <= 4; i++) {
            let flagChannel = `flag${i}`;
            let flagCountElement = document.getElementById(`flagCount${i}`);
            flagCountElement.textContent = `${flagChannel}: ${flagCounts[flagChannel]}`;
        }
    }); 
}


// Define a function to open a WebSocket connection for numeric data.
openNumericSocket = () => {
    // Create a new WebSocket connection to the server for numeric data at "ws://127.0.0.1:9997/numeric".
    numericSocket = new WebSocket("ws://127.0.0.1:9997/numeric");
    
    // Add an event listener for when the WebSocket connection for numeric data is opened.
    numericSocket.addEventListener('open', (e) => {
        // Update the HTML element with id "status" to indicate that the numeric data connection is opened.
        document.getElementById("status").innerHTML = "Numeric Data Connection Opened";
    });
}

// Define a function to send numeric data to the server.
sendNumericData = () => {
    // Get the numeric data from the input field with id "numericData".
    let numericDataInput = document.getElementById("numericData");
    let numericData = numericDataInput.value;

    // Send the numeric data to the server using the numeric data WebSocket connection.
    if (numericSocket.readyState === WebSocket.OPEN) {
        numericSocket.send(numericData);
    }
}

// Call the functions to open WebSocket connections when the page loads.
window.onload = () => {
    openFlagSocket(); 
    openVideoSocket(); 
    openNumericSocket();
}
