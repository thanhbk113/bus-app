import NavBar from "../navbar/NavBar";
import "./tutorial.scss";

const TutorialBus = () => {
  return (
    <div>
      <NavBar />
      <h1>
        Xem video hướng dẫn về các tính năng{" "}
        <a href="https://streamable.com/mmw8tc" target="_blank">
          tại đây
        </a>
      </h1>
    </div>
  );
};

export default TutorialBus;
