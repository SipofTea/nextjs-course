// domain.com/news
import Link from "next/link"; 
import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li><Link href="/news/article1"> Article 1 title</Link></li>
                <li><Link href="/news/article2"> Article 2 title</Link ></li>
            </ul>
        </Fragment>
        ) 
}

export default NewsPage; 