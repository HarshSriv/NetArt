import "./MainBody.css";
import { content } from "../assets/data";
const MainBody = () => {
  const { desc1, desc2, desc3, medal, banner } = content;
  return (
    <div className="main-body">
      <div className="left center">
        <img className="trophy" src={medal} alt="Image 1" />
      </div>
      <div className="right">
        <div>
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <br />

          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
        </div>
        <img className="banner" src={banner} alt="Image 2" />
        <p>
          Government of India has awarded the{" "}
          <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
          Joint Managing Director of C.R.I. Group received the award from Smt.
          Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
          Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default MainBody;
