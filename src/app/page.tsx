import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/v.svg"
          alt="V logo"
          width={180}
          height={38}
          priority
        />
        

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-4 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-8"
            href="/chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="light:invert"
              src="/v.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Talk to Vikrant
          </a>
          
        </div>
      </main>
      <footer className="row-start-3 flex gap-10 flex-wrap items-center justify-center">
        <a></a>
        <a></a>
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://medium.com/@vikrant.th2013/exploring-and-leveraging-openais-new-own-multi-agent-framework-swarm-to-build-an-exciting-food-1ce39c454920"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Medium Article
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/programming-vikrant/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Contact Me on Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vikrant101001.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to My Portfolio →
        </a>
      </footer>
    </div>
  );
}
