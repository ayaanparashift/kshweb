import BlogInsideSpot from "./Components/BlogInsideSpot";
import InsideSlide from "./Components/InsideSlide";

const page = () => {
  return (
    <>
      <BlogInsideSpot />

      {/* Blog */}

      <div className="fix12 px-10">
        <div className="middleBlogContent flex lg:gap-20 gap-9 py-20 relative">
          <div className="colIcon h-fit sticky top-20">
            <div className="flex w-10 flex-col gap-8">
              <img className="w-9 h-9" src="/binside/BinFB.svg" alt="" />
              <img className="w-9 h-9" src="/binside/BinIN.svg" alt="" />
              <img className="w-9 h-9" src="/binside/BinInsta.svg" alt="" />
            </div>
          </div>
          <div className="colContnt">
            <div className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]">
              <p>
                Lean manufacturing has become a key approach for companies
                looking to increase efficiency, reduce waste, and build
                streamlined operations. As manufacturers strive to adopt lean
                principles, the environment where they operate plays a huge role
                in how well those principles too are implemented. Grade A
                industrial parks provide manufacturers with the infrastructure
                and tools needed to make lean manufacturing not only possible
                but highly effective.
              </p>
              <p>
                Let’s look at how these advanced industrial spaces help support
                the seven principles of lean manufacturing.
              </p>
              <h2 className="fsans-600 text-3xl pb-5">Eliminate Waste</h2>
              <p>
                The first principle of lean manufacturing is to cut out waste in
                every form. Grade A industrial parks are built with waste
                reduction in mind from the very beginning. These parks are
                designed to have optimal layouts that minimise unnecessary
                movement of materials and people. They also come with advanced
                waste management systems, making it easier for companies to
                reduce material waste and energy inefficiencies.
                <br />
                For example, <strong>KSH INFRA’s industrial parks</strong> use
                sustainable practices like energy-efficient lighting, rainwater
                harvesting, and smart technology to help reduce operational
                waste, allowing companies to focus on their core business
                without worrying about excess energy consumption.
              </p>
            </div>

            <div className="blogImg py-14">
              <img src="/binside/blogINImg.png" alt="" />
            </div>

            <h2 className="fsans-600 text-3xl pb-5">Build Quality In</h2>

            <div className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343] pb-14">
              <p>
                High-quality production doesn’t happen by chance; it has to be
                designed into the system. Grade A parks offer state-of-the-art
                facilities that help manufacturers maintain top-quality
                standards. From advanced automation systems to real-time
                monitoring technology, these parks help ensure that potential
                defects are identified and addressed early in the production
                process. With high-tech infrastructure, KSH INFRA’s Grade A
                parks allow manufacturers to build in quality at every stage,
                leading to fewer mistakes and a smoother workflow.
              </p>
            </div>

            <h2 className="fsans-600 text-3xl pb-5">Create Knowledge</h2>

            <div className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]">
              <p>
                Another important aspect of lean manufacturing is the continuous
                creation and sharing of knowledge. Grade A industrial parks
                often have built-in spaces that encourage collaboration between
                teams, fostering innovation and knowledge-sharing across
                industries. These parks are typically located near educational
                institutions and research centres, giving businesses access to
                cutting-edge knowledge and a pool of highly skilled labour.
                <br />
                At <strong>KSH INFRA’s parks</strong>, manufacturers are part of
                a community that encourages constant learning and development,
                helping companies stay innovative and ahead of the curve.
              </p>
            </div>
            <br />
            <br />
            <h2 className="fsans-600 text-3xl pb-5">Defer Commitment</h2>

            <div className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]">
              <p>
                One of the key ideas in lean thinking is delaying decisions
                until you have enough data to make the best choice. Grade A
                industrial parks make it easier for manufacturers to defer major
                commitments like large capital expenditures. With customisable,
                build-to-suit facilities, companies can scale their operations
                as needed rather than investing in large-scale infrastructure
                upfront. This flexibility allows businesses to grow at their own
                pace while keeping costs in check.
              </p>
            </div>
            <br />
            <br />
            <h2 className="fsans-600 text-3xl pb-5">Respect People</h2>

            <div className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]">
              <p>
                People are at the heart of lean manufacturing, and Grade A
                industrial parks take this principle seriously. These parks are
                designed with the well-being of employees in mind. From
                ergonomic workspaces to green recreational areas, these parks
                provide environments that promote worker health and
                satisfaction. Plus, the safety standards are top-notch, meaning
                employees can do their jobs in secure and well-maintained
                facilities, which boosts morale and productivity.
              </p>
            </div>
            <br />
            <br />
            <h2 className="fsans-600 text-3xl pb-5">Optimise the Whole</h2>

            <div className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]">
              <p>
                Finally, lean manufacturing focuses on optimising the entire
                production system. Grade A industrial parks make this easier by
                creating ecosystems where manufacturers, suppliers, and
                logistics providers can work closely together. This helps
                streamline operations across the entire supply chain. Moreover,
                these parks integrate sustainability into their designs, using
                energy-efficient technologies and green building materials,
                which helps companies optimise their operations while reducing
                their environmental footprint.
              </p>
            </div>
            <br />
            <br />
            <h2 className="fsans-600 text-3xl pb-5">Conclusion</h2>

            <div className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]">
              <p>
                Grade A industrial parks are much more than just real
                estate—they’re critical enablers of lean manufacturing. By
                offering advanced infrastructure, flexible space, and innovative
                design, they help manufacturers implement lean principles across
                the board. KSH INFRA is committed to delivering these
                state-of-the-art industrial spaces that not only support lean
                manufacturing but also foster growth, innovation, and
                sustainability for the companies that call them home.
              </p>
            </div>
          </div>
        </div>
      </div>

      <InsideSlide />
    </>
  );
};

export default page;
