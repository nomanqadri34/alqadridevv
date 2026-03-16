import os
import cv2

public_dir = r"e:\nomanqadri-porfolio\web\public"
thumbnails_dir = os.path.join(public_dir, "assets", "thumbnails")
os.makedirs(thumbnails_dir, exist_ok=True)

video_path = os.path.join(public_dir, "gym1.mp4")

if not os.path.exists(video_path):
    print(f"Video not found at {video_path}")
    exit(1)

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

# Pick a frame at 2 seconds
target_frame = int(fps * 2) if fps > 0 else 60
cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)

success, frame = cap.read()
if success:
    thumb_path = os.path.join(thumbnails_dir, "gym1.jpg")
    cv2.imwrite(thumb_path, frame)
    print("Saved gym1.jpg")
else:
    print("Failed to extract frame for gym1.mp4")
    
cap.release()
