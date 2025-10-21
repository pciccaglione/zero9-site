# Video Optimization Guide for ZERO9

## Mobile Video Optimization

The site now includes automatic mobile optimization for the hero video to improve performance on mobile devices.

### How It Works

1. **Automatic Detection**: The component detects screen width < 768px (mobile/tablet)
2. **Separate Video Files**: Loads different video files for mobile vs desktop
3. **Lazy Loading**: Uses `preload="metadata"` on mobile to save bandwidth
4. **Fallback**: Falls back to desktop video if mobile version doesn't exist yet

### Video Files Required

#### Desktop Video (Current)
- **File**: `/public/video/hero.mp4`
- **Resolution**: 4K (3840x2160) or 1080p
- **Bitrate**: 8-12 Mbps
- **Format**: H.264, MP4
- **Duration**: 10-20 seconds (looping)

#### Mobile Video (To Create)
- **File**: `/public/video/hero-mobile.mp4`
- **Resolution**: 720p (1280x720) recommended
- **Bitrate**: 2-4 Mbps
- **Format**: H.264, MP4
- **Duration**: Same as desktop (10-20s)
- **Optimization**: Compressed for mobile bandwidth

#### Poster Image (Optional but Recommended)
- **File**: `/public/video/hero-poster.jpg`
- **Resolution**: 1920x1080
- **Format**: JPEG (optimized)
- **Purpose**: Shows while video loads

## How to Create Mobile-Optimized Video

### Using FFmpeg (Recommended)

```bash
# Install FFmpeg first (https://ffmpeg.org/)

# Create mobile-optimized version (720p, 2.5 Mbps)
ffmpeg -i hero.mp4 \
  -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -b:v 2.5M \
  -maxrate 3M \
  -bufsize 5M \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  hero-mobile.mp4

# Create poster image (first frame)
ffmpeg -i hero.mp4 -ss 00:00:01 -vframes 1 -q:v 2 hero-poster.jpg
```

### Using Online Tools

**HandBrake** (Free, GUI):
1. Open your 4K/1080p video
2. Set dimensions to 1280x720
3. Set quality to RF 28
4. Set average bitrate to 2500 kbps
5. Enable "Web Optimized" (fast start)
6. Export as MP4

**CloudConvert.com**:
1. Upload your video
2. Convert to MP4
3. Set resolution: 720p
4. Set bitrate: 2500 kbps
5. Download optimized version

## Performance Benefits

### Desktop
- High quality 4K/1080p video
- Full bandwidth for best visual experience
- `preload="auto"` for instant playback

### Mobile
- 70-80% smaller file size
- Faster loading on cellular networks
- Reduced data usage for users
- Better battery life
- `preload="metadata"` saves bandwidth

## Testing

### Test on Mobile
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select iPhone or Android device
4. Reload page
5. Check Network tab - should load hero-mobile.mp4

### Test Performance
- **Desktop**: Should load full quality video
- **Mobile**: Should load compressed version
- **Slow 3G**: Video should still play smoothly

## Fallback Behavior

If mobile video doesn't exist:
- Component falls back to desktop video (hero.mp4)
- No errors, seamless experience
- Create mobile video later when you have real footage

## Recommended Video Specs

### Production Quality

**Desktop (hero.mp4)**
- Resolution: 1920x1080 (Full HD)
- Codec: H.264 (High Profile)
- Bitrate: 8-10 Mbps
- Frame Rate: 24-30 fps
- Audio: None (muted)

**Mobile (hero-mobile.mp4)**
- Resolution: 1280x720 (HD)
- Codec: H.264 (Main Profile)
- Bitrate: 2-3 Mbps
- Frame Rate: 24-30 fps
- Audio: None (muted)

### File Size Targets
- Desktop: 15-25 MB for 15-second clip
- Mobile: 4-8 MB for 15-second clip
- Poster: <200 KB

## Future Enhancements

Consider these additional optimizations:

1. **WebM Format**: Add WebM versions for better compression
2. **Adaptive Streaming**: Use HLS/DASH for multiple quality levels
3. **Lazy Loading**: Only load video when hero section is visible
4. **Reduced Motion**: Respect `prefers-reduced-motion` setting
5. **Network-Aware**: Detect connection speed and adjust quality

## Current Status

✅ Mobile detection implemented
✅ Separate source tags for mobile/desktop
✅ Preload optimization
✅ iOS autoplay compatibility
⏳ Mobile video file (hero-mobile.mp4) - create when you have real footage
⏳ Poster image (hero-poster.jpg) - optional but recommended

The site will work perfectly with just the current hero.mp4 until you create the mobile-optimized version!
