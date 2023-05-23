"use server";

export async function fetchData(url) {
    return await fetch(`https://jsonplaceholder.typicode.com/${url}`, {cache: 'no-store'})
      .then(res => res.json())
}