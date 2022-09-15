function AffiliatedCard({ team }) {
  return (
    <div>
      <p key={team.teamProfileSlug}>{team.teamName}</p>
    </div>
  );
}

export default AffiliatedCard;
