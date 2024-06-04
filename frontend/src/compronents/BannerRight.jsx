import './Banner.css';
export const BannerRight = () => {
    return (
        <aside className="aside-right">
            <h2>詳しくはこちら</h2>
            <p>↓↓↓↓↓↓↓</p>
            <a href="https://www.city.okazaki.lg.jp/1100/1108/1151/p013041_d/fil/guide_book.pdf">
                <img
                    className="gabage"
                    src="./images/gabage.png"
                    alt="ゴミの出し方"
                />
            </a>
        </aside>
    );
};
