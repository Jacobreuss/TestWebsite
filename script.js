const video = document.getElementById('scrollVideo');
const spacer = document.querySelector('.video-spacer');

// Wait for video metadata to load
video.addEventListener('loadedmetadata', () => {
  const duration = video.duration;
  const spacerHeight = spacer.offsetHeight;

  window.addEventListener('scroll', () => {
    // Get scroll position relative to the spacer
    const spacerRect = spacer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Calculate how much of the spacer has been scrolled through
    const scrollY = Math.min(Math.max(windowHeight - spacerRect.top, 0), spacerHeight);
    // Calculate scroll progress (0 to 1)
    const progress = scrollY / spacerHeight;
    // Set video time
    video.currentTime = progress * duration;
  });

  // Prevent video from playing automatically and try to unlock on mobile
  video.pause();
  video.currentTime = 0;
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      video.pause();
    }).catch(error => {
      video.pause();
      console.log('Playback prevented on first video. This is expected on mobile.');
    });
  }
});

// Prevent default play on click
video.addEventListener('play', (e) => {
  video.pause();
});

// Second scroll-based video animation
const video2 = document.getElementById('scrollVideo2');
const spacer2 = document.querySelectorAll('.video-spacer')[1];

if (video2 && spacer2) {
  video2.addEventListener('loadedmetadata', () => {
    const duration2 = video2.duration;
    const spacerHeight2 = spacer2.offsetHeight;

    window.addEventListener('scroll', () => {
      const spacerRect2 = spacer2.getBoundingClientRect();
      const windowHeight2 = window.innerHeight;
      const scrollY2 = Math.min(Math.max(windowHeight2 - spacerRect2.top, 0), spacerHeight2);
      const progress2 = scrollY2 / spacerHeight2;
      video2.currentTime = progress2 * duration2;
    });

    // Prevent video from playing automatically and try to unlock on mobile
    video2.pause();
    video2.currentTime = 0;
    const playPromise2 = video2.play();
    if (playPromise2 !== undefined) {
      playPromise2.then(() => {
        video2.pause();
      }).catch(error => {
        video2.pause();
        console.log('Playback prevented on second video. This is expected on mobile.');
      });
    }
  });

  video2.addEventListener('play', (e) => {
    video2.pause();
  });
} 