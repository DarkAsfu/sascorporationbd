// const Title = ({ title, color }) => {
//     return (
//         <div>
//             <h1 className="text-center mb-6 mt-10 text-3xl  md:text-5xl font-bold">{title}</h1>
//             <div
//                 className="w-48 mx-auto inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-[#0073E6] to-transparent opacity-75"
//             ></div>
//         </div>
//     )
// }

// export default Title;

import PropTypes from 'prop-types';

const Title = ({ title }) => {
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
  return (
    <div className="relative flex flex-col items-center">
      {/* Title */}
      <h1 className="text-center mb-6 mt-10 text-3xl md:text-5xl font-bold">
        {title}
      </h1>

      {/* Line and dot container */}
      <div className="line-dot-container relative flex flex-col items-center">
        {/* Line */}
        <div className="line bg-[#0073e641] w-24 rounded-full h-2"></div>

        {/* Animated Dot */}
        <div className="dot bg-[#0073E6] rounded-full w-4 h-4 -mt-3 animate-bounce-vertical"></div>
      </div>
    </div>
  );
};

export default Title;
