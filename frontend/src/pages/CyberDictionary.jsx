import { useEffect, useState } from "react";
import api from "../services/api";

function CyberDictionary() {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/dictionary")
      .then(res => {
        setTerms(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-gray-400">Loading...</p>;
  }

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold text-white">
        Cyber Dictionary
      </h1>

      {terms.map(item => (
        <div
          key={item.id}
          className="border border-gray-700 rounded p-4"
        >
          <h3 className="text-white font-medium">
            {item.term}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {item.definition}
          </p>
        </div>
      ))}
    </section>
  );
}

export default CyberDictionary;
