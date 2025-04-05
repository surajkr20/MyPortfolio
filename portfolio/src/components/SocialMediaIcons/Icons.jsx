
import "./Icons.css";
import leetcode from '../../assets/img/leetcode1.png'

const Icons = () => {

  return (
    <>
      {/* linkedIn icon */}
      <div className="social-container">
        {/* LinkedIn Icon */}
        <a
          id="icon-cover"
          href="https://www.linkedin.com/in/suraj-kumar-5b48b9254/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors  dark:bg-light bg-dark p-2 rounded-full"
        >
          <i className="fab fa-linkedin text-2xl fill-current  text-light dark:text-dark"></i>
        </a>

        {/* leetcode Icon */}
        <a
          id="icon-cover"
          href="https://leetcode.com/u/Suraj_kr78/"
          target="_blank"
          className="text-white transition-colors dark:bg-light bg-dark p-2 rounded-full flex items-center justify-center"
        >
          <img src={leetcode} alt="leetcode"/>
        </a>

        {/* GitHub Icon */}
        <a
          id="icon-cover"
          href="https://github.com/surajkr20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors  dark:bg-light bg-dark p-2 rounded-full"
        >
          <i className="fab fa-github text-2xl fill-current  text-light dark:text-dark"></i>
        </a>

        {/* X (formerly Twitter) Icon */}
        <a
          id="icon-cover"
          href="https://x.com/Abhinav_Suraj02"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  transition-colors  dark:bg-light bg-dark p-2 rounded-full"
        >
          <i className="fab fa-twitter text-2xl fill-current text-light dark:text-dark"></i>
        </a>
      </div>
    </>
  );
};

export default Icons;
