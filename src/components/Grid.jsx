function Grid() {
  const vCount = 16
  const hCount = 60

  return (
    <div id='grid'>
      <div className='lines-h'>
        {Array.from({ length: hCount }, (_, i) => (
          <div key={i} className='line-h' style={{ top: `${i * 60}px` }} />
        ))}
      </div>
      <div className='lines-v'>
        {Array.from({ length: vCount }, (_, i) => (
          <div key={i} className='line-v' style={{ left: `${i * 60}px` }} />
        ))}
      </div>
    </div>
  )
}

export default Grid