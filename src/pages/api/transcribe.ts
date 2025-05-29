import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse form data
    const form = formidable({
      uploadDir: path.join(process.cwd(), 'tmp'),
      keepExtensions: true,
    });

    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const videoFile = files.video as formidable.File;
    if (!videoFile) {
      return res.status(400).json({ error: 'No video file provided' });
    }

    // Read the video file
    const videoBuffer = fs.readFileSync(videoFile.filepath);

    // Create a transcription using OpenAI's Whisper API
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(videoFile.filepath),
      model: 'whisper-1',
    });

    // Clean up the temporary file
    fs.unlinkSync(videoFile.filepath);

    // Return the transcription
    return res.status(200).json({ transcript: transcription.text });
  } catch (error) {
    console.error('Error in transcribe API:', error);
    return res.status(500).json({ error: 'Failed to transcribe video' });
  }
} 