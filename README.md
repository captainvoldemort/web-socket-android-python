# Android Video Streaming App

[Click here to view the Web Sockets Basics document](https://github.com/yashreadytobox/web-socket-android-python/blob/main/Web-Sockets-Basics.md)

# Python Websocket Live Streaming

This project demonstrates a real-time video streaming application using Python (server) and JavaScript (client) with WebSocket communication. It also allows sending numeric data from the client to the server using WebSocket.

## Features

- **Real-time Video Streaming:** The project captures video frames from either a camera or a video file and streams them to a web client in real-time.

- **Numeric Data Communication:** You can send numeric data from the client to the server, which can be useful for various applications, such as controlling the server remotely or sending sensor data.

- **Separate WebSocket Connections:** The client opens separate WebSocket connections for video streaming and numeric data, ensuring that video playback is not blocked while sending numeric data.

## Prerequisites

- Python 3.x
- OpenCV (cv2) for Python
- WebSockets library for Python (e.g., `websockets`)
- A modern web browser
- Android Studios/Emulator/Device

## Usage

1. **Clone the Repository:**

   ```shell
   git clone https://github.com/yashreadytobox/web-socket-android-python 
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
   
6. **Stop the Server:**
    
    To stop the server, press **`Ctrl+C`** in the terminal where the server script is running.

## **Configuration**

- You can configure the video source (camera or video file) in the **`server.py`** script.
- Change the IP address and port in both the server and client scripts to match your desired setup.
