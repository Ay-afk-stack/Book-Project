import Button from "../components/Button";
import Navbar from "../components/Navbar";

const CreatePage = () => {
  return (
    <div>
      <Navbar />
      <form class="max-w-sm mx-auto my-10 border-1 rounded-3xl p-10 border-gray-200 shadow-sm">
        <div class="mb-5">
          <label
            for="bookName"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Book name
          </label>
          <input
            type="text"
            id="bookName"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Book Name"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="bookAuthor"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Book author
          </label>
          <input
            type="text"
            placeholder="Enter Book Author"
            id="bookAuthor"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="bookGenre"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Book genre
          </label>
          <input
            type="text"
            id="bookGenre"
            placeholder="Enter Book Genre"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div class="mb-5">
          <label
            for="bookPrice"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Book price
          </label>
          <input
            type="text"
            id="bookPrice"
            placeholder="Enter Book Price"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <Button buttonName={"Create Book"} />
      </form>
    </div>
  );
};

export default CreatePage;
