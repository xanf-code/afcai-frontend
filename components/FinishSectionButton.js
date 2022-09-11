function FinishSectionButton({ onClick, children, isDisabled }) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={isDisabled}
      className="mt-6 bg-green-500 text-white rounded py-6 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default FinishSectionButton;
