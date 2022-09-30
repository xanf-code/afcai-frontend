import { useMutation } from "@apollo/client";
import { Fragment, useState } from "react";
import { VERIFY_TEAM } from "../../graphql/mutations/verifyTeam";
import { Dialog, Transition } from "@headlessui/react";
import TeamContent from "./TeamContent";
import VerifiedTeamsCard from "./VerifiedTeamsCard";

function VerifiedTeams({ team }) {
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

  const deleteClub = (team_id) => {
    deRegister({
      variables: {
        teamId: team_id,
      },
    });
  };

  return (
    <>
      <div className="flex justify-between">
        <div onClick={openModal} className="cursor-pointer w-full">
          <VerifiedTeamsCard data={team} />
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
                        team.teamLogo == ""
                          ? "https://res.cloudinary.com/dec2lboba/image/upload/v1663854729/AFCAI-Private-Pics/badge-placeholder_dnq38h.png"
                          : team.teamLogo
                      }
                    />
                    <div className="flex flex-col justify-center ml-4 space-y-1">
                      <h1 className="text-2xl font-bold leading-6 text-gray-700 font-IBMSans tracking-wide ">
                        {team.teamName}
                      </h1>
                      <h1 className="font-IBMSans text-sm">
                        Website: <span>{team.website}</span>
                      </h1>
                      <h1 className="font-IBMSans text-sm">
                        Postal: <span>{team.postalCode}</span>
                      </h1>
                    </div>
                  </div>
                  <hr className="my-2 h-px bg-gray-200 border-0" />
                  <div className="mt-2">
                    <TeamContent data={team} />
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
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => {
                            deleteClub(team.teamID);
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
        </Dialog>
      </Transition>
    </>
  );
}

export default VerifiedTeams;
