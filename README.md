# 🎯 Face Detection with OpenCV.js & WebAssembly

This project demonstrates **real-time face detection in the browser** using [OpenCV.js](https://docs.opencv.org/4.x/d5/d10/tutorial_js_root.html) compiled to WebAssembly (WASM). Detected faces are extracted from the video stream and displayed as downloadable images — simply click on a detected face to download it!

---

## 📸 Demo

> Automatically detects faces from webcam and allows you to download them with a single click.

![Demo Screenshot](Demo.png) <!-- Optional: Replace with your own -->

---

## ✅ Features

- 🧠 Real-time face detection using Haar Cascades
- 📦 Runs entirely in-browser (no server or backend required)
- ⚡ Powered by WebAssembly (OpenCV compiled to WASM)
- 🎯 One-click face image extraction and download
- 💻 Works on most modern browsers (Chrome, Firefox, Edge)

---

## 🚀 Technologies Used

- [OpenCV.js](https://docs.opencv.org/4.x/d5/d10/tutorial_js_root.html)
- WebAssembly (WASM)
- JavaScript (Vanilla)
- HTML5 + `<video>` + `<canvas>`
- Haar Cascade Classifier (`haarcascade_frontalface_default.xml`)

---

## 📁 Project Structure

wasm-project/
├── index.html # Main webpage
├── script.js # All JavaScript logic
├── opencv.js # OpenCV.js (precompiled)
├── haarcascade_frontalface_default.xml # Face detection model

