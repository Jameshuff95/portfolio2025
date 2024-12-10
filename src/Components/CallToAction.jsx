import '../css/CallToAction.css';

const CallToAction = () => {
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <button id="callToActionBtn" onClick={handlePreventDefault}>
      View My Work
    </button>
  );
};

export default CallToAction;
