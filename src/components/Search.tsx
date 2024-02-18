import "./Search.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { get_categories, search_api } from "../services/music.service";
import MusicCard from "./MusicCard";

function Search() {
  const [categories, setCategories] = useState<any[]>();
  const [searchResult, setSearchResult] = useState<any[]>();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [onSearch, setOnSearch] = useState(false);

  useEffect(() => {
    const getGetCategories = async () => {
      setLoading(true);
      const response = await get_categories();
      setCategories(response.categories.items);
      setLoading(false);
      console.log(response);
    };

    getGetCategories();
  }, []);

  const searchHandler = async (query: string) => {
    if(query === "") {
      setOnSearch(false);
      return;
    }else{
      setOnSearch(true);
      const search_result = await search_api(query);
      setSearchResult(search_result);
      console.log(search_result);
    }
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Card $width="100%" $height="100%">
        <div className="top-bar">
          <div className="search">
            <div className="navigate-btn-group">
              <button className="navigate-btn">
                <svg
                  height="1.2em"
                  className="arrow"
                  viewBox="0 0 512 512"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                </svg>
              </button>
              <button className="navigate-btn">
                <svg
                  height="1.2em"
                  className="arrow"
                  viewBox="0 0 512 512"
                  style={{ transform: "rotate(90deg)" }}
                >
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                </svg>
              </button>
            </div>
            <div className="search-wrapper">
              <input
                type="text"
                className="search__input"
                placeholder="What do you want to play?"
                onChange={e => {
                  searchHandler(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {onSearch ? (
          <div className="category-wrapper">
            <section className="songs_section">
              <h3>Songs</h3>
              <div className="card-container">
                {searchResult?.tracks.items.map((track: any, index: number) => (
                  <MusicCard
                    key={index}
                    image={track.album.images[0].url}
                    title={track.name}
                    owner={track.artists[0].name}
                  />
                ))}
              </div>
            </section>
            <section className="songs_section">
              <h3>Artists</h3>
              <div className="card-container">
                {
                  searchResult?.artists.items.map((artist: any, index: number) => (
                    <MusicCard
                      key={index}
                      image={artist.images[0].url}
                      title={artist.name}
                      owner={artist.type}
                    />
                  ))
                }
              </div>
            </section>
            <section className="albums_section">
              <h3>Albums</h3>
              <div className="card-container">
                {
                  searchResult?.albums.items.map((album: any, index: number) => (
                    <MusicCard
                      key={index}
                      image={album.images[0].url}
                      title={album.name}
                      owner={album.artists[0].name}
                    />
                  ))
                }
              </div>
            </section>
          </div>
        ) : (
          <div className="category-wrapper">
            <div className="category">
              {categories?.map(category => {
                return (
                  <div className="category__item" key={category.id}>
                    <img
                      src={category.icons[0].url}
                      alt={category.name}
                      className="category__item__img"
                    />
                    <div className="category__item__name">{category.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    );
  }
}

export default Search;
