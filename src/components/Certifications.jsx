import React from 'react';
import nptelImage from '../assets/nptel.png';
import nptelImage2 from '../assets/marketAnalytics.png'
import blockchainImage2 from '../assets/blockchain.png';
import blockchainImage1 from '../assets/blockchain1.png';

export function Certifications() {
  return (
    <section id="certifications" className="py-10 bg-black-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-left text-white mb-6">Certifications</h2>
        <p className="text-primary text-xl mb-2">
          Here are the certifications that reflect my journey of continuous learning and expertise.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Certification 1 */}
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white">The Bits and Bytes of Computer Networking </h3>
            <p className="text-gray-200">Coursera</p>
            <p className="text-sm text-gray-300">Issued: December 2023</p>
            <a
              href="https://coursera.org/share/ffe3f8286c644e9c18746d1af547311e"
              className="text-black mt-2 inline-block underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>

          {/* Certification 2 */}
          <div className="bg-gradient-to-r from-indigo-400 to-pink-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white">Cloud Computing</h3>
            <p className="text-gray-200">NPTEL</p>
            <p className="text-sm text-gray-300">Issued: April 2024</p>
            <a
              href={nptelImage}
              className="text-black mt-2 inline-block underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>

          {/* Certification 3 */}
          <div className="bg-gradient-to-r from-indigo-400 to-pink-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white">Market Analytics</h3>
            <p className="text-gray-200">NPTEL</p>
            <p className="text-sm text-gray-300">Issued: April 2025</p>
            <a
              href={nptelImage2}
              className="text-black mt-2 inline-block underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>

          {/* Certification 4 */}
          <div className="bg-gradient-to-r from-indigo-400 to-pink-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white">Blockchain Fundamentals</h3>
            <p className="text-gray-200">IBM Career Education Program</p>
            <p className="text-sm text-gray-300">Issued: April 2025</p>
            <a
              href={blockchainImage1}
              className="text-black mt-2 inline-block underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>

          {/* Certification 5 */}
          <div className="bg-gradient-to-r from-indigo-400 to-pink-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white">Blockchain Developer</h3>
            <p className="text-gray-200">IBM Career Education Program</p>
            <p className="text-sm text-gray-300">Issued: April 2025</p>
            <a
              href={blockchainImage2}
              className="text-black mt-2 inline-block underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
