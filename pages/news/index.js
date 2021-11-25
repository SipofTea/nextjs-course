// domain.com/news

import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li><a href="/news/article1"> Article 1 title</a></li>
                <li><a href="/news/article2"> Article 2 title</a></li>
            </ul>
        </Fragment>
        ) 
}

export default NewsPage; 