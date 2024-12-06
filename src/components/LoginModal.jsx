import React from "react";

const LoginModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold ">
            <i className="bi bi-person-circle text-2xl "></i> Login
          </h1>
        </div>
        <div>
          <form>
            <div className="my-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border-2 border-gray-700 min-h-8 p-2 rounded-md shadow-sm focus:ring"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border-2 border-gray-700 min-h-8 p-2 rounded-md shadow-sm focus:ring"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="form-control mt-2">
              <label className="cursor-pointer label">
                <span className="label-text text-sm font-medium text-gray-700">
                  Remember me
                </span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-warning checkbox-xs"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 text-white font-bold py-2 mt-4 border-b border-darkblue rounded-md"
            >
              Login <i className="bi bi-box-arrow-in-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
