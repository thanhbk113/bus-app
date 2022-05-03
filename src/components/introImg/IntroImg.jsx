import "./introImg.scss";

const IntroImg = () => {
  return (
    <div className="introContainer">
      <img
        alt=""
        src="https://i.ibb.co/gZfxrhR/danh-sach-lo-trinh-cac-tuyen-xe-buyt-tphcm-nam-2019-53-4524.jpg"
      />
      <div className="textContainer">
        <span>Bus App</span>
        <h1>Đưa bạn đến bất kì đâu</h1>
        <span>An toàn,tiện lợi ,thoải mái</span>
      </div>
    </div>
  );
};

export default IntroImg;
