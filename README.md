# Python Websocket Live Streaming

This project demonstrates a real-time video streaming application using Python (server) and JavaScript (client) with WebSocket communication. It also allows sending numeric data from the client to the server using WebSocket. Additionally, you can view the HTML page in an Android app using WebView.

## Features

- **Real-time Video Streaming:** The project captures video frames from either a camera or a video file and streams them to a web client in real-time.

- **Numeric Data Communication:** You can send numeric data from the client to the server, which can be useful for various applications, such as controlling the server remotely or sending sensor data.

- **Android App Integration:** The project includes a Java file that allows you to embed the HTML page within an Android app using WebView, providing a mobile-friendly interface for video streaming and numeric data interaction.

- **Separate WebSocket Connections:** The client opens separate WebSocket connections for video streaming and numeric data, ensuring that video playback is not blocked while sending numeric data.

## Prerequisites

- Python 3.x
- OpenCV (cv2) for Python
- WebSockets library for Python (e.g., `websockets`)
- A modern web browser
- Android Studio (for Android app integration)

## Usage

1. **Clone the Repository:**

   ```shell
   git clone https://github.com/yourusername/python-websocket-live-streaming.git
   cd python-websocket-live-streaming
   ```

2. **Install Dependencies:**
    
    Install Python dependencies using pip:
    
    ```
    shellCopy code
    pip install websockets opencv-python
    
    ```
    
3. **Start the Server:**
    
    Run the Python server script:
    
    ```
    shellCopy code
    python server.py
    
    ```
    
4. **Open the Web Client:**
    
    Open **`index.html`** in a web browser.
    
5. **Start Video Streaming:**
    - The video stream will start automatically when the web page loads.
    - You can send numeric data to the server using the input field and "Send Numeric Data" button.
   
6. **Android App Integration:**
    
    To view the HTML page in an Android app using WebView:
    
    - Open the Android project in Android Studio.
    - Edit the Java file to load the HTML page in a WebView.
    - Build and run the Android app on an emulator or a physical device.
7. **Stop the Server:**
    
    To stop the server, press **`Ctrl+C`** in the terminal where the server script is running.
