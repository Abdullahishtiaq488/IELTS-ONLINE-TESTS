import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to IELTS Online Practice Tests</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your comprehensive platform for IELTS preparation and practice.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Practice Tests</h2>
          <p className="text-gray-600">
            Access a wide range of IELTS practice tests for all sections: Listening, Reading, Writing, and Speaking.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Expert Tips</h2>
          <p className="text-gray-600">
            Get valuable tips and strategies from IELTS experts to improve your performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Live Lessons</h2>
          <p className="text-gray-600">
            Join live interactive sessions with experienced IELTS instructors.
          </p>
        </div>
      </div>
    </div>
  );
}
