import { ReactElement } from 'react'
import { motion } from 'framer-motion'

import { BasicLayout, Breadcrumbs } from '@/common/components'
import { ease } from '@/common/animation'
import { usePosts } from '@/post/hooks'
import { ChatIcon, EyeIcon, HeartIcon } from '@heroicons/react/solid'
import { SpinLoader } from '@/common/components/icon'

const AboutPage = () => {
  const { data, isLoading, isError } = usePosts()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease, delay: 0.2 }}
      className="space-y-6 lg:space-y-10 leading-relaxed max-w-4xl mx-auto"
    >
      <Breadcrumbs title="about" />
      <section className="space-y-6">
        <h3 className="lg:text-3xl text-gradient">About Me</h3>
        <p>
          Hello, I&lsquo;m Patrick Xin. I&lsquo;m passionate about creating
          beautiful, user-friendly websites. I started my coding journey shortly
          before the pandemic began. I immediately fell in love with React and
          NextJS. Since then, I&lsquo;ve got myself familiar with the
          technologies like Typescript, Prisma, GraphQL, StyledComponent,
          TailwindCSS, etc.. My goal is to become a full-stack software engineer
          and have my own start-up.
        </p>
        <p>
          I&lsquo;ve decide to regularly write posts, sharing my daily life as
          well as web technology, you are very welcome to leave a comment or
          email me.
        </p>
        <p>Right now I&lsquo;m learning Web3 and Blockchain.</p>
      </section>

      <section className="space-y-4">
        <h3 className="lg:text-3xl text-gradient">About Site</h3>
        <p>
          This website is a continuous working project and completely
          open-source on Github, source code can be found{' '}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/patrick-xin/alpesdream"
            className="dark:text-mint text-orange"
          >
            here
          </a>
          . Cheers!
        </p>
      </section>

      <section className="space-y-3 relative">
        <h5 className="text-2xl">Site Stats</h5>

        {isError ? (
          <div className="my-12 flex gap-6 flex-col justify-center items-center text-red-600">
            Error loading Stats
          </div>
        ) : isLoading ? (
          <div className="h-full w-full absolute bottom-0 overflow-hidden flex justify-center items-center">
            <div className="flex gap-2 lg:gap-4 items-center">
              <SpinLoader />
              loading stats...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div>
              <h5>Total Views</h5>
              <div className="flex gap-2 items-center">
                <div>
                  <EyeIcon className="h-6 w-6 text-mint dark:text-orange" />
                </div>
                {data.data.viewsCount}
              </div>
            </div>
            <div>
              <h5>Total Likes</h5>
              <div className="flex gap-2 items-center">
                <div>
                  <HeartIcon className="h-6 w-6 text-red-500" />
                </div>
                {data.data.likesCount}
              </div>
            </div>
            <div>
              <h5>Total Comments</h5>
              <div className="flex gap-2 items-center">
                <div>
                  <ChatIcon className="h-6 w-6 text-orange dark:text-mint" />
                </div>
                {data.data.commentsCount}
              </div>
            </div>
          </div>
        )}
      </section>
    </motion.div>
  )
}

export default AboutPage

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>
}
