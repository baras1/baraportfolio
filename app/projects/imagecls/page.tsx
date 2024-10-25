"use client";

export default function ImageClassificationProgress() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-900 py-12 px-4">
      {/* Article Header */}
      <article className="w-full max-w-3xl">
        <h1 className="text-5xl font-bold mb-6 text-center">Building an Image Classification Model: Progress Report</h1>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-xl leading-relaxed">
            Image classification is an exciting and challenging task in machine learning. My current project involves creating a model that can identify different objects in images, with a particular focus on butterflies, cats vs. dogs, and human emotions. In this article, I will share the progress I’ve made so far, my challenges, and the next steps on this journey.
          </p>
        </section>

        {/* Insert Image */}
        <div className="mb-8">
          <img src="/imagecls1.png" alt="Model Diagram or Training Results" className="w-full rounded-lg"/>
        </div>

        {/* Progress Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Dataset and Model Selection</h2>
          <p className="text-lg leading-relaxed">
            Choosing the right dataset and model architecture is critical to the success of any machine learning project. For this project, I am working with three datasets: butterfly species classification, cat vs. dog classification, and human emotion detection. As for models, I’ve experimented with TensorFlow, PyTorch, and my own implementations of MLPs and CNNs using NumPy. The model architecture is still being optimized for each dataset.
          </p>

          {/* Dataset Links */}
          <div className="my-6">
            <h3 className="text-2xl font-semibold mb-2">Datasets</h3>
            <ul className="list-disc list-inside text-lg">
              <li>
                <a
                  href="https://www.kaggle.com/datasets/phucthaiv02/butterfly-image-classification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Butterfly Species Dataset
                </a>
              </li>
              <li>
                <a
                  href="https://www.kaggle.com/datasets/mahmoudnoor/high-resolution-catdogbird-image-dataset-13000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Cat, Dog, and Bird Dataset
                </a>
              </li>
              <li>
                <a
                  href="https://www.kaggle.com/datasets/ananthu017/emotion-detection-fer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Human Emotion Dataset
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Challenges Faced</h2>
          <p className="text-lg leading-relaxed">
            I initially struggled with long training times due to the model&apos;s complexity. To combat this, I rented a GPU from services like Paperspace and DigitalOcean. This decision significantly reduced training times by a factor of 10, allowing me to get results much faster. Additionally, deploying the models using FastAPI has proven to be a good step forward in making the models accessible for testing.
          </p>
        </section>

        {/* Insert Image */}
        <div className="w-full rounded-lg my-6">
          <img src="/catdogpred.png" alt="Prediction Results Table" className="w-full rounded-lg"/>
          <img src="/butterflypred.jpg" alt="Prediction Results Table" className="w-full rounded-lg"/>
        </div>

        {/* Current Results Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Current Results</h2>
          <p className="text-lg leading-relaxed">
            Currently, the models achieve about 60-70% accuracy across all datasets. The images included show examples of these results. However, training time remains an issue, likely due to an excess of filters in the convolutional layers causing potential overfitting. Finding the right balance is an ongoing challenge. Although I&apos;ve searched extensively for good datasets, I'm still exploring options for additional resources.
          </p>
        </section>

        {/* Future Goals */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Next Steps</h2>
          <p className="text-lg leading-relaxed">
            Moving forward, I aim to develop a demo that runs on a website where users can upload their own images of animals, emotions, or butterflies and test the accuracy of the models. This will make the project interactive and provide further insights into how well the models perform in real-world scenarios.
          </p>
        </section>

        {/* CNN Code Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">CNN Code Implementation</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-60">
            <code>
{`import torch
import torch.nn as nn
import torch.optim as optim
import random
import matplotlib.pyplot as plt

class CNNModel(nn.Module):
    def __init__(self, num_classes):
        super(CNNModel, self).__init__()
        self.conv1 = nn.Conv2d(3, 16, 3, 1, 1)
        self.conv2 = nn.Conv2d(16, 32, 3, 1, 1)
        self.conv3 = nn.Conv2d(32, 64, 3, 1, 1)
        self.pool1 = nn.AvgPool2d(2,2)
        self.pool2 = nn.AdaptiveAvgPool2d((32, 32))
        self.relu = nn.ReLU()
        self.fc1 = None
        self.fc2 = None
        self.num_classes = num_classes

    def forward(self, x):
        if x.dim() == 3:  
            x = x.unsqueeze(0)
        x = self.pool1(self.relu(self.conv1(x)))
        x = self.pool1(self.relu(self.conv2(x)))
        x = self.pool2(self.relu(self.conv3(x)))
        if self.fc1 is None:
            self._set_fc_layers(x)
        x = x.view(x.size(0), -1)
        x = self.relu(self.fc1(x))
        x = self.fc2(x)
        return x

    def _set_fc_layers(self, x):
        num_features = x.size(1) * x.size(2) * x.size(3)
        self.fc1 = nn.Linear(num_features, 2048).to(x.device)
        self.fc2 = nn.Linear(2048, self.num_classes).to(x.device)
`}
            </code>
          </pre>
        </section>
      </article>
    </div>
  );
}
