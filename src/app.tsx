import { createSignal } from 'solid-js'
import './app.css'

export default function App() {
  const [count, setCount] = createSignal(0)

  return (
    <main class="flex flex-col items-center justify-center h-screen antialiased text-zinc-50 bg-zinc-800">
      <h1 class="text-4xl font-bold">Hello World</h1>
    </main>
  )
}
