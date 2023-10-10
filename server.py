import asyncio
import websockets
import cv2
import random  # Import the random module to generate random flags

# Define an asynchronous function named 'video_stream' that takes a WebSocket connection as an argument.
async def video_stream(websocket):
    print('Starting video stream...')  # Print a message indicating the video stream is starting.
    camera = True  # A flag to indicate whether to use a camera (True) or a video file (False).

    if camera == True:
        vid = cv2.VideoCapture(0)  # Open the default camera (camera index 0) for capturing video frames.
    else:
        vid = cv2.VideoCapture('videos/video1.mp4')  # Open a video file named 'video1.mp4' for capturing frames.

    try:
        while(vid.isOpened()):  # Enter a loop to continuously capture and process frames as long as the video source is open.
            img, frame = vid.read()  # Read a frame from the video source.
            frame = cv2.resize(frame, (640, 480))  # Resize the frame to a fixed size of 640x480 pixels.
            encode_param = [int(cv2.IMWRITE_JPEG_QUALITY), 65]  # Define JPEG encoding parameters with quality level 65.
            image_data = cv2.imencode('.jpg', frame, encode_param)[1]  # Encode the frame as a JPEG image and get the encoded data.

            # Send the encoded image data to the WebSocket client.
            await websocket.send(image_data.tobytes())

    except Exception as e:
        print(e)  # If an exception occurs (e.g., video source is closed), print the error message.
        pass
# Define an asynchronous function named 'flag_stream' that takes a WebSocket connection as an argument.
async def flag_stream(websocket):
    print('Starting flag stream...')  # Print a message indicating the flag stream is starting.

    while True:
        try:
            # Generate a random flag (0 or 1).
            flag = random.randint(0, 1)

            # Send the flag to the WebSocket client.
            await websocket.send(str(flag))

            # Sleep for a while before sending the next flag.
            await asyncio.sleep(1)  # Adjust the sleep duration as needed.
        except websockets.exceptions.ConnectionClosed:
            print("Flag stream connection closed")
            break

# Define an asynchronous function named 'numeric_data_handler' that takes a WebSocket connection as an argument.
async def numeric_data_handler(websocket):
    print('Starting numeric data handler...')  # Print a message indicating the numeric data handler is starting.

    while True:
        try:
            # Receive numeric data from the client.
            numeric_data = await websocket.recv()
            print("Received numeric data:", numeric_data)
        except websockets.exceptions.ConnectionClosed:
            print("Connection closed")
            break

# Create a WebSocket server that listens on IP address '127.0.0.1' and port '9997',
# and handle incoming connections with separate tasks for video streaming and numeric data handling.
async def main(websocket, path):
    if path == "/video":
        await video_stream(websocket)
    if path == "/flags":
        await flag_stream(websocket)
    elif path == "/numeric":
        await numeric_data_handler(websocket)

# Create the WebSocket server and start the asyncio event loop.
start_server = websockets.serve(main, "127.0.0.1", 9997)

# Start the asyncio event loop and run the WebSocket server forever.
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
