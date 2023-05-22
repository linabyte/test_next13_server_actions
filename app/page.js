
import Main from "./components/Main";


export default function Home() {
  
  // const data = await fetchData();
  
  async function fetchData ({url}) {
  
    "use server";
  
    return await fetch(`https://jsonplaceholder.typicode.com/${url}`, {cache: 'no-store'})
      .then(res => res.json())
  }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Linabyte</h1>
        <Main fetchData={fetchData} />

      </main>
    )
}
