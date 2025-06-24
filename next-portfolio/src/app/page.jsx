export default function Home() {
  return (
    <section className="grid grid-cols-2 items-center justify-items-center max-w-[80%] mx-auto h-[87.3vh]">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">Jonas</h1>
        <p className="mt-2 text-gray-700">
          Hej, jeg hedder Jonas og er studerende på Center for Medie og Kommunikation (CMK) på Roskilde Tekniske Skole. Jeg brænder for webudvikling og digitalt design,
          og jeg udforsker hele tiden nye værktøjer og teknologier for at udvikle mine færdigheder.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get in touch {">"}
        </button>
      </div>
      <div className="flex justify-end">
        <img
          src="jonas.png"
          alt="Jonas"
          className="max-w-[750px] w-full rounded-full"
        />
      </div>
    </section>
  );
}



