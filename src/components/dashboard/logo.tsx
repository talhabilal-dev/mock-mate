export function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-white font-bold text-sm">M</span>
      </div>
      <span className="font-bold text-white hidden sm:inline">Mock Mate</span>
    </div>
  );
}
