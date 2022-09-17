import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT_QUERY } from "../graphql/mutations/createContactQuery";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Connect() {
  const [addContact, { loading, error }] = useMutation(CREATE_CONTACT_QUERY);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    addContact({
      variables: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      },
    }).then(() => {
      if (!loading && error === undefined) {
        reset(),
          toast.success("We will get back to you soon ⚡️", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
          });
      }
    });
  };

  return (
    <div className="max-w-3xl md:mx-auto md:mt-6 m-5">
      <ToastContainer />
      <div>
        <h1 className="font-semibold font-IBMSans text-2xl md:text-4xl text-black py-3">
          Contact Us
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your Name
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="mb-2 text-sm text-red-600">{errors.name?.message}</p>
          )}
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your email
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@team.com"
          />
          {errors.email && (
            <p className="mb-2 text-sm text-red-600">{errors.email?.message}</p>
          )}
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your Phone Number
          </label>
          <input
            {...register("phone", {
              required: {
                value: true,
                message: "Phone is required",
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="mb-2 text-sm text-red-600">{errors.phone?.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Subject
          </label>
          <input
            {...register("subject", {
              required: {
                value: true,
                message: "Subject is required",
              },
            })}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Let us know how we can help you"
          />
          {errors.subject && (
            <p className="mb-2 text-sm text-red-600">
              {errors.subject?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your message
          </label>
          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "Message is required",
              },
            })}
            rows="4"
            className="mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Your message..."
          ></textarea>
          {errors.message && (
            <p className="mb-2 text-sm text-red-600">
              {errors.message?.message}
            </p>
          )}
        </div>
        <input
          // disabled={!isValid}
          type="submit"
          className="cursor-pointer disabled:cursor-not-allowed bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400"
        />
      </form>
      <p className="mt-4 mb-2 text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:underline">
          contact@afcai.in
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:underline">
          +91-9113881745
        </a>
      </p>
    </div>
  );
}
