

const Button = ({btnText}) => {
    return (
        <button className='btn btn-outline uppercase font-semibold border-0 border-b-4 rounded-b-lg px-8 py-2 mt-8 '>
          {btnText}
        </button>
    );
};

export default Button;