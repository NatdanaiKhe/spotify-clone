import Card from "../../components/Card";
import MusicCard from "../../components/MusicCard";
import "./home.css";
import { get_recommendation } from "../../services/music.service";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

function Home() {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecommendations = async () => {
      setLoading(true);
      const response = await get_recommendation();
      setLoading(false);
      setRecommendations(response.tracks);
    }

    getRecommendations();
  }, []);

  if(loading){
    return (
      <Loader />
    );
  }else{
    return (
      <Card $width="100%" $height="100%">
        <div className="home-layout">
          <section className="shows_section">
            <h3>Your Shows</h3>
            <div className="card-container">
              {
                recommendations.map((recommendation, index) => (
                  <MusicCard
                    key={index}
                    image={recommendation.album.images[1].url}
                    title={recommendation.name}
                    owner={recommendation.artists[0].name}
                  />
                ))
              }
            </div>
          </section>
          {/* <section className="mfy_section">
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
        </section> */}
        </div>
      </Card>
    );
  }
}

export default Home;
