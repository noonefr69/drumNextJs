import Buttons from "@/components/buttons";

export default async function Home() {
  return (
    <div
      id="bgBemola"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="grid grid-cols-2 space-x-2 md:grid-cols-3 space-y-2 xl:grid-cols-6">
        <Buttons
          name={"Kick"}
          keyB={"K"}
          sound={"/sounds/kick-drum-263837.mp3"}
        />
        <Buttons
          name={"HiHat"}
          keyB={"H"}
          sound={"/sounds/hihat-closing-98355.mp3"}
        />
        <Buttons
          name={"Clap"}
          keyB={"C"}
          sound={"/sounds/snare-made-from-clap-101249.mp3"}
        />
        <Buttons
          name={"Cymbal"}
          keyB={"V"}
          sound={"/sounds/long-ride-cymbal-2-36337.mp3"}
        />
        <Buttons
          name={"Snare"}
          keyB={"S"}
          sound={"/sounds/electro-flanged-snare-84432.mp3"}
        />
        <Buttons
          name={"Boom"}
          keyB={"B"}
          sound={"/sounds/boom-2c-snare-237000.mp3"}
        />
      </div>
    </div>
  );
}
