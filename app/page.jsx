import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> Onsen experience</span>
    </h1>
    <p className='desc text-center'>
      This is a search tool to discover, create and share amazing onsen experiences
    </p>
    <Feed />
  </section>
);

export default Home;