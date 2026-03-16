import os
import cv2

public_dir = r"e:\nomanqadri-porfolio\web\public"
thumbnails_dir = os.path.join(public_dir, "assets", "thumbnails")

video_path = os.path.join(public_dir, "lms.mp4")

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

# Pick a frame at 10 seconds to ideally get something more meaningful
target_frame = int(fps * 10) if fps > 0 else 300
cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)

success, frame = cap.read()
if success:
    thumb_path = os.path.join(thumbnails_dir, "lms.jpg")
    cv2.imwrite(thumb_path, frame)
    print("Saved lms.jpg")
else:
    print("Failed to extract frame for lms.mp4")
    
cap.release()
