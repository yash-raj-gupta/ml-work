const fs = require('fs').promises;
const VideoSchema = require('../models/VideoModel');

async function getVideoDuration(videoPath) {
    try {
        const fileStats = await fs.stat(videoPath);
        const fileSizeInBytes = fileStats.size;

        // Assuming a constant bitrate of 8000 bps for video encoding
        // Adjust this value based on the actual video encoding properties
        const bitrate = 8000;

        // Calculate duration in seconds using fileSize and bitrate
        const durationInSeconds = fileSizeInBytes / (bitrate * 8 * 5);

        return Math.floor(durationInSeconds);
    } catch (error) {
        console.error('Error getting video duration:', error);
        throw error;
    }
}

exports.addVideo = async (req, res) => {
    const { title, description } = req.body;
    const videoPath = req.file.path;

    try {
        const duration = await getVideoDuration(videoPath);

        const video = new VideoSchema({
            title,
            description:req.file.originalname,
            filename: req.file.filename,
            videoUrl: videoPath,
            duration: duration || 0
        });

        await video.save();

        res.status(200).json({
            message: 'Video Uploaded Successfully',
            video
        });
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(400).json({
            message: 'Video Upload failed',
            error
        });
    }
};

exports.getAllVideos = async (req, res) => {
    try {
        const videos = await VideoSchema.find({});
        res.status(200).json({
            videos
        });
    } catch (error) {
        res.status(400).json({
            message: 'Videos fetch failed',
            error
        });
    }
};
