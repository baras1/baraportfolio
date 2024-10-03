"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  logo: string;
  photos: { src: string; caption: string }[];
}

const experiences: Experience[] = [
  {
    title: 'Data Scientist',
    company: 'DataOn',
    date: 'Jul 2024 - Sep 2024',
    location: 'Kota Tangerang Selatan, Indonesia',
    description: [
      'Developed machine learning models for prediction classification on tabular data and contributed to NLP projects.',
      'Developed a self-attention transformer model and convolutional neural network model for tabular model binary classification.',
      'Applied machine learning models including decision trees, random forests, gradient boosting, and neural networks.',
      'Leveraged PyTorch, Sklearn, TensorFlow, Numpy, and pandas for analysis and optimization.',
      'Packaged and validated data using FastAPI and Pydantic for scalable APIs.',
      'Gained insights into the end-to-end process of model development and API integration.',
    ],
    logo: '/dataon.png',
    photos: [
      { src: '/dataon1.jpg', caption: 'HR Development Team' },
      { src: '/dataon2.jpg', caption: 'Data Science Team' },
    ],
  },
  {
    title: 'Driverless Software Engineer',
    company: 'UW Formula Motorsports',
    date: 'Feb 2024 - Jun 2024',
    location: 'Seattle, WA',
    description: [
      'Developed and optimized path planning algorithms utilizing PID controllers for autonomous navigation.',
      'Used ROS with Python to synchronize nodes for vision, estimation, planning, and controls.',
    ],
    logo: '/uw_formula.png',
    photos: [],
  },
  {
    title: 'Aerodynamics Engineer',
    company: 'UW Formula Motorsports',
    date: 'Feb 2023 - Feb 2024',
    location: 'Hybrid',
    description: [
      'Assisted with layups using pre-impregnated carbon fiber.',
      'Designed and tested rear wing designs using CFD simulations.',
    ],
    logo: '/uw_formula.png',
    photos: [],
  },
  {
    title: 'Market Research Analyst',
    company: 'Indonesia Defence Services',
    date: 'Jul 2023 - Sep 2023',
    location: 'Central Jakarta, Indonesia',
    description: [
      'Conducted on-site research on golf simulator studios and driving ranges in the Jakarta and Tangerang region.',
      'Developed a detailed market analysis presentation for a proposed golf simulator studio using Google Slides.',
      'Created concise, visually engaging research reports using Canva and Google Sheets.',
    ],
    logo: '/idslogo.png',
    photos: [],
  },
  {
    title: 'Cataloger, South East Asian Department',
    company: 'University of Washington',
    date: 'Nov 2022 - Jun 2023',
    location: 'Seattle, WA',
    description: [
      'Recorded and cataloged books from the library’s sub-basement.',
      'Proficient in using OCLC and Ex Libris Alma.',
    ],
    logo: '/uwlogo.png',
    photos: [],
  },
  {
    title: 'Research Analyst and Aerospace Engineering Intern',
    company: 'Indonesia Defence Services',
    date: 'May 2022 - Sep 2022',
    location: 'Central Jakarta, Indonesia',
    description: [
      'Obtained engineering experience while assisting on CASA C-212 Aviocar MRO project.',
      'Developed marketing skills as a procurement manager for clients on GeBiz.',
    ],
    logo: '/idslogo.png',
    photos: [
      { src: '/ids1.png', caption: 'Working on CASA C-212 project' },
      { src: '/ids4.png', caption: 'Working on CASA C-212 project' },
    ],
  },
  {
    title: 'Software Developer',
    company: 'Mfreshflowers',
    date: 'Aug 2021 - Mar 2022',
    location: 'Remote',
    description: [
      'Developed an accounting program to replace manual bookkeeping methods.',
      'Learned pandas (data serialization) and Tkinter (GUI) for the project.',
    ],
    logo: '/mfreshflowers.png',
    photos: [],
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [showImage, setShowImage] = useState<{ index: number; show: boolean }>({ index: 0, show: false });

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
    setShowImage({ index: 0, show: false });
  };

  const handleImageClick = (index: number) => {
    setShowImage({ index, show: true });
  };

  const handleImageClose = () => {
    setShowImage({ index: 0, show: false });
  };

  const nextImage = () => {
    if (selectedExperience) {
      setShowImage((prev) => ({
        ...prev,
        index: (prev.index + 1) % selectedExperience.photos.length,
      }));
    }
  };

  const prevImage = () => {
    if (selectedExperience) {
      setShowImage((prev) => ({
        ...prev,
        index: (prev.index - 1 + selectedExperience.photos.length) % selectedExperience.photos.length,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-900">My Experiences</h1>
        <p className="text-center text-sm mb-6 text-gray-600">*Click the experience for more detail*</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg cursor-pointer hover:bg-gray-50 shadow-lg border border-gray-300"
              onClick={() => handleExperienceClick(experience)}
            >
              <Image src={experience.logo} alt={experience.company} width={100} height={100} className="rounded-lg mx-auto" />
              <h2 className="text-2xl font-bold mt-4 text-center text-gray-900">{experience.title}</h2>
              <p className="text-center text-gray-500">{experience.date} · {experience.location}</p>
            </div>
          ))}
        </div>

        {selectedExperience && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white text-black p-6 rounded-lg relative w-3/4 max-h-[90vh] overflow-auto">
              <button className="absolute top-4 right-4 text-3xl hover:text-red-600" onClick={closeModal}>X</button>

              {!showImage.show ? (
                <>
                  <h2 className="text-4xl font-bold mb-2">{selectedExperience.title}</h2>
                  <p className="text-gray-600 italic">{selectedExperience.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{selectedExperience.date} · {selectedExperience.location}</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    {selectedExperience.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900">Photos from this experience:</h3>
                  <div className="flex space-x-4">
                    {selectedExperience.photos && selectedExperience.photos.length > 0 ? (
                      selectedExperience.photos.map((photo, idx) => (
                        <img
                          key={idx}
                          src={photo.src}
                          alt={photo.caption}
                          className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(idx)}
                        />
                      ))
                    ) : (
                      <p className="text-gray-500">No photos available for this experience.</p>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <button onClick={handleImageClose} className="self-start mb-2 hover:text-blue-500">
                    ← Back to description
                  </button>
                  <div className="relative">
                    <img
                      src={selectedExperience.photos[showImage.index].src}
                      alt={selectedExperience.photos[showImage.index].caption}
                      className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />
                    <p className="text-center text-gray-600 mt-2">{selectedExperience.photos[showImage.index].caption}</p>
                    <button
                      className="absolute left-0 top-1/2 text-2xl text-white bg-black bg-opacity-50 p-2 rounded-full transform -translate-y-1/2"
                      onClick={prevImage}
                    >
                      ←
                    </button>
                    <button
                      className="absolute right-0 top-1/2 text-2xl text-white bg-black bg-opacity-50 p-2 rounded-full transform -translate-y-1/2"
                      onClick={nextImage}
                    >
                      →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
