import Header from './Header';
import SearchBar from './SearchBar';
import DisplayResult from './DisplayResult';
// import DisplayDetail from './DisplayDetail';
import RenderGroup from './test';

export const SearchBox = ({ searchWord, setSearchWord }) => {
    return (
        <div className="main-container">
            {/* <Dashboard></Dashboard> */}
            <Header />
            <SearchBar setSearchWord={setSearchWord} tas />
            <DisplayResult searchWord={searchWord} />
            <RenderGroup></RenderGroup>
            {/* <Map geoList={geoList} /> */}
            {/* <Mpp></Mpp> */}
        </div>
    );
};
