import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div>
            <h1 className="flex items-center">Hey There! Welcome to Chat with Vikrant!- 
                <br/> I am a Software Developer with 2 years of experience. <br/>
                Talk with my AI-replica in the chat-window below.
            </h1>
        </div>
      








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
