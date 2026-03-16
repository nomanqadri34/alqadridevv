import re

with open(r"e:\nomanqadri-porfolio\web\components\HomePage.js", "r", encoding="utf-8") as f:
    content = f.read()

def repl(match):
    video_path = match.group(1)
    if video_path:
        filename = video_path.split("/")[-1].replace(".mp4", ".jpg")
        return f'image: "/assets/thumbnails/{filename}",\n        video: "{video_path}"'
    else:
        return f'image: "",\n        video: ""'

new_content = re.sub(r'video:\s*"([^"]*)"', repl, content)

with open(r"e:\nomanqadri-porfolio\web\components\HomePage.js", "w", encoding="utf-8") as f:
    f.write(new_content)
