import { Book1, Timer1, VideoPlay } from 'iconsax-react';
import { resources } from '../../utils/data';
import { chunkArray } from '../../utils/helper/chunks';
import { useState } from 'react';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import Header from '../../components/dashboard-components/Header';
import { twMerge } from 'tailwind-merge';

const itemsPerPage = 6;

const EducationalResources = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const blogIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'video':
        return (
          <span>
            <VideoPlay />
          </span>
        );
      case 'article':
        return (
          <span>
            <Book1 />
          </span>
        );

      default:
        break;
    }
  };
  return (
    <>
      <Header pageTitle="Check  your adherence tracking" />{' '}
      <section className="pb-10 pt-16 lg:pt-0">
        <div>
          <h2 className="mb-8 font-inter text-xl font-semibold text-cyan-900">
            Educational Resources
          </h2>

          <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 ">
            {chunkArray(resources, itemsPerPage)[currentPageIndex - 1]?.map(
              (item: any, index: number) => (
                <div
                  key={index}
                  className="mx-auto max-w-[400px] rounded-md border border-neutral-300 p-3 sm:w-full sm:max-w-full"
                >
                  <img src={item?.image} alt={item?.name} className="w-full" />
                  <h3 className="mt-2 font-inter font-medium sm:text-lg">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-neutral-400">
                      {blogIcon(item?.type)}{' '}
                      <span>
                        {item?.type.toLowerCase() === 'video'
                          ? 'Video'
                          : 'Read article'}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-neutral-400">
                      <span>
                        <Timer1 />
                      </span>
                      <span className="text-sm">{item?.duration}</span>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() =>
                currentPageIndex !== 1
                  ? setCurrentPageIndex(currentPageIndex - 1)
                  : null
              }
              className={twMerge(
                'rounded-l border py-2 pl-5 pr-2 text-cyan-900',
                currentPageIndex === 1 && 'text-neutral-300',
              )}
            >
              <RxCaretLeft size={32} />
            </button>
            <div className="">
              {chunkArray(resources, itemsPerPage).map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPageIndex(index + 1)}
                    className={`border p-3 px-5 ${currentPageIndex === index + 1 ? 'bg-cyan-900 text-white' : ''}`}
                  >
                    <span className="font-medium">{index + 1}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                currentPageIndex !== chunkArray(resources, itemsPerPage).length
                  ? setCurrentPageIndex(currentPageIndex + 1)
                  : null
              }
              className={
                (currentPageIndex === chunkArray(resources, itemsPerPage).length
                  ? 'rounded-r border py-2 pl-2 pr-5 text-neutral-300'
                  : 'rounded-r border py-2 pl-2 pr-5 text-cyan-900') + ''
              }
            >
              <span className="">
                <RxCaretRight size={32} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalResources;
