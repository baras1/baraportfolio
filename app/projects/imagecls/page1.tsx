"use client";

import { useState } from "react";

export default function ImageClassification() {
  const [selectedDataset, setSelectedDataset] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [prediction, setPrediction] = useState("");

  // Handler functions
  const handleDatasetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDataset(e.target.value);
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleClassify = async () => {
    if (image && selectedModel && selectedDataset) {
      setPrediction("Predicted Label: Butterfly Monarch"); // Mock prediction for now
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900 py-8 px-4">
      {/* Section 1: Demo */}
      <h1 className="text-4xl font-bold mb-6">Image Classification Demo</h1>

      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Select Dataset</h2>
        <select
          className="w-full p-3 border border-gray-300 rounded-md mb-6"
          onChange={handleDatasetChange}
        >
          <option value="">-- Select a dataset --</option>
          <option value="butterflies">Butterfly Species</option>
          <option value="catdog">Cat or Dog?</option>
          <option value="humanemotion">Human Emotion</option>
        </select>

        {selectedDataset === "butterflies" && (
          <p className="text-gray-700">Recognizes species like Monarch, Swallowtail, and Painted Lady.</p>
        )}
        {selectedDataset === "catdog" && (
          <p className="text-gray-700">Recognizes if it&apos;s a cat or a dog.</p>
        )}
        {selectedDataset === "humanemotion" && (
          <p className="text-gray-700">Recognizes emotions like happy, sad, and angry.</p>
        )}

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Select Model</h2>
        <select
          className="w-full p-3 border border-gray-300 rounded-md mb-6"
          onChange={handleModelChange}
        >
          <option value="">-- Select a model --</option>
          <option value="tensorflow">TensorFlow</option>
          <option value="pytorch">PyTorch</option>
          <option value="mlp">Numpy MLP</option>
          <option value="cnn">Numpy CNN</option>
        </select>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Upload Image</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} className="mb-6" />

        <button
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={handleClassify}
        >
          Classify
        </button>

        {prediction && (
          <div className="mt-6 p-4 bg-gray-100 text-center rounded-lg">
            <p className="text-lg font-semibold">{prediction}</p>
          </div>
        )}
      </div>

      {/* Section 2: Code Section */}
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Code Implementation</h2>
        <div className="flex justify-around mb-4">
          <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400">TensorFlow</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400">PyTorch</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400">Numpy MLP</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400">Numpy CNN</button>
        </div>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-60">
          <code>{`# TensorFlow model code here`}</code>
        </pre>

        <a
          href="https://github.com/your-github-repo"
          className="mt-4 block text-blue-600 underline text-center"
        >
          View full project on GitHub
        </a>
      </div>

      {/* Section 3: Mathematics Section */}
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Mathematics of Models</h2>
        <div className="flex justify-around mb-4">
          <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400">MLP</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400">CNN</button>
        </div>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-60">
          <code>{`# MLP mathematics in LaTeX`}</code>
        </pre>
      </div>
    </div>
  );
}
