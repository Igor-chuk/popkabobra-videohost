let videos = [];

function uploadVideo() {
    const fileInput = document.getElementById('video-upload');
    const descriptionInput = document.getElementById('video-description');
    const file = fileInput.files[0];
    const description = descriptionInput.value;

    if (file) {
        const videoUrl = URL.createObjectURL(file);
        videos.push({ url: videoUrl, description: description, likes: 0, dislikes: 0, comments: [] });
        renderVideos();
    }
}
