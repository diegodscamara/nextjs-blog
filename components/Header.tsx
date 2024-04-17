import Link from './Link'
import Logo from '@/data/logo.svg'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 sm:rounded-lg">
            <div className="mr-0 sm:mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <h2 className="hidden h-auto text-lg font-semibold transition-none sm:block">
                {siteMetadata.headerTitle}
              </h2>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 sm:space-x-2">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden rounded-lg p-2 font-medium text-gray-800 hover:bg-slate-100 dark:text-gray-200 dark:hover:bg-slate-800 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
