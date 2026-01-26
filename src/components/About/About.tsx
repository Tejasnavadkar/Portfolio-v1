import TitleHead from '../Common/TitleHead'

const About = () => {
  return (
    <div>
        <section id="about" className=" pt-15 md:mt-20 space-y-5 md:px-6">
          <TitleHead title='About Me' />

          <div className=" ">
            <div className="flex flex-col gap-6 text-sm sm:text-lg text-gray-400 font-semibold">
              <span>
                Hello! My name is Tejas Navadkar, and I’m an aspiring MERN stack
                developer who enjoys building full-stack web applications using
                modern technologies. My interest in web development grew as I
                started building real-world projects that go beyond simple
                UIs—handling authentication, state management, APIs, and
                databases.
              </span>

              <span>
                Over time, I’ve worked on multiple full-stack projects,
                including an{" "}
                <span className="text-sky-400">
                  e-commerce platform, a serverless blogging application, a
                  money transfer system, and an image-sharing platform
                </span>
                . Through these projects, I’ve gained hands-on experience in
                designing RESTful APIs, managing complex frontend state,
                implementing secure authentication flows, and working with both
                SQL and NoSQL databases.
              </span>

              <span>
                These days, I’m focused on building scalable and maintainable
                applications using React, TypeScript, Node.js, and modern
                backend tooling. I enjoy learning how systems work
                end-to-end—from frontend performance and form handling to
                backend validation, database modeling, and security best
                practices. I’ve also completed{" "}
                <span className="text-sky-400">
                  the Full Stack Web Development Cohort 2.0 at 100xdevs
                </span>
                , where I built multiple production-ready applications under
                mentorship and strengthened my understanding of real-world
                development patterns.
              </span>

              <span>
                Here are a few technologies I’ve been working with recently:{" "}
                {/* <span className="text-sky-400">JavaScript (ES6+), TypeScript, React,
              Node.js, Express, MongoDB, PostgreSQL, Prisma</span> */}
              </span>
              <div className="flex gap-10 justify-center sm:justify-normal">
                <div>
                  <ul className="list-disc">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc">
                    <li>Express</li>
                    <li> MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Prisma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
