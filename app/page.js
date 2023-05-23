
import Main from "./components/Main";

export default async function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-slate-800">
          <h1 className="text-lg text-white">Ejemplo Next Js v13.4.3</h1>
          <h1 className="text-sm text-white">😎 Juan Molina - 23/05/2023</h1>
          <h1 className="text-md text-sky-300">📘 Contenido: app router, server and client components, actions server, useState, useEffect, useTransition, fetch</h1>
          <h1 className="text-md text-sky-300">🧾 API: jsonplaceholder</h1>
          <h1 className="text-md text-sky-300">🎨 Style: TailwindCSS</h1><br></br>
          <Main />
      </main>
    )
}
