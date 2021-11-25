// domain.com/news/[anything]

import {useRouter} from 'next/router'; 


function DetailPage() {
    const router = useRouter();
    console.log(router.query.articleId);
    // request item with articleId from api >> dynamic webpage
    return <h1>Super Important</h1>
}

export default DetailPage; 