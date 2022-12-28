export default function Footer() {
  const isDev = process.env.NODE_ENV === 'development';
  return (
    <footer id="footer" className="text-sm text-center footer">
      <div className="px-4 py-2 border-t border-gray-300 text-slate-800">
        <p>
          * Produced while employed with Teneleven Interactive. © 2022 Teneleven
          Interactive. Third party trademarks are registered trademarks of their
          respective owners.{' '}
          <span className="whitespace-nowrap">All Rights Reserved.</span>
        </p>
      </div>
      <div className="px-4 py-4 text-white bg-gray-800">
        <p>© 2022 Cody McAfee. All Rights Reserved.</p>
      </div>
      {isDev && (
        <div className="fixed z-10 hidden items-center justify-center p-6 text-xs text-white -translate-x-1/2 bg-black rounded-full sm:inline-flex bottom-3 left-1/2 align-center">
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
