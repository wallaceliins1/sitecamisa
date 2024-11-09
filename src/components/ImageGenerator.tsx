import React, { useState } from 'react';
import { Wand2, Image as ImageIcon, RotateCcw, Download } from 'lucide-react';
import Replicate from 'replicate';
import type { ReplicateResponse, GenerationError } from '../types/replicate';

const MODEL_VERSION = "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b";

const replicate = new Replicate({
  auth: import.meta.env.VITE_REPLICATE_API_TOKEN || '',
});

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [error, setError] = useState<string>('');

  const handleGenerate = async () => {
    if (!import.meta.env.VITE_REPLICATE_API_TOKEN) {
      setError('API token not configured. Please check your environment variables.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const output = await replicate.run(
        MODEL_VERSION,
        {
          input: {
            prompt,
            negative_prompt: "low quality, blurry, distorted",
            width: 768,
            height: 768,
            num_outputs: 1,
            scheduler: "K_EULER",
            num_inference_steps: 50,
            guidance_scale: 7.5,
          }
        }
      ) as string[];

      if (!output || !Array.isArray(output) || output.length === 0) {
        throw new Error('No image was generated. Please try again.');
      }

      setGeneratedImage(output[0]);
    } catch (err) {
      const error = err as GenerationError;
      const errorMessage = error.message || 'Failed to generate image. Please try again.';
      
      if (error.status === 401) {
        setError('Invalid API token. Please check your configuration.');
      } else if (error.status === 429) {
        setError('Rate limit exceeded. Please try again later.');
      } else {
        setError(errorMessage);
      }
      
      console.error('Image generation error:', {
        message: errorMessage,
        status: error.status,
        details: error.details
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!generatedImage) return;
    
    try {
      const response = await fetch(generatedImage);
      if (!response.ok) throw new Error('Failed to download image');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      const error = err as Error;
      setError(`Failed to download image: ${error.message}`);
      console.error('Download error:', error);
    }
  };

  const handleReset = () => {
    setGeneratedImage('');
    setError('');
    setPrompt('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          Describe your design
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., A cosmic astronaut riding a skateboard"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <RotateCcw className="animate-spin mr-2" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Wand2 className="mr-2" />
                <span>Generate</span>
              </>
            )}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-md">
            {error}
          </p>
        )}
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
        {generatedImage ? (
          <div className="relative">
            <img
              src={generatedImage}
              alt="Generated design"
              className="max-w-full h-auto rounded-lg"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={handleReset}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                title="Reset"
              >
                <RotateCcw size={20} />
              </button>
              <button
                onClick={handleDownload}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                title="Download"
              >
                <Download size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="py-12">
            <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">
              Your generated design will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;