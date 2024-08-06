import { Scroll } from "@react-three/drei";

export const MovingDom = () => {

  return (
    <Scroll html>
      <section
        className=" flex flex-col justify-center items-center opacity-0 w-dvw h-dvh bg-transparent text-white text-2xl p-10"
      >
        <div className="flex flex-col justify-center items-center self-start min-w-fit h-[400px]">
          <span className="text-3xl">FLEX InteracTive Web Lecture</span>
          <span className="text-4xl">FLEX iNteracTive Web Lecture</span>
          <span className="text-xl">FLEX inTeracTive Web Lecture</span>
          <span className="text-2xl">FLEX iNtEracTive Web Lecture</span>
          <span className="text-3xl">FLEX iNteRacTive Web Lecture</span>
        </div>
      </section>
      <section
        className=" flex flex-col justify-center items-center opacity-0 w-dvw h-dvh bg-transparent text-white text-2xl p-10"
      >
        <div className="flex flex-col justify-center items-center self-end min-w-fit h-[400px]">
          <span className="text-3xl">FLEX InteracTive Web Lecture</span>
          <span className="text-4xl">FLEX iNteracTive Web Lecture</span>
          <span className="text-xl">FLEX inTeracTive Web Lecture</span>
          <span className="text-2xl">FLEX iNtEracTive Web Lecture</span>
          <span className="text-3xl">FLEX iNteRacTive Web Lecture</span>
        </div>
      </section>
      <section
        className=" flex flex-col justify-center items-center opacity-0 w-dvw h-dvh bg-transparent text-white text-2xl p-10"
      >
        Threejs R3F Drei Cannon
      </section>
      <section
        className="h-[400vh] flex flex-col justify-center items-center opacity-0 w-dvw bg-transparent text-white text-2xl p-10"
      >
        <div className="flex flex-col justify-center items-center self-end min-w-fit h-[400px]">
          <span className="text-3xl">FLEX InteracTive Web Lecture</span>
          <span className="text-4xl">FLEX iNteracTive Web Lecture</span>
          <span className="text-xl">FLEX inTeracTive Web Lecture</span>
          <span className="text-2xl">FLEX iNtEracTive Web Lecture</span>
          <span className="text-3xl">FLEX iNteRacTive Web Lecture</span>
        </div>
      </section>
      <section
        className=" flex flex-col justify-center items-center opacity-0 w-dvw h-dvh bg-transparent text-white text-2xl p-10"
      ></section>
      <section
        className=" flex flex-col justify-center items-center opacity-0 w-dvw h-dvh bg-transparent text-white text-2xl p-10"
      ></section>
      <section
        className=" flex flex-col justify-center items-center opacity-0 w-dvw h-dvh bg-transparent text-white text-2xl p-10"
      ></section>
      <section 
        className=" flex flex-col justify-center items-center opacity-0 w-dvw h-dvh bg-transparent text-white text-2xl p-10"
      >
        {`You've mastered the basics of R3F.`}
        <footer className="absolute bottom-3 text-sm">
          {`You've mastered the basics of R3F.You've mastered the basics of`}
          {`R3F.You've mastered the basics of R3F.You've mastered the basics of`}
          {`R3F.You've mastered the basics of R3F.You've mastered the basics of`}
          {`R3F.`}
        </footer>
      </section>
    </Scroll>
  );
};


