import Contador from "@/components/comunicacao/indireta/contador";

export default function PaginaIndireta() {
  return (
    <div className={`
      flex flex-col gap-5 justify-center items-center
    `}>
      <h1 className={`
        text-5xl font-blackmb-10
      `}>
        Comunicação Indireta
      </h1>
      <div className='flex gap-5'>
        <Contador />
        <Contador />
        <Contador />
      </div>
    </div>
  )
}