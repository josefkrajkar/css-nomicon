function Sidebar() {
  return (
    <nav className="w-64 bg-gray-800 p-6 space-y-4">
      <h1 className="text-2xl font-bold text-red-600">CSS-nomicon</h1>
      <ul className="space-y-2">
        <li>
          <a href="/" className="block hover:text-red-500 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a
            href="/spells"
            className="block hover:text-red-500 transition-colors"
          >
            Forbidden Spells
          </a>
        </li>
        <li>
          <a
            href="/rituals"
            className="block hover:text-red-500 transition-colors"
          >
            Dark Rituals
          </a>
        </li>
        <li>
          <a
            href="/grimoire"
            className="block hover:text-red-500 transition-colors"
          >
            Eldritch Grimoire
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
