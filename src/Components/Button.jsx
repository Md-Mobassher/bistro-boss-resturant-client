

const Button = ({children, style}) => {
    return (
        <button  style={style} className='btn btn-outline uppercase font-semibold border-1 border-b-[5px] rounded-b-lg px-8 py-2 mt-8 '>
          {children}
        </button>
    );
};

export default Button;