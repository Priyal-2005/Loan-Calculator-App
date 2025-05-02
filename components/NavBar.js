export default function NavBar() {
    return (
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <a href="/calculator">Calculator</a> | 
        <a href="/compare">Compare</a> | 
        <a href="/export">Export</a> | 
        <a href="/visualize">Visualize</a>
      </nav>
    );
}