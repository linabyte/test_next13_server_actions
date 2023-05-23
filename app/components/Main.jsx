"use client"

import { useState, useEffect } from "react"
import { fetchData } from "../actions_server";

import { useTransition } from "react";

const Main = () => {

    let [isPending, startTransition] = useTransition();
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(0);
    const [url, setUrl] = useState('posts');

    useEffect(() => {
        startTransition(async () => {
            const dataMain = await fetchData(url);
            setData(dataMain);
         })
    }, [status]);

    const handleClick = () => {
        setStatus(status + 1);
        setUrl(url === 'posts' ? 'comments' : 'posts')
    }

    return (
        <div>
            <section>
                <button className="block p-4 bg-sky-600 text-white hover:bg-sky-800" onClick={handleClick}>Obtener {url}</button><br></br>
                <span className="text-white text-sm">Hiciste click {status} veces!</span>
            </section>

            <section className="mt-3 py-3">
            <h1 className="text-lg text-white">{isPending ? `Loading ${url}...` : ''}</h1><br></br>


                {
                    !isPending ? ( 
                        data.map(item => (
                            <div key={item.id}>
                            <h1 className="text-xl text-sky-300">{url === 'posts' ? item.title : item.name}</h1>
                            <p className="text-white">{item.body}</p><br></br>
                            </div>
                        ))
                    ) : ('')
                }
            </section>
        </div>
    )
}

export default Main
