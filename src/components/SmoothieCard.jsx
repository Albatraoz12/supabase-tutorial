/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const SmoothieCard = ({ smoothie }) => {
  return (
    <div>
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className='rating'>{smoothie.rating}</div>
    </div>
  );
};

export default SmoothieCard;
