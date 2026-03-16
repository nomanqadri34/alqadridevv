import os
import cv2

public_dir = r"e:\nomanqadri-porfolio\web\public"
thumbnails_dir = os.path.join(public_dir, "assets", "thumbnails")

os.makedirs(thumbnails_dir, exist_ok=True)

for file in os.listdir(public_dir):
    if file.endswith(".mp4"):
        video_path = os.path.join(public_dir, file)
        
        cap = cv2.VideoCapture(video_path)
        fps = cap.get(cv2.CAP_PROP_FPS)
        target_frame = int(fps * 2) if fps > 0 else 30
        cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)
        
        success, frame = cap.read()
        if not success:
            cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
            success, frame = cap.read()
            
        if success:
            thumb_name = file.replace(".mp4", ".jpg")
            thumb_path = os.path.join(thumbnails_dir, thumb_name)
            cv2.imwrite(thumb_path, frame)
            print(f"Saved {thumb_name}")
        else:
            print(f"Failed to extract frame for {file}")
            
        cap.release()
