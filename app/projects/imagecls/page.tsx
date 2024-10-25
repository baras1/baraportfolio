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

        {/* Placeholder for an image */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
            <p>Insert Image Here (e.g., Model Diagram or Training Results)</p>
          </div>
        </div>

        {/* Progress Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Dataset and Model Selection</h2>
          <p className="text-lg leading-relaxed">
            Choosing the right dataset and model architecture is critical to the success of any machine learning project. For this project, I am working with three datasets: butterfly species classification, cat vs. dog classification, and human emotion detection. As for models, I’ve experimented with TensorFlow, PyTorch, and my own implementations of MLPs and CNNs using NumPy. The model architecture is still being optimized for each dataset.
          </p>

          {/* Placeholder for another image */}
          <div className="w-full bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500 my-6">
            <p>Insert Image Here (e.g., Model Comparison Graph)</p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Challenges Faced</h2>
          <p className="text-lg leading-relaxed">
            One of the biggest challenges has been finding the balance between model complexity and computational efficiency. My initial models were too complex and took too long to train, even on small datasets. I have since simplified the models but am still working on achieving a balance that provides accurate predictions without excessive training time. Another challenge has been fine-tuning the models to handle real-world noise in the datasets.
          </p>
        </section>

        {/* Placeholder for further progress */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Current Results</h2>
          <p className="text-lg leading-relaxed">
            The models have shown promising results so far, particularly in the butterfly species dataset. While the cat vs. dog and human emotion models are performing reasonably well, there is still room for improvement, especially in edge cases where the images are not clear. I'm also working on improving the interpretability of the models, possibly using LIME or SHAP to explain their predictions.
          </p>

          {/* Placeholder for another image */}
          <div className="w-full bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500 my-6">
            <p>Insert Image Here (e.g., Prediction Results Table)</p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Next Steps</h2>
          <p className="text-lg leading-relaxed">
            Going forward, I plan to further optimize the model by experimenting with more advanced architectures like self-attention transformers. Additionally, I'll be incorporating more diverse datasets to make the models more robust in real-world applications. Stay tuned for updates!
          </p>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed italic">
            Note: This is an ongoing project, and the article will be updated as I make further progress. Check back soon for new developments!
          </p>
        </section>
      </article>
    </div>
  );
}
