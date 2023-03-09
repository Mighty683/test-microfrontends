import { useEffect, useRef, useState } from 'react';
function App() {
  const containerRef = useRef(null);
  useEffect(() => {
    System.import("http://localhost:8080/soldev-test-parcel.js").then(module => {
      module.default(containerRef.current, 'Test parcel');
    });
  }, [])

  return (
    <>
      <div>
        Look below
      </div>
      <div ref={containerRef} />
    </>
  )
}

export default App
