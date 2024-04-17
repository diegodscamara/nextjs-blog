import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { IoIosSearch } from 'react-icons/io'
import { KBarButton } from 'pliny/search/KBarButton'
import { MdKeyboardCommandKey } from 'react-icons/md'
import { TbSquareLetterK } from 'react-icons/tb'
import siteMetadata from '@/data/siteMetadata'

const SearchButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <SearchButtonWrapper
        aria-label="Search"
        title="Search"
        className="flex-rol flex items-center justify-between gap-4 rounded-full bg-slate-100 p-2 text-slate-500 shadow-sm hover:shadow-md dark:bg-slate-800 dark:text-slate-400 md:w-[200px]"
      >
        <div className="flex flex-row items-center gap-2">
          <IoIosSearch className="" />
          <p className="text-sm ">Search</p>
        </div>
        <div className="flex items-center ">
          <MdKeyboardCommandKey /> <TbSquareLetterK />
        </div>
      </SearchButtonWrapper>
    )
  }
}

export default SearchButton
