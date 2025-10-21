import cv2
import os

# Video files
videos = [
    "public/video/log-0501-01.mp4",
    "public/video/log-0501-02.mp4",
    "public/video/log-0501-03.mp4",
    "public/video/log-0501-04.mp4",
    "public/video/log-0501-05.mp4"
]

for video_path in videos:
    # Create output path
    output_path = video_path.replace('.mp4', '.jpg')
    
    print(f"Processing {video_path}...")
    
    # Open video
    cap = cv2.VideoCapture(video_path)
    
    # Set position to 1 second (assuming 24fps)
    cap.set(cv2.CAP_PROP_POS_FRAMES, 24)
    
    # Read frame
    ret, frame = cap.read()
    
    if ret:
        # Resize to 1280x720
        frame = cv2.resize(frame, (1280, 720))
        
        # Save as JPG
        cv2.imwrite(output_path, frame, [cv2.IMWRITE_JPEG_QUALITY, 85])
        print(f"✓ Created {output_path}")
    else:
        print(f"✗ Failed to extract frame from {video_path}")
    
    cap.release()

print("\nDone! All thumbnails created.")
