/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main className="bg-red-100 w-screen h-screen flex items-center justify-center flex-col">
      <video autoPlay loop muted playsInline className="video">
        <source src="clouds.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
