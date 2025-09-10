'use client';

import { PageHeader } from "@/components/page-header";
import { useState } from "react";

export default function PrimeCheckerPage() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckPrime = async () => {
    if (!number) {
      setResult("Please enter a number.");
      return;
    }
    setIsLoading(true);
    setResult("");
    try {
      const response = await fetch(`/api/check-prime?number=${number}`);
      const data = await response.json();
      if (data.error) {
        setResult(`Error: ${data.details}`);
      } else {
        setResult(`${data.number} is ${data.isPrime ? 'a prime number' : 'not a prime number'}.`);
      }
    } catch (error) {
      setResult("An error occurred while checking the number.");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <PageHeader title="Prime Number Checker" description="Check if a number is prime using the Rabin-Miller algorithm."/>
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="border border-gray-300 rounded-md px-3 py-2 text-black"
          />
          <button 
            onClick={handleCheckPrime}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
          >
            {isLoading ? 'Checking...' : 'Check'}
          </button>
        </div>
        {result && <p className="mt-4 text-lg">{result}</p>}
      </div>
    </div>
  );
}
