import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { logomain } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `const developer = {
              fisrtName: "Rodrigo",
              lastName: "Prestes",
              aka: "rodgo4k",
              skills: repeat () => {
                //product_design();
                //web_development();
                //mobile_development();
                //fullstack();
                //repeat();
                }
              }`;

const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column rotating__image">
            <img src={logomain} className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div className="center__content">
            <p className="text__muted description">
              I dissect intricate user experience challenges to engineer
              integrity-focused solutions that resonate with billions of users.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
