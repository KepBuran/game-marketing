export default function GameInfo({ params }: { params: { title: string, text: string } }) {
  return (
    <p className="text-justify"><b className="font-semibold">{params.title}</b> {params.text}</p>
  )
}