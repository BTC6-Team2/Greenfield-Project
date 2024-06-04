import Header from './Header';
import SearchBar from './SearchBar';
import DisplayResult from './DisplayResult';
// import DisplayDetail from './DisplayDetail';
import RenderGroup from './test';
import { BannerLeft } from './BannerLeft';
import { BannerRight } from './BannerRight';
import './SearchBox.css';

export const SearchBox = ({ searchWord, setSearchWord }) => {
    return (
        <div className="search-box">
            <BannerLeft />
            <div className="main-container">
                {/* <Dashboard></Dashboard> */}
                <Header />
                <SearchBar setSearchWord={setSearchWord} tas />
                <DisplayResult searchWord={searchWord} />
                <RenderGroup></RenderGroup>
                {/* <Map geoList={geoList} /> */}
                {/* <Mpp></Mpp> */}
            </div>
            <BannerRight />
        </div>
    );
};
