import React, { useState } from 'react';
import { Mail, ExternalLink, Github } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const skills = [
    "Python", "Machine Learning", "Deep Learning", "Computer Vision", 
    "SQL", "LLMs", "Langchain", "MongoDB", "Tensorflow", "Keras",
    "GitHub", "Flask"
  ];

  const professionalProjects = [
    {
      title: "GPT-4 Powered Enterprise Chatbot",
      description: "Developed and deployed a sophisticated chatbot using GPT-4, Langchain, and FAISS, resulting in 70% reduction in team effort. Implemented RAG and fine-tuned prompts for enhanced output quality.",
      tags: ["Python", "GPT-4", "Langchain", "FAISS", "Flask", "RAG"],
      keyFeatures: [
        "Integrated with Azure OpenAI",
        "Optimized token usage through advanced knowledge base design",
        "Implemented Retrieval Augmented Generation",
        "Deployed as Flask WebApp"
      ]
    },
    {
      title: "Computer Vision for Manufacturing",
      description: "Developed and deployed a YOLOv7-based computer vision system for tire ROI detection, achieving a remarkable improvement in accuracy from 55% to 90%.",
      tags: ["Python", "YOLOv7", "Computer Vision", "Deep Learning"],
      keyFeatures: [
        "90% accuracy in tire ROI detection",
        "Custom model training and deployment",
        "Real-time processing capabilities",
        "Production-ready implementation"
      ]
    }
  ];

  const personalProject = {
    title: "Market Analysis: Global Workout Trends",
    description: "Conducted comprehensive analysis of global workout trends using open source data to help a fitness studio understand workout interests at global and national levels, with particular focus on pandemic impact and geographical preferences.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    highlights: [
      "Identified 2020 as peak year for global 'workout' searches, coinciding with COVID-19 lockdowns",
      "Found 'home workout' dominated during pandemic peak, while 'gym workout' has become most popular in recent trends",
      "Analyzed regional preferences showing United States leading in workout interest compared to Australia and Japan",
      "Discovered Philippines showing higher interest in home workouts compared to Malaysia, suggesting better market potential",
      "Performed comprehensive time series analysis to track shifting workout preferences (2019-2023)",
      "Created correlation analysis between different workout types to understand relationship patterns"
    ],
    githubLink: "https://github.com/umarshakeb/Market-Analysis"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="animate-fadeIn">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Mohd Shakeb Umar
            </h1>
            <p className="text-2xl text-blue-100 mb-6">Lead Data Scientist at AT&T</p>
            <p className="text-lg text-blue-200 max-w-2xl leading-relaxed">
              Transforming data into insights and building AI-powered solutions that make a difference.
            </p>
            <div className="mt-8 flex space-x-4">
              <a 
                href="mailto:azmiumar@gmail.com" 
                className="bg-white text-blue-900 hover:bg-blue-50 transition-all px-6 py-3 rounded-md flex items-center shadow-lg hover:shadow-xl border border-blue-100"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
              <a 
                href="https://linkedin.com/in/mohdshakebumar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-700 text-white hover:bg-blue-600 transition-all px-6 py-3 rounded-md flex items-center shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
            About Me
            <div className="absolute bottom-0 left-0 w-20 h-1 bg-blue-600"></div>
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100 hover:border-blue-100 transition-all">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Dynamic and results-driven software professional with nearly a decade of experience in Python, Machine Learning,
              and Deep Learning. Currently leading data science initiatives at AT&T, with a proven track record of developing
              innovative solutions that drive significant business value.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 rounded-md text-sm font-medium border border-blue-200 hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white shadow-lg p-1 border border-gray-100">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'professional' 
                  ? 'bg-blue-900 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-blue-50'
              }`}
            >
              Professional Projects
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'personal' 
                  ? 'bg-blue-900 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-blue-50'
              }`}
            >
              Personal Projects
            </button>
          </div>
        </div>

        <div className="grid gap-8">
          {activeTab === 'professional' ? (
            professionalProjects.map((project, index) => (
              <Card key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-100">
                <CardHeader className="bg-gradient-to-r from-blue-900 to-gray-900 text-white">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-blue-100 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-800 rounded-md text-sm font-medium border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-gray-900">Key Features:</h4>
                    <ul className="list-none space-y-3">
                      {project.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-100">
              <CardHeader className="bg-gradient-to-r from-blue-900 to-gray-900 text-white">
                <CardTitle className="text-2xl">{personalProject.title}</CardTitle>
                <CardDescription className="text-blue-100 mt-2">
                  {personalProject.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {personalProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-800 rounded-md text-sm font-medium border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-900">Project Highlights:</h4>
                  <ul className="list-none space-y-3">
                    {personalProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={personalProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-gray-900 text-white px-6 py-3 rounded-md hover:shadow-xl transition-all inline-flex hover:-translate-y-0.5"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Project on GitHub</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
          Education
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-blue-600"></div>
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900">PG Diploma in Data Science in Health and Climate Change for Social Impact</h3>
            <p className="text-blue-700 mt-2">IIIT-Delhi | 2023 - 2024</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900">Bachelor of Engineering in Instrumentation and Control</h3>
            <p className="text-blue-700 mt-2">SLIET - Punjab | 2010 - 2013</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;