"use client"

import { useState, useEffect } from "react"
import { Suspense } from 'react';

const Main = ({fetchData}) => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(0);
    const [url, setUrl] = useState('posts');

    useEffect(() => {

        const dataFetch = async () => {
            const dataMain = await fetchData({url});
            setData(dataMain);
        }

        dataFetch();

    }, [status]);

    const handleClick = () => {
        setStatus(status + 1);
        setUrl(url === 'posts' ? 'comments' : 'posts')
    }

    return (
        <div>
            <section>
                <button onClick={handleClick}>Actualizar {status} - {url}</button>
            </section>

            <Suspense fallback={<h1>Loading Posts...</h1>}>
                <section>
                    {
                    data.map(item => (
                        <div key={item.id}>
                        <h1 className="text-xl text-slate-600">{url === 'posts' ? item.title : item.name}</h1>
                        <p>{item.body}</p><br></br>
                        </div>
                    ))
                    }
                </section>
            </Suspense>

        </div>
    )
}

export default Main
