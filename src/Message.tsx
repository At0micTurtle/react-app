export default function Message() {
const name = ''

  if (name) {
    return <h1 className="text-6xl underline">Hello {name}</h1>
  } else {
    return <h1 className="text-6xl underline">Hello World</h1>
  }
}