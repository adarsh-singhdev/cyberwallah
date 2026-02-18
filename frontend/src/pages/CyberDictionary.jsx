import { useEffect, useState } from "react";
import api from "../services/api";

function CyberDictionary() {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState("A");

  useEffect(() => {
    api.get("/api/dictionary")
      .then(res => {
        setTerms(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const filteredTerms = terms.filter(term => term.term[0].toUpperCase() === selectedLetter);

  if (loading) {
    return <p className="text-gray-400">Loading...</p>;
  }

  return (
    <section className="flex flex-col gap-4 flex-1">
      <h1 className="text-2xl font-semibold text-center text-white mb-2">learn cyber security</h1>
      <div className="flex bg-zinc-900 rounded-lg overflow-hidden flex-1">
        {/* Sidebar Alphabet */}
        <aside className="flex flex-col items-center justify-start py-6 px-2 bg-zinc-950 border-r border-zinc-800 min-w-[60px] h-[calc(100vh-160px)] overflow-y-auto hide-scrollbar">
          <div className="flex flex-col gap-2 w-full">
            {alphabet.map(letter => (
              <button
                key={letter}
                className={`w-8 h-8 rounded text-lg font-semibold text-white transition border border-zinc-700 ${selectedLetter === letter ? "bg-zinc-800 border-white" : "hover:bg-zinc-800"}`}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </aside>
        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold bg-zinc-800 px-4 py-2 rounded border border-zinc-700 text-white">{selectedLetter}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTerms.length === 0 ? (
              <div className="col-span-2 text-center text-gray-400">No terms found for '{selectedLetter}'</div>
            ) : (
              filteredTerms.map(item => (
                <div
                  key={item.id}
                  className="border border-gray-700 rounded-lg bg-zinc-800 p-6 flex flex-col justify-between min-h-[120px]"
                >
                  <div>
                    <h3 className="text-white font-medium text-lg mb-2">{item.term}</h3>
                    <p className="text-sm text-gray-300 mb-4">{item.definition}</p>
                  </div>
                  <button className="self-end bg-transparent border border-zinc-600 text-white px-4 py-1 rounded hover:bg-zinc-700 transition">Read More</button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CyberDictionary;
