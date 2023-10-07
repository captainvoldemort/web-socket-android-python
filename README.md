# Android Video Streaming App

[Click here to view the Web Sockets Basics document](https://github.com/yashreadytobox/web-socket-android-python/blob/main/Web-Sockets-Basics.md)

## Overview

This project is an Android application that displays a live video feed from a WebSocket server using a WebView component. The WebSocket server is implemented in Python and sends video frames to the Android app in real-time. The JavaScript code inside the app handles the WebSocket connection and rendering of video frames onto an HTML canvas element.

## Prerequisites

Before running this project, you should have the following:

- Android Studio or an Android development environment set up.
- The Python WebSocket server program (provided separately).
- A device or emulator running Android OS for testing.

## Getting Started

1. Clone or download the Android project from the repository.

2. Import the project into Android Studio.

3. Set up your Android emulator or connect a physical Android device for testing.

## Running the Android App - Use MainActivity.Java, Index.html and Script.js 

1. Build and run the Android app in Android Studio.

2. The app should open in the emulator or on your Android device.

3. The video feed from the WebSocket server should be displayed within the app's WebView component.

## Configuring the WebSocket Server

- The Python WebSocket server should be running on a server with a reachable IP address and port. The WebSocket server code can be found in the provided Python script.

- Make sure the WebSocket server address (e.g., "ws://127.0.0.1:9997/") in the JavaScript code matches the address of your WebSocket server.

- Change the camera = True/False to toogle between camera feed and video.mp4

## Additional Notes

- This project demonstrates a simple way to display a live video feed from a WebSocket server in an Android app. You can customize the app's interface and features as needed.

- Ensure that both the Android app and the Python WebSocket server are running and connected to the same network to enable communication between them.

- Make sure to handle exceptions and errors gracefully in your code to ensure the reliability of the WebSocket connection.

- Use 'pip3 install websocket' on the device running the python websockets server. 
