import Button from "./Button";
import img from '../assets/home/featured.jpg'

const Card = ({ title, description }) => {
  const customStyle = {
    border: '1px solid black',
    borderBottom: '5px solid black'
  }
  
  return (
    <div className="card  rounded-lg  bg-[#F3F3F3] mb-20">
      <figure>
        <img
          src={img}
          alt={title}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <Button style={customStyle}>ADD TO CARD</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
