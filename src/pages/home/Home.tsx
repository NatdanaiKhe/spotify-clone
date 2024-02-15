import Card from "../../components/Card";
import MusicCard from "../../components/MusicCard";
import "./home.css";

function index() {
  return (
    <Card $width="100%" $height="100%">
      <div className="home-layout">
        <section className="shows_section">
          <h3>Your Shows</h3>
          <div className="card-container">
            {[...Array(7)].map((_, index) => (
              <MusicCard
                key={index}
                image="https://via.placeholder.com/150x150"
                title="Lorem"
                owner="Lorem"
              />
            ))}
          </div>
        </section>
        <section className="mfy_section">
          <h3>Made For You</h3>
          <div className="card-container">
            {[...Array(7)].map((_, index) => (
              <MusicCard
                key={index}
                image="https://via.placeholder.com/150x150"
                title="Lorem"
                owner="Lorem"
              />
            ))}
          </div>
        </section>
        <section className="mfy_section">
          <h3>Recommended</h3>
          <div className="card-container">
            {[...Array(7)].map((_, index) => (
              <MusicCard
                key={index}
                image="https://via.placeholder.com/150x150"
                title="Lorem"
                owner="Lorem"
              />
            ))}
          </div>
        </section>
      </div>
    </Card>
  );
}

export default index;
