import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const router = useRouter();

  const checkSession = () => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      router.push("/backend/admin/dashboard");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.phrase === process.env.PHRASE) {
      router.push("/backend/admin/dashboard");
      localStorage.setItem("access", true);
    } else {
      alert("Incorrect Phrase");
    }
  };

  return (
    <div className="max-w-2xl md:mx-auto md:mt-6 m-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("phrase")}
            placeholder="Enter Phrase Code"
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <input
          className="bg-blue-600 p-2 text-white font-IBMSans rounded-md mt-2"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Login;
