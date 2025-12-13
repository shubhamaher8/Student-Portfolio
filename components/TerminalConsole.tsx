import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

export const TerminalConsole: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    '> Shubham Aher AI Protocol initialized...',
    '> System ready. GenAI modules loaded.',
    '> Type "email" for contact info or "github" for code repositories.'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `$ ${input}`];

    if (cmd === 'email') {
      newHistory.push('> Contact object retrieved:');
      newHistory.push('> shubhamaher758@gmail.com');
      newHistory.push('> Opening mail client...');
      setTimeout(() => window.location.href = 'mailto:shubhamaher758@gmail.com', 1000);
    } else if (cmd === 'github') {
      newHistory.push('> Redirecting to git repository...');
      setTimeout(() => window.open('https://github.com/shubhamaher8', '_blank'), 800);
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === '') {
       // do nothing
    } else {
      newHistory.push(`> Command not recognized: "${cmd}". Try "email" or "github".`);
    }

    setHistory(newHistory);
    setInput('');
  };

  // Auto-scroll to bottom
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="py-24 flex flex-col items-center justify-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-display font-bold text-white mb-4">Initialize Connection</h2>
        <p className="text-gray-400">Ready to collaborate on your next AI-driven product?</p>
      </div>

      <div className="w-full max-w-3xl bg-[#050505] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
        {/* Mac-style header */}
        <div className="bg-[#111] px-4 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 text-gray-500 text-xs">shubham_interface — -zsh</div>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-6 min-h-[300px] max-h-[400px] overflow-y-auto text-neon-green/90 space-y-2 cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-white' : 'text-neon-green'}>
              {line}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleCommand} className="p-4 bg-[#0A0A0A] border-t border-white/5 flex items-center gap-2">
          <span className="text-gray-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-700 font-mono"
            placeholder="Type 'email' to contact..."
            autoComplete="off"
          />
          <button type="submit" className="text-gray-500 hover:text-white transition-colors">
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};