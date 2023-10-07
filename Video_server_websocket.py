import asyncio
import websockets
import cv2

# Define an asynchronous function named 'time' that takes a WebSocket connection and a path as arguments.
async def time(websocket, path):
    print('Starting...')  # Print a message indicating the server is starting.
    while True:
        print('Started')  # Print a message indicating that the main loop has started.
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
                man = cv2.imencode('.jpg', frame, encode_param)[1]  # Encode the frame as a JPEG image and get the encoded data.

                # Send the encoded image data to the WebSocket client.
                await websocket.send(man.tobytes())

        except Exception as e:
            print(e)  # If an exception occurs (e.g., video source is closed), print the error message.
            pass

# Create a WebSocket server that listens on IP address '127.0.0.1' and port '9997',
# and handles incoming connections with the 'time' function.
start_server = websockets.serve(time, "127.0.0.1", 9997)

# Start the asyncio event loop and run the WebSocket server forever.
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever() 