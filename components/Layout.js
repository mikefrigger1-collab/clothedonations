// Save as: components/Layout.js
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, allLocations = [], states = [] }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer allLocations={allLocations} states={states} />
    </div>
  );
};