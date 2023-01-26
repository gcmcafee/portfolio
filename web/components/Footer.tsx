export default function Footer() {
  const isDev = process.env.NODE_ENV === 'development';
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="text-sm text-center footer">
      <div className="px-4 py-2 border-t border-gray-300 text-slate-800">
        <p>
          * Produced while employed with Teneleven Interactive. © {year}{' '}
          Teneleven Interactive. Third party trademarks are registered
          trademarks of their respective owners.{' '}
          <span className="whitespace-nowrap">All Rights Reserved.</span>
        </p>
      </div>
      <div className="px-4 py-4 text-white bg-gray-800">
        <p>© {year} Cody McAfee. All Rights Reserved.</p>
      </div>
      {isDev && (
        <div className="fixed z-10 items-center justify-center hidden p-6 text-xs text-white -translate-x-1/2 bg-black rounded-full align-center bottom-3 left-1/2 sm:inline-flex">
          <span className="absolute hidden sm:inline md:hidden">
            sm
            <br />
            640+
          </span>
          <span className="absolute hidden md:inline lg:hidden">
            md
            <br />
            768+
          </span>
          <span className="absolute hidden lg:inline xl:hidden">
            lg
            <br />
            1024+
          </span>
          <span className="absolute hidden xl:inline 2xl:hidden">
            xl
            <br />
            1280+
          </span>
          <span className="absolute hidden 2xl:inline">
            2xl
            <br />
            1536+
          </span>
        </div>
      )}
    </footer>
  );
}
