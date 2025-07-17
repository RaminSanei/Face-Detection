  function startFaceDetection() {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const facesDiv = document.getElementById("faces");

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      video.srcObject = stream;
    });

    const cap = new cv.VideoCapture(video);
    const src = new cv.Mat(480, 640, cv.CV_8UC4);
    const gray = new cv.Mat();
    const faces = new cv.RectVector();
    const classifier = new cv.CascadeClassifier();

    const cascadeFile = "haarcascade_frontalface_default.xml";
    cv.FS_createPreloadedFile("/", cascadeFile, cascadeFile, true, false);

    setTimeout(() => {
      const loaded = classifier.load(cascadeFile);
      if (!loaded) {
        console.error("❌ خطا در لود فایل haarcascade!");
        alert("مدل تشخیص چهره بارگذاری نشد.");
        return;
      }

      function processFrame() {
        cap.read(src);
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
        classifier.detectMultiScale(gray, faces, 1.1, 3, 0);

        ctx.drawImage(video, 0, 0);
        facesDiv.innerHTML = "";

        for (let i = 0; i < faces.size(); i++) {
          const face = faces.get(i);
          ctx.strokeStyle = "red";
          ctx.lineWidth = 2;
          ctx.strokeRect(face.x, face.y, face.width, face.height);

          const faceCanvas = document.createElement("canvas");
          faceCanvas.width = face.width;
          faceCanvas.height = face.height;
          const faceCtx = faceCanvas.getContext("2d");
          faceCtx.drawImage(canvas, face.x, face.y, face.width, face.height, 0, 0, face.width, face.height);

          const img = document.createElement("img");
          img.src = faceCanvas.toDataURL("image/png");
          img.width = 100;

          const link = document.createElement("a");
          link.href = img.src;
          link.download = `face_${i + 1}.png`;
          link.appendChild(img);
          facesDiv.appendChild(link);
        }

        requestAnimationFrame(processFrame);
      }

      requestAnimationFrame(processFrame);
    }, 1000);
  }