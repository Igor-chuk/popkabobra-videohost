document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');

    // Example video list, add your video URLs here
    const videos = [
        { title: 'Sample Video 1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { title: 'Sample Video 2', url: 'https://www.w3schools.com/html/movie.mp4' },
        // Add more videos as needed
    ];

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <video controls>
                <source src="${video.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h2>${video.title}</h2>
        `;
        videoContainer.appendChild(videoItem);
    });
});
