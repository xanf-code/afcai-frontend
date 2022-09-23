function TeamContent({ data }) {
  return (
    <div className="font-IBMSans space-y-2">
      <div className="flex space-x-2">
        <h1 className="font-semibold">Team ID: </h1>
        <p>{data.teamID}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Description: </h1>
        <p>{data.description}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Founded: </h1>
        <p>{data.teamFounded}</p>
      </div>
      <div className="flex space-x-2 pb-4">
        <h1 className="font-semibold">Abrieviation: </h1>
        <p>{data.teamAbrieviation}</p>
      </div>
      <h1 className="text-xl font-QuattroBold">Personal Details: </h1>
      <hr />
      <div className="flex space-x-2">
        <h1 className="font-semibold">Person Type: </h1>
        <p>{data.personType}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Person Incharge: </h1>
        <p>{data.personIncharge}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Phone: </h1>
        <p>{data.phone}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Email: </h1>
        <p>{data.email}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Address: </h1>
        <p>{data.postalAddress}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">State/UT: </h1>
        <p>{data.state}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">District: </h1>
        <p>{data.district}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Association: </h1>
        <p>{data.association}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Association Link: </h1>
        <p>{data.teamAssociationLink}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Ownership: </h1>
        <p>{data.teamType}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Type: </h1>
        <p>{data.teamReputation}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Senior Mens Team: </h1>
        <p>{data.seniorMensTeamStatus == "Yes" ? "✅ " : "❎ "}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Senior Womens Team: </h1>
        <p>{data.seniorWomensTeamStatus == "Yes" ? "✅" : "❎"}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">CRS: </h1>
        <p>{data.crsAccess == "Yes" ? "✅" : "❎"}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Academy Type: </h1>
        <p>{data.academyType}</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Catering Dissabled? </h1>
        <p>{data.disabledCatering}</p>
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
          <p key={index}>{data} License,</p>
        ))}
      </div>
      <h1 className="text-xl font-QuattroBold">Social Media Details: </h1>
      <hr />
      <div className="flex space-x-2">
        <h1 className="font-semibold">Facebook: </h1>
        <a className="truncate" href={data.socials.facebook} target="_blank">
          {data.socials.facebook == "" ? "❎" : data.socials.facebook}
        </a>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Instagram: </h1>
        <a className="truncate" href={data.socials.instagram} target="_blank">
          {data.socials.instagram == "" ? "❎" : data.socials.instagram}
        </a>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Twitter: </h1>
        <a className="truncate" href={data.socials.twitter} target="_blank">
          {data.socials.twitter == "" ? "❎" : data.socials.twitter}
        </a>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Youtube: </h1>
        <a className="truncate" href={data.socials.youtube} target="_blank">
          {data.socials.youtube == "" ? "❎" : data.socials.youtube}
        </a>
      </div>
      <div className="flex space-x-2">
        <h1 className="font-semibold">Linkedin: </h1>
        <a className="truncate" href={data.socials.linkedin} target="_blank">
          {data.socials.linkedin == "" ? "❎" : data.socials.linkedin}
        </a>
      </div>
      <hr />
    </div>
  );
}

export default TeamContent;
