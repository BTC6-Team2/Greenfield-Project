import Header from './Header';
import SearchBar from './SearchBar';
import DisplayResult from './DisplayResult';
import { BannerLeft } from './BannerLeft';
import { BannerRight } from './BannerRight';
import './SearchBox.css';

export const SearchBox = ({ searchWord, setSearchWord }) => {
    return (
        <>
            <Header />
            <div className="search-box">
                <BannerLeft />
                <div className="main-container">
                    <SearchBar setSearchWord={setSearchWord} />
                    <DisplayResult searchWord={searchWord} />
                </div>
                <BannerRight />
            </div>
        </>
    );
};
