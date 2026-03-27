import { MDXRemote } from 'next-mdx-remote'
import { useState } from 'react'
import Keyword from './Keyword';

const components = {
  img: (props) => (
    <img className='customImage' {...props} />
  ),
};

export default function Timeline({ posts })
{
  const [filterKeywords, setFilterKeywords] = useState([])
  const [allKeywords, setAllKeywords] = useState(posts.map(post => post.frontMatter.keywords.split(",")).flat().filter((item, i, ar) => ar.indexOf(item) === i))

  const [searchInput, setSearchInput] = useState("")

  const searchFilteredPosts = searchInput.length === 0 ? posts :
    posts.filter(post => post.content.toLowerCase().includes(searchInput.toLowerCase()) || post.frontMatter.date.includes(searchInput) )

  
  const sortedPosts = searchFilteredPosts.sort((a, b) => {
    const dateA = a.frontMatter.date.split(".")
    const dateB = b.frontMatter.date.split(".")
    
    return (new Date(+dateB[2], +dateB[1]-1, +dateB[0]) - new Date(+dateA[2], +dateA[1]-1, +dateA[0]))
  })
                                               
  const renderedPosts = sortedPosts.filter(post => {
    if (filterKeywords.length === 0)
    {
      return true;
    }
    const postKeywords = post.frontMatter.keywords.split(",")
    return postKeywords.some(keyword => filterKeywords.includes(keyword))
  })

  const keywordClickHandle = (e) => {
    e.preventDefault();

    const value = e.target.innerText
    const replaced = value.replace("#", "");

    if (filterKeywords.includes(replaced))
    {
      setFilterKeywords(filterKeywords.filter(keyword => keyword !== replaced)) 
    }
    else
    {
      setFilterKeywords(filterKeywords.concat(replaced))
    }
  }

  const searchChangeHandle = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  }

  return (
    <>
    <div className="blog-header">
      One of the main reasons of developing this website was to have a blog spot so that I can dump my ideas. However, after developing nearly everything, I have realized that I do not want to write in blog post format. Blog post sounds like a huge effort, which did not help with my procastination.
      <br></br> <br></br>
      Then I realized that I miss Twitter, dumping my ideas into a place, without giving too much thought on them. I closed my Twitter account because I kept checking Turkish news, which do not play well with my mental health. I do not trust my self-control of not checking the timeline, therefore Twitter is a no-go for the time being. So here we are, my unsolicited thoughts on random stuff.
      <br></br> <br></br>
      If you would like to comment on something, please don&apos;t. In very rare occasions I would care about your opinion for the topics I have on this page. However if you really feel dedicated and cannot control yourself, you can find enough communication channels below this page.
    </div>

    <div className='keywords'>
    {
      allKeywords.map((keyword, index) =>
      {
        return <div className={filterKeywords.includes(keyword) ? "usedKeyword" : "keyword"} key={index} onClick={keywordClickHandle}>#{keyword}</div>
      }
      )
    }
    </div>
    <div className="timeline">
      {renderedPosts.map((post, i) => (
        <div className="timelinePost" key={i}>
          <p className="postDate">{post.frontMatter.date}</p>
          <MDXRemote {...post.mdxSource} components={components}/>
          <div className='postKeywords'>
            <div className='keywords-post'>
            {
              post.frontMatter.keywords.split(",").map((keyword, index) =>
                <Keyword 
                  key={index}
                  id={index}
                  handle={keywordClickHandle}
                  word={keyword}
                />
              )
            }
            </div>
          </div>
        </div>
        )
      )}
    </div>
    </>
  )
}
