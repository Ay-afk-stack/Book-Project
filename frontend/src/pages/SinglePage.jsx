import { Link } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const SinglePage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 flex items-center justify-center py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Title</h2>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Author: </span>
                  <span className="text-gray-600 ">Ayush</span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Genre: </span>
                  <span className="text-gray-600 ">Action</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">Price: </span>
                <span className="text-gray-600 ">999</span>
              </div>
              <div className="my-2 space-x-2">
                <Link
                  to={"/edit-page"}
                  className="text-white bg-green-500 p-2 font-semibold rounded-xl px-5"
                >
                  Edit
                </Link>
                <Button buttonName={"Delete"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
