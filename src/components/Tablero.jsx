import Casillero from "./Casillero"

function Tablero() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-slate-500 p-3">
      <Casillero />
      <Casillero />
      <Casillero />
      <Casillero />
      <Casillero />
      <Casillero />
      <Casillero />
      <Casillero />
      <Casillero />
    </div>
  )
}

export default Tablero