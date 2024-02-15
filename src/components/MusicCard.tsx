import Card from "./Card";
import "./MusicCard.css";
import PlayIcon from "../assets/icons/play.svg";

const MusicCard: React.FC<{ image: string; title: string; owner: string }> = ({
  image,
  title,
  owner,
}) => {
  return (
    <Card $radius="8px">
      <div className="music-card">
        <div className="cover-wrapper">
          <div className="play-circle-wrapper">
            <div className="play-circle">
              <img src={PlayIcon} />
            </div>
          </div>
          <img className="cover" src={image} alt={title} />
        </div>
        <div className="music-card-content">
          <h4>{title}</h4>
          <p>{owner}</p>
        </div>
      </div>
    </Card>
  );
};

export default MusicCard;
