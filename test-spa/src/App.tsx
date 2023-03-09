import { useEffect, useRef, useState } from 'react';
import { mountRootParcel } from 'single-spa';
import Parcel from 'single-spa-react/parcel'

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <div>
        Look below
      </div>
      <Parcel
        mountParcel={mountRootParcel}
        wrapWith='div'
        config={() => System.import("http://localhost:8080/soldev-test-parcel.js")}
        parcelName="Test-parcel"
      />
    </>
  )
}

export default App
