import { useMutation } from "@apollo/client";
import { Fragment, useState } from "react";
import { VERIFY_TEAM } from "../../graphql/mutations/verifyTeam";
import { Dialog, Transition } from "@headlessui/react";
import VerifiedTeamsCard from "./VerifiedTeamsCard";
import { useForm } from "react-hook-form";
import { UPDATE_VERIFIED_TEAM } from "../../graphql/mutations/updateVerifiedTeams";

function VerifiedTeams({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (teamData) => {
    updateClubData(teamData);
    closeModal();
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [deRegister] = useMutation(VERIFY_TEAM, {
    refetchQueries: ["GetVerifiedTeams"],
  });

  const [updateData] = useMutation(UPDATE_VERIFIED_TEAM, {
    refetchQueries: ["GetVerifiedTeams"],
  });

  const deleteClub = (team_id) => {
    deRegister({
      variables: {
        teamId: team_id,
      },
    });
  };

  const updateClubData = (data) => {
    updateData({
      variables: {
        teamId: data.teamId,
        teamName: data.teamName,
        association: data.association,
        email: data.email,
        phone: data.phone,
        website: data.website,
        socials: {
          facebook: data.facebook,
          instagram: data.instagram,
          twitter: data.twitter,
          youtube: data.youtube,
          linkedin: data.linkedin,
        },
        academyType: data.academyType,
        seniorWomensTeamStatus: data.seniorWomensTeamStatus,
        seniorMensTeamStatus: data.seniorMensTeamStatus,
        crsAccess: data.crsAccess,
        teamAssociationLink: data.teamAssociationLink,
        teamFounded: data.teamFounded,
        disabledCatering: data.disabledCatering,
        teamReputation: data.teamReputation,
        district: data.district,
        state: data.state,
        teamType: data.teamType,
        postalAddress: data.postalAddress,
        postalCode: data.postalCode,
        personIncharge: data.personIncharge,
        personType: data.personType,
      },
    });
  };

  return (
    <>
      <div className="flex justify-between">
        <div onClick={openModal} className="cursor-pointer w-full">
          <VerifiedTeamsCard data={data} />
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {/* Change Sad to "" */}
                  <Dialog.Panel className="w-full max-w-xl transform rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="flex">
                      <img
                        className="h-20"
                        src={
                          data.teamLogo == ""
                            ? "https://res.cloudinary.com/dec2lboba/image/upload/v1663854729/AFCAI-Private-Pics/badge-placeholder_dnq38h.png"
                            : data.teamLogo
                        }
                      />
                      <div className="flex flex-col justify-center ml-4 space-y-1">
                        <input
                          className="text-xl font-bold text-gray-700 font-IBMSans ring-1 ring-gray-200 rounded-md flex-1/2"
                          defaultValue={data.teamName}
                          {...register("teamName")}
                        />
                        <h1 className="font-IBMSans text-sm">
                          Website:{" "}
                          <input
                            className="text-sm font-IBMSans ring-1 ring-gray-200 rounded-md"
                            defaultValue={data.website}
                            {...register("website")}
                          />
                        </h1>
                        <h1 className="font-IBMSans text-sm">
                          Postal:{" "}
                          <input
                            defaultValue={data.postalCode}
                            {...register("postalCode")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </h1>
                      </div>
                    </div>
                    <hr className="my-2 h-px bg-gray-200 border-0" />
                    <div className="mt-2">
                      <div className="font-IBMSans space-y-2">
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Team ID:</h1>
                          <input
                            defaultValue={data.teamID}
                            readOnly
                            {...register("teamId")}
                            className="font-semibold flex-1 bg-transparent ring-0 outline-transparent"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Description: </h1>
                          <p className=" text-justify">{data.description}</p>
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Founded: </h1>
                          <input
                            defaultValue={data.teamFounded}
                            {...register("teamFounded")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2 pb-4">
                          <h1 className="font-semibold">Abrieviation: </h1>
                          <p>{data.teamAbrieviation}</p>
                        </div>
                        <h1 className="text-xl font-QuattroBold">Personal: </h1>
                        <hr />
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Person Type: </h1>
                          <select
                            defaultValue={data.personType}
                            {...register("personType")}
                          >
                            <option value="Founder / Owner / Co-owner">
                              Founder / Owner / Co-owner
                            </option>
                            <option value="Director / CEO / CAO /COO">
                              Director / CEO / CAO /COO
                            </option>
                            <option value="Sports Incharge">
                              Sports Incharge
                            </option>
                            <option value="Authorised Administrator">
                              Authorised Administrator
                            </option>
                            <option value="President / Secretary">
                              President / Secretary
                            </option>
                            <option value="Member">Member</option>
                          </select>
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Person Incharge: </h1>
                          <input
                            defaultValue={data.personIncharge}
                            {...register("personIncharge")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Phone: </h1>
                          <input
                            defaultValue={data.phone}
                            {...register("phone")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2 ">
                          <h1 className="font-semibold">Email: </h1>
                          <input
                            defaultValue={data.email}
                            {...register("email")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Address: </h1>
                          <input
                            defaultValue={data.postalAddress}
                            {...register("postalAddress")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">State/UT: </h1>
                          <input
                            defaultValue={data.state}
                            {...register("state")}
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">District: </h1>
                          <input
                            defaultValue={data.district}
                            {...register("district")}
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Association: </h1>
                          <input
                            defaultValue={data.association}
                            {...register("association")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Association Link: </h1>
                          <select
                            defaultValue={data.teamAssociationLink}
                            {...register("teamAssociationLink")}
                          >
                            <option value="State">State</option>
                            <option value="District">District</option>
                            <option value="None">None</option>
                          </select>
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Ownership: </h1>
                          <select
                            defaultValue={data.teamType}
                            {...register("teamType")}
                            className="w-1/2"
                          >
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
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Type: </h1>
                          <select
                            defaultValue={data.teamReputation}
                            {...register("teamReputation")}
                            className="w-1/2"
                          >
                            <option value="Professional Club (ISL / IWL / I League / I League 2)">
                              Professional Club (ISL / IWL / I League / I League
                              2)
                            </option>
                            <option value="Semi Professional club ( State League / District League)">
                              Semi Professional club ( State League / District
                              League)
                            </option>
                            <option value="Youth Club / Academy ( I League )">
                              Youth Club / Academy ( I League )
                            </option>
                            <option value="Youth Club / Academy ( Local )">
                              Youth Club / Academy ( Local )
                            </option>
                            <option value="Football Schools">
                              Football Schools
                            </option>
                            <option value="Non Registed Clubs (Not registed to local District Football Assocation)">
                              Non Registed Clubs (Not registed to local District
                              Football Assocation)
                            </option>
                          </select>
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Senior Mens Team: </h1>
                          <select
                            {...register("seniorMensTeamStatus")}
                            defaultValue={data.seniorMensTeam}
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">
                            Senior Womens Team:{" "}
                          </h1>
                          <select
                            {...register("seniorWomensTeamStatus")}
                            defaultValue={data.seniorWomensTeam}
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">CRS: </h1>
                          <select
                            {...register("crsAccess")}
                            defaultValue={data.crsAccess}
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Academy Type: </h1>
                          <select
                            {...register("academyType")}
                            defaultValue={data.academyType}
                          >
                            <option value="Residential">Residential</option>
                            <option value="Non-Residential">
                              Non-Residential
                            </option>
                            <option value="None">None</option>
                          </select>
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">
                            Catering Dissabled?{" "}
                          </h1>
                          <input
                            defaultValue={data.disabledCatering}
                            {...register("disabledCatering")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Youth Teams: </h1>
                          {data.youthTeams.map((data, index) => (
                            <p key={index}>{data},</p>
                          ))}
                        </div>
                        <div className="flex space-x-2 pb-4">
                          <h1 className="font-semibold">Coaches: </h1>
                          {data.licensedCoaches.map((data, index) => (
                            <p className="break-all" key={index}>
                              {data}
                            </p>
                          ))}
                          <p> Licences</p>
                        </div>
                        <h1 className="text-xl font-QuattroBold">
                          Social Media:{" "}
                        </h1>
                        <hr />
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Facebook: </h1>
                          <input
                            defaultValue={data.socials.facebook}
                            {...register("facebook")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Instagram: </h1>
                          <input
                            defaultValue={data.socials.instagram}
                            {...register("instagram")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Twitter: </h1>
                          <input
                            defaultValue={data.socials.twitter}
                            {...register("twitter")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Youtube: </h1>
                          <input
                            defaultValue={data.socials.youtube}
                            {...register("youtube")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <h1 className="font-semibold">Linkedin: </h1>
                          <input
                            defaultValue={data.socials.linkedin}
                            {...register("linkedin")}
                            className="ring-1 ring-gray-200 rounded-md"
                          />
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                      <div className="space-x-4 flex">
                        <div className="mt-4 space-x-2">
                          <input
                            type="submit"
                            value="Save Changes"
                            className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                          />

                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => {
                              deleteClub(data.teamID);
                              closeModal();
                            }}
                          >
                            Remove Affiliation
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </form>
        </Dialog>
      </Transition>
    </>
  );
}

export default VerifiedTeams;
