import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import { Switch } from "@headlessui/react";
import FinishSectionButton from "../components/FinishSectionButton";
import REGISTER_MUTATION from "../graphql/mutations/registerMutation";
import { useMutation } from "@apollo/client";
import useImageStore from "../store/LogoImage";
import Link from "next/link";

const STEPS_AMOUNT = 6;

function Registration() {
  const [formStep, setFormStep] = useState(0);
  const [youthTeamToggle, setYouthTeamToggle] = useState(false);
  const [licensedCoachToggle, setlicensedCoachToggle] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [submitError, setSubmitError] = useState(null);

  const [registerTeam] = useMutation(REGISTER_MUTATION, {
    onError: (error) => {
      console.log(error?.message);
      setSubmitError(error?.message);
    },
  });

  const imageSrc = useImageStore((state) => state.imageSrc);
  const getLogo = useImageStore((state) => state.getLogo);

  const createTeamHandler = (formValue) => {
    registerTeam({
      variables: {
        teamName: formValue.teamName,
        description: formValue.description,
        teamLogo: imageSrc,
        association: formValue.association,
        email: formValue.email,
        phone: formValue.phone,
        website: formValue.website,
        socials: {
          facebook: formValue.facebook,
          instagram: formValue.instagram,
          twitter: formValue.twitter,
          youtube: formValue.youtube,
          linkedin: formValue.linkedin,
        },
        teamAbrieviation: formValue.teamAbrieviation,
        personIncharge: formValue.personIncharge,
        personType: formValue.personType,
        postalCode: formValue.postalCode,
        postalAddress: formValue.postalAddress,
        teamType: formValue.teamType,
        state: formValue.state,
        district: formValue.district,
        teamReputation: formValue.teamReputation,
        disabledCatering: formValue.disabledCatering,
        teamFounded: formValue.teamFounded,
        teamAssociationLink: formValue.teamAssociationLink,
        crsAccess: formValue.crsAccess,
        seniorMensTeamStatus: formValue.seniorMensTeamStatus,
        seniorWomensTeamStatus: formValue.seniorWomensTeamStatus,
        academyType: formValue.academyType,
        youthTeams: youthTeamToggle ? formValue.youthTeams : [],
        licensedCoaches: licensedCoachToggle ? formValue.licensedCoaches : [],
      },
    });
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  async function handleImageUpload() {
    if (!selectedImage) {
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", `${process.env.PRESET_NAME}`);

    getLogo(formData);
  }

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const handleStepCompletion = () => {
    setFormStep((cur) => cur + 1);
  };

  const handleGoBackToPreviousStep = () => {
    setFormStep((cur) => cur - 1);
    /**
     * Trigger Team Name
     * @description Triggers when the back arrow is pressed to preserve state
     */
    trigger("teamName");
  };

  const onSubmit = (values) => {
    createTeamHandler(values);
    handleStepCompletion();
  };

  const finalStep = () => {
    handleImageUpload();
    handleStepCompletion();
  };

  return (
    <div className="max-w-2xl md:mx-auto md:mt-6">
      <h1 className="font-semibold font-IBMSans text-2xl text-black py-2 mt-5 ml-16">
        Team/Academy Registration Form
      </h1>
      <Link href={"/about"}>
        <a>
          <p className="ml-16 text-sm font-IBMSans font-medium text-blue-500 hover:underline underline-offset-4">
            Know More - AFCAI
          </p>
        </a>
      </Link>
      <div className="max-w-xl w-full mb-20 overflow-hidden mt-4">
        <div className="px-16">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            {formStep < STEPS_AMOUNT - 1 && (
              <div className="flex items-center font-medium mb-3">
                {formStep > 0 && (
                  <button
                    onClick={handleGoBackToPreviousStep}
                    type="button"
                    className="focus:outline-none"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      version="1.1"
                      className="w-6 mr-2 fill-current text-gray-300 hover:text-gray-400 focus:outline-none"
                    >
                      <polygon
                        id="Combined-Shape"
                        points="10 13 18 13 18 7 10 7 10 2 2 10 10 18 10 13"
                      ></polygon>
                    </svg>
                  </button>
                )}
                <div className="flex flex-col">
                  Step {formStep + 1} of {STEPS_AMOUNT}
                  <p className="text-sm font-IBMSans text-gray-400 mt-1">
                    * Mandatory Field
                  </p>
                </div>
              </div>
            )}
            {formStep >= 0 && (
              <section
                className={`space-y-4 ${formStep === 0 ? "block" : "hidden"}`}
              >
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Please Enter the Team/Academy/Club name *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("teamName", {
                      required: {
                        value: true,
                        message: "Team/Academy/Club name is required",
                      },
                    })}
                    name="teamName"
                    placeholder="Academy/Team name"
                  />
                  {errors.teamName && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.teamName?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Please Enter the Team/Academy/Club Abrieviation *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("teamAbrieviation", {
                      required: {
                        value: true,
                        message: "Team/Academy/Club abrieviation is required",
                      },
                    })}
                    name="teamAbrieviation"
                    placeholder="Academy/Team Abrieviation"
                  />
                  {errors.teamAbrieviation && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.teamAbrieviation?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Unique information about the Club / Academy ? Each club and
                    academy is unique and we would would like to know about you.
                  </h1>
                  <textarea
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("description")}
                    name="description"
                    placeholder="Give a short description"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Full Name of the person incharge of the Club / Academy *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("personIncharge", {
                      required: {
                        value: true,
                        message: "Person incharge is required",
                      },
                    })}
                    name="personIncharge"
                    placeholder="Person Incharge Name"
                  />
                  {errors.personIncharge && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.personIncharge?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    I am the ? (Please select the appropriate option) *
                  </h1>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                    {...register("personType", {
                      required: {
                        value: true,
                        message: "Person type is required",
                      },
                    })}
                    name="personType"
                  >
                    <option value="">Select...</option>
                    <option value="Founder / Owner / Co-owner">
                      Founder / Owner / Co-owner
                    </option>
                    <option value="Director / CEO / CAO /COO">
                      Director / CEO / CAO /COO
                    </option>
                    <option value="Sports Incharge">Sports Incharge</option>
                    <option value="Authorised Administrator">
                      Authorised Administrator
                    </option>
                    <option value="President / Secretary">
                      President / Secretary
                    </option>
                    <option value="Member">Member</option>
                  </select>
                  {errors.personType && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.personType?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    When was the Club / Academy founded? *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("teamFounded", {
                      required: {
                        value: true,
                        message: "Team founded date is required",
                      },
                    })}
                    name="teamFounded"
                    placeholder="Year of Foundation"
                  />
                  {errors.teamFounded && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.teamFounded?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Postal Address of the Club / Academy *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("postalAddress", {
                      required: {
                        value: true,
                        message: "Postal address is required",
                      },
                    })}
                    name="postalAddress"
                    placeholder="Postal Address"
                  />
                  {errors.postalAddress && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.postalAddress?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Postal Code of the Club / Academy *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("postalCode", {
                      required: {
                        value: true,
                        message: "Postal code is required",
                      },
                    })}
                    name="postalCode"
                    placeholder="Ex: 110001"
                  />
                  {errors.postalCode && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.postalCode?.message}
                    </p>
                  )}
                </div>
                <FinishSectionButton
                  onClick={handleStepCompletion}
                  isDisabled={!isValid}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
            {formStep >= 1 && (
              <section
                className={`space-y-4 ${formStep === 1 ? "block" : "hidden"}`}
              >
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Official Email Address of the Club / Academy *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
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
                    name="email"
                    placeholder="Please enter your email address"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Official Phone Number of the Club / Academy *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    name="phone"
                    placeholder="Please enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Official Website of the Club / Academy
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("website")}
                    name="website"
                    placeholder="Please enter your website"
                  />
                  {errors.website && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.website?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    State in which the Club / Academy operate ? *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("state", {
                      required: {
                        value: true,
                        message: "State is required",
                      },
                    })}
                    name="state"
                    placeholder="Please enter your state"
                  />
                  {errors.state && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.state?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    District in which the Club / Academy operate ? *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("district", {
                      required: {
                        value: true,
                        message: "District is required",
                      },
                    })}
                    name="district"
                    placeholder="Please enter your district"
                  />
                  {errors.district && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.district?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Which District Football Association (DFA) the organisation
                    is affilated to ? - (If Not Affliated put NA) *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("association", {
                      required: {
                        value: true,
                        message: "Association is required",
                      },
                    })}
                    name="association"
                    placeholder="Please enter your association"
                  />
                  {errors.association && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.association?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Add your Social Media Links (Optional)
                  </h1>
                  <div className="flex">
                    <Image
                      width={50}
                      height={50}
                      objectFit="contain"
                      src="/Facebook.png"
                      alt="Facebook"
                    />
                    <input
                      className="w-full border border-gray-300 rounded-md p-2"
                      {...register("facebook")}
                      name="facebook"
                      placeholder="Enter your Facebook page link"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      width={50}
                      height={50}
                      objectFit="contain"
                      src="/Youtube.png"
                      alt="Youtube"
                    />
                    <input
                      className="w-full border border-gray-300 rounded-md p-2"
                      {...register("youtube")}
                      name="youtube"
                      placeholder="Enter your Youtube account link"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      width={50}
                      height={50}
                      objectFit="contain"
                      src="/Twitter.png"
                      alt="Twitter"
                    />
                    <input
                      className="w-full border border-gray-300 rounded-md p-2"
                      {...register("twitter")}
                      name="twitter"
                      placeholder="Enter your Twitter acount link"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      width={50}
                      height={50}
                      objectFit="contain"
                      src="/Instagram.png"
                      alt="Instagram"
                    />
                    <input
                      className="w-full border border-gray-300 rounded-md p-2"
                      {...register("instagram")}
                      name="instagram"
                      placeholder="Enter your Instagram account link"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      width={50}
                      height={50}
                      objectFit="contain"
                      src="/Link.png"
                      alt="Link"
                    />
                    <input
                      className="w-full border border-gray-300 rounded-md p-2"
                      {...register("linkedin")}
                      name="linkedin"
                      placeholder="Enter your Linkedin account/page link"
                    />
                  </div>
                </div>
                <FinishSectionButton
                  onClick={handleStepCompletion}
                  isDisabled={!isValid}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
            {formStep >= 2 && (
              <section
                className={`space-y-4 ${formStep === 2 ? "block" : "hidden"}`}
              >
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    What type of Club / Academy are you registed as ? *
                  </h1>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                    {...register("teamType", {
                      required: {
                        value: true,
                        message: "Team Type is required",
                      },
                    })}
                    name="teamType"
                  >
                    <option value="">Select...</option>
                    <option value="Private (Ltd / Partnership / LLP / Proprietorship)">
                      Private (Ltd / Partnership / LLP / Proprietorship)
                    </option>
                    <option value="Goverment (Central / State / Local / PSU)">
                      Goverment (Central / State / Local / PSU)
                    </option>
                    <option value="Non Profit (Trust / Association / Section 8)">
                      Non Profit (Trust / Association / Section 8)
                    </option>
                    <option value="Institutional (School / College / University)">
                      Institutional (School / College / University)
                    </option>
                  </select>
                  {errors.teamType && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.teamType?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">We are a ? *</h1>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                    {...register("teamReputation", {
                      required: {
                        value: true,
                        message: "Team Reputation is required",
                      },
                    })}
                    name="teamReputation"
                  >
                    <option value="">Select...</option>
                    <option value="Professional Club (ISL / IWL / I League / I League 2)">
                      Professional Club (ISL / IWL / I League / I League 2)
                    </option>
                    <option value="Semi Professional club ( State League / District League)">
                      Semi Professional club ( State League / District League)
                    </option>
                    <option value="Youth Club / Academy ( I League )">
                      Youth Club / Academy ( I League )
                    </option>
                    <option value="Youth Club / Academy ( Local )">
                      Youth Club / Academy ( Local )
                    </option>
                    <option value="Football Schools">Football Schools</option>
                    <option value="Non Registed Clubs (Not registed to local District Football Assocation)">
                      Non Registed Clubs (Not registed to local District
                      Football Assocation)
                    </option>
                  </select>
                  {errors.teamReputation && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.teamReputation?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Type of Association the club is linked to ? *
                  </h1>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                    {...register("teamAssociationLink", {
                      required: {
                        value: true,
                        message: "Team Association Link is required",
                      },
                    })}
                    name="teamAssociationLink"
                  >
                    <option value="">Select...</option>
                    <option value="State">State</option>
                    <option value="District">District</option>
                    <option value="None">None</option>
                  </select>
                  {errors.teamAssociationLink && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.teamAssociationLink?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">Type of the Academy ? *</h1>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                    {...register("academyType", {
                      required: {
                        value: true,
                        message: "Academy Type is required",
                      },
                    })}
                    name="academyType"
                  >
                    <option value="">Select...</option>
                    <option value="Residential">Residential</option>
                    <option value="Non-Residential">Non-Residential</option>
                    <option value="None">None</option>
                  </select>
                  {errors.academyType && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.academyType?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Do you have access to CRS ? *
                  </h1>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                    {...register("crsAccess", {
                      required: {
                        value: true,
                        message: "CRS Access is required",
                      },
                    })}
                    name="crsAccess"
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.crsAccess && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.crsAccess?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Do you have a Seniors Mens Team ? *
                  </h1>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                    {...register("seniorMensTeamStatus", {
                      required: {
                        value: true,
                        message: "Senior Mens Team Status is required",
                      },
                    })}
                    name="seniorMensTeamStatus"
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.seniorMensTeamStatus && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.seniorMensTeamStatus?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Do you have a Seniors Womens Team ? *
                  </h1>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                    {...register("seniorWomensTeamStatus", {
                      required: {
                        value: true,
                        message: "Senior Womens Team Status is required",
                      },
                    })}
                    name="seniorWomensTeamStatus"
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.seniorWomensTeamStatus && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.seniorWomensTeamStatus?.message}
                    </p>
                  )}
                </div>
                <FinishSectionButton
                  onClick={handleStepCompletion}
                  isDisabled={!isValid}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
            {formStep >= 3 && (
              <section
                className={`space-y-4 ${formStep === 3 ? "block" : "hidden"}`}
              >
                <div className="space-y-2">
                  <h1 className="text-gray-500">Do you have Youth Teams ?</h1>
                  <div className="flex flex-row my-2">
                    <h1 className="text-gray-500">No</h1>
                    <Switch
                      checked={youthTeamToggle}
                      onChange={setYouthTeamToggle}
                      className={`mx-2 ${
                        youthTeamToggle ? "bg-blue-600" : "bg-gray-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          youthTeamToggle ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                    <h1 className="text-gray-500">Yes</h1>
                  </div>
                  {youthTeamToggle && (
                    <div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("youthTeams")}
                          type="checkbox"
                          value="U15"
                          name="youthTeams"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">U15</label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("youthTeams")}
                          type="checkbox"
                          value="U18"
                          name="youthTeams"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">U18</label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("youthTeams")}
                          type="checkbox"
                          value="U13"
                          name="youthTeams"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">U13</label>
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    Do you have Licensed Coaches ?
                  </h1>
                  <div className="flex flex-row my-2">
                    <h1 className="text-gray-500">No</h1>
                    <Switch
                      checked={licensedCoachToggle}
                      onChange={setlicensedCoachToggle}
                      className={`mx-2 ${
                        licensedCoachToggle ? "bg-blue-600" : "bg-gray-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          licensedCoachToggle
                            ? "translate-x-6"
                            : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                    <h1 className="text-gray-500">Yes</h1>
                  </div>
                  {licensedCoachToggle && (
                    <div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("licensedCoaches")}
                          name="licensedCoaches"
                          type="checkbox"
                          value="A"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">A License</label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("licensedCoaches")}
                          name="licensedCoaches"
                          type="checkbox"
                          value="B"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">B License</label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("licensedCoaches")}
                          name="licensedCoaches"
                          type="checkbox"
                          value="C"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">C License</label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("licensedCoaches")}
                          name="licensedCoaches"
                          type="checkbox"
                          value="D"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">D License</label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("licensedCoaches")}
                          name="licensedCoaches"
                          type="checkbox"
                          value="E"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">E License</label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          {...register("licensedCoaches")}
                          name="licensedCoaches"
                          type="checkbox"
                          value="Pro"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ml-2">Pro License</label>
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-gray-500">
                    We caters to differently abled people (If YES, Who are you
                    catering to?, If NO put NA) *
                  </h1>
                  <input
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("disabledCatering", {
                      required: true,
                      message:
                        "Please enter the type of the disabled people you are catering to",
                    })}
                    name="disabledCatering"
                    placeholder="Please fill the information."
                  />
                  {errors.disabledCatering && (
                    <p className="text-red-500">
                      {errors.disabledCatering?.message}
                    </p>
                  )}
                </div>
                <FinishSectionButton
                  onClick={handleStepCompletion}
                  isDisabled={!isValid}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
            {formStep >= 4 && (
              <section
                className={`space-y-4 ${formStep === 4 ? "block" : "hidden"}`}
              >
                <input
                  onChange={handleImageChange}
                  accept=".jpg, .jpeg, .png"
                  type="file"
                ></input>

                <FinishSectionButton
                  onClick={finalStep}
                  isDisabled={!selectedImage}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
            {formStep >= 5 && (
              <section
                className={`space-y-4 ${formStep === 5 ? "block" : "hidden"}`}
              >
                <h1>Terms and Conditions</h1>
                <p className="text-gray-600">
                  Please accept the Club / Academy named above as a member of
                  the Association of Football Clubs & Academies in India. This
                  application is unconditional and i/we authorise you to
                  register me/us as a member. I/ we agree to be bound by the
                  constitution of the AFCAI.
                </p>
                <p className="text-gray-600">
                  I am aware that AFCAI is a organsation which is to empower
                  Club / Academies for good governance with a aim to promote
                  growth of Clubs / Academies within their area of operations.
                </p>
                <input
                  value="Agree and Submit"
                  type="submit"
                  className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400"
                />
              </section>
            )}
            {formStep === 6 && (
              <section>
                {submitError != null ? (
                  <h2 className="font-semibold text-3xl mb-8">
                    Something went wrong
                  </h2>
                ) : (
                  <h2 className="font-semibold text-3xl mb-8">
                    Congratulations!
                  </h2>
                )}
                {submitError != null ? (
                  <p className="text-red-500">{submitError}</p>
                ) : (
                  <p className="text-red-500">Thank you for registering</p>
                )}
              </section>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
