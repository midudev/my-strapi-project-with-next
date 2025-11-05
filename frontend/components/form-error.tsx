export function FormError({ error }: { error?: string[] }) {
  if (!error) return null

  return error.map((err, index) => (
    <div key={index} className="text-pink-500 text-xs italic mt-1 py-2">{err}</div>
  ))
}