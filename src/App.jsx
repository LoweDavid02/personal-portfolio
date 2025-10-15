
function App() {


  return (
   <>

  <div className="container">
    <div className="row g-5">
      <div className="col-lg-4 sticky-lg-top vh-100">
        <div className="d-flex flex-column h-100 text-center overflow-auto shadow">
          <img
            className="w-100 img-fluid mb-4"
            src="img/lowe-david-photo.jpg"
            alt="Image"
          />
          <h1 className="text-primary mt-2">Lowe David</h1>
          <div className="mb-4" style={{ height: 22 }}>
            <h4 className="typed-text-output d-inline-block text-light" />
            <div className="typed-text d-none">
              Web Designer, Web Developer, Front End Developer, Apps Designer,
              Apps Developer
            </div>
          </div>
          <div className="d-flex justify-content-center mt-auto mb-3">
            <a className="btn btn-secondary btn-square mx-1" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-secondary btn-square mx-1" href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-secondary btn-square mx-1" href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn btn-secondary btn-square mx-1" href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="d-flex align-items-end justify-content-between border-top">
            <a href="" className="btn w-50 border-end">
              Download CV
            </a>
            <a href="#contact" className="btn w-50 btn-scroll">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        {/* About Start */}
        <section
          className="py-5 border-bottom wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h1 className="title pb-3 mb-5">About Me</h1>
          <p>
            I’m a passionate Web Developer and UI/UX Designer dedicated to creating clean, user-centered digital experiences that combine creativity with functionality. I specialize in transforming ideas into intuitive, responsive, and visually compelling websites 
            and applications that not only look great but also deliver smooth and meaningful interactions. <br /> <br />
            With a strong foundation in front-end development (HTML, CSS, JavaScript, React) and a deep understanding of design systems, wireframing, and user experience principles, I strive to bridge the gap between design and code. 
            My goal is to craft products that are not only beautiful but also accessible, fast, and purposeful. <br /> <br />
            Driven by curiosity and continuous learning, I’m always exploring new trends in technology 
            and design to create innovative solutions that empower users and help brands grow in the digital space.
          </p>
          <div className="row mb-4">
            <div className="col-sm-6 py-1">
              <span className="fw-medium text-primary">Name:</span> Lowe David Tubat
            </div>
            <div className="col-sm-6 py-1">
              <span className="fw-medium text-primary">Birthday:</span> 1 April
              1990
            </div>
            <div className="col-sm-6 py-1">
              <span className="fw-medium text-primary">Degree:</span> Bachelor
            </div>
            <div className="col-sm-6 py-1">
              <span className="fw-medium text-primary">Experience:</span> 3 years
            </div>
            <div className="col-sm-6 py-1">
              <span className="fw-medium text-primary">Phone:</span> +012 345
              6789
            </div>
            <div className="col-sm-6 py-1">
              <span className="fw-medium text-primary">Email:</span>{" "}
              lowedavidctubat02@gmail.com
            </div>
            <div className="col-sm-6 py-1">
              <span className="fw-medium text-primary">Address:</span> Larlin Village, 
              Apalit, Pampanga
            </div>
            <div className="col-sm-6 py-1">
              <span className="fw-medium text-primary">Freelance:</span>{" "}
              Available
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4 col-lg-6 col-xl-4">
              <div className="d-flex bg-secondary p-4">
                <h1
                  className="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  10
                </h1>
                <div className="ps-3">
                  <p className="mb-0">Years of</p>
                  <h5 className="mb-0">Experience</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 col-xl-4">
              <div className="d-flex bg-secondary p-4">
                <h1
                  className="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  100
                </h1>
                <div className="ps-3">
                  <p className="mb-0">Happy</p>
                  <h5 className="mb-0">Clients</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 col-xl-4">
              <div className="d-flex bg-secondary p-4">
                <h1
                  className="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  200
                </h1>
                <div className="ps-3">
                  <p className="mb-0">Complete</p>
                  <h5 className="mb-0">Projects</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About End */}
        {/* Skills Start */}
        <section
          className="py-5 border-bottom wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h1 className="title pb-3 mb-5">Skills</h1>
          <div className="row">
            <div className="col-sm-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">HTML</p>
                  <p className="mb-2">95%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">CSS</p>
                  <p className="mb-2">85%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">PHP</p>
                  <p className="mb-2">90%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Javascript</p>
                  <p className="mb-2">90%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">ReactJS</p>
                  <p className="mb-2">95%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Typescript</p>
                  <p className="mb-2">85%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills End */}
        {/* Expericence Start */}
        <section className="py-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="title pb-3 mb-5">Expericence</h1>
          <div className="border-start border-2 border-light pt-2 ps-5">
            <div className="position-relative mb-4">
              <span
                className="bi bi-arrow-right fs-4 text-light position-absolute"
                style={{ top: "-5px", left: "-50px" }}
              />
              <h5 className="mb-1">Web Developer</h5>
              <p className="mb-2">
                La Verdad Christian College | <small>2022 - 2023</small>
              </p>
              <p>
                I have hands-on experience in web development and UI/UX design, specializing in building responsive websites 
                and intuitive user interfaces. Over the years, I’ve collaborated on various projects—from portfolio sites to dynamic web applications—focusing on clean code, usability, and modern design practices. My work bridges creativity and functionality, 
                ensuring every digital product delivers an engaging and seamless user experience.
              </p>
            </div>
            <div className="position-relative mb-4">
              <span
                className="bi bi-arrow-right fs-4 text-light position-absolute"
                style={{ top: "-5px", left: "-50px" }}
              />
              <h5 className="mb-1">Back-End Developer</h5>
              <p className="mb-2">
                La Verdad Christian College | <small>2023 - 2024</small>
              </p>
              <p>
                With solid experience in web development and UI/UX design, I craft interactive 
                and user-focused digital solutions. I specialize in transforming ideas into functional, 
                visually appealing interfaces that enhance user engagement 
                and support business goals through clean, efficient code and modern design systems.
              </p>
            </div>
            <div className="position-relative mb-4">
              <span
                className="bi bi-arrow-right fs-4 text-light position-absolute"
                style={{ top: "-5px", left: "-50px" }}
              />
              <h5 className="mb-1">Front-End Developer & UI/UX Designer</h5>
              <p className="mb-2">
                La Verdad Christian College | <small>2024 - 2025</small>
              </p>
              <p>
                As a creative web developer and UI/UX designer, I love bringing concepts to life through code and design. 
                My experience covers developing responsive websites, designing intuitive layouts, 
                and ensuring every project delivers both beauty and usability. 
                I’m driven by a passion for creating meaningful digital experiences that make an impact.
              </p>
            </div>
          </div>
        </section>
        {/* Expericence End */}
        {/* Subscribe Start */}
        <section className="wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-secondary text-center p-5">
            <h1 className="text-white font-weight-bold">
              Subscribe My Newsletter
            </h1>
            <p className="text-white">
              Subscribe and get my latest article in your inbox
            </p>
            <div className="position-relative w-100">
              <input
                className="form-control bg-dark border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
        {/* Subscribe End */}
        {/* Services Start */}
        <section
          className="py-5 border-bottom wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h1 className="title pb-3 mb-5">Services</h1>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="service-item">
                <i className="fa fa-2x fa-laptop-code mx-auto mb-4" />
                <h5 className="mb-2">Web Design</h5>
                <p className="mb-0">
                  Justo sit justo eos amet tempor amet clita amet ipsum eos
                  elitr. Amet lorem lorem lorem est amet labore
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <i className="fab fa-2x fa-android mx-auto mb-4" />
                <h5 className="mb-2">Apps Development</h5>
                <p className="mb-0">
                  Justo sit justo eos amet tempor amet clita amet ipsum eos
                  elitr. Amet lorem lorem lorem est amet labore
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <i className="fa fa-2x fa-search mx-auto mb-4" />
                <h5 className="mb-2">SEO</h5>
                <p className="mb-0">
                  Justo sit justo eos amet tempor amet clita amet ipsum eos
                  elitr. Amet lorem lorem lorem est amet labore
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <i className="fa fa-2x fa-edit mx-auto mb-4" />
                <h5 className="mb-2">Content Creating</h5>
                <p className="mb-0">
                  Justo sit justo eos amet tempor amet clita amet ipsum eos
                  elitr. Amet lorem lorem lorem est amet labore
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Services End */}
        {/* Portfolio Start */}
        <section
          className="py-5 border-bottom wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h1 className="title pb-3 mb-5">Portfolio</h1>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 text-center mb-2">
                  <ul className="list-inline mb-4" id="portfolio-flters">
                    <li className="btn btn-secondary active" data-filter="*">
                      <i className="fa fa-star me-2" />
                      All
                    </li>
                    <li className="btn btn-secondary" data-filter=".first">
                      <i className="fa fa-laptop-code me-2" />
                      Design
                    </li>
                    <li className="btn btn-secondary" data-filter=".second">
                      <i className="fa fa-mobile-alt me-2" />
                      Development
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container">
                <div className="col-md-6 mb-4 portfolio-item first">
                  <div className="position-relative overflow-hidden mb-2">
                    <img
                      className="img-fluid w-100"
                      src="img/kuya-broeli-me.jpg"
                      alt=""
                    />
                    <div className="portfolio-btn d-flex align-items-center justify-content-center">
                      <a href="img/kuya-broeli-me.jpg" data-lightbox="portfolio">
                        <i className="bi bi-plus text-light" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 portfolio-item second">
                  <div className="position-relative overflow-hidden mb-2">
                    <img
                      className="img-fluid w-100"
                      src="img/broeli.jpg"
                      alt=""
                    />
                    <div className="portfolio-btn d-flex align-items-center justify-content-center">
                      <a href="img/broeli.jpg" data-lightbox="portfolio">
                        <i className="bi bi-plus text-light" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 portfolio-item first">
                  <div className="position-relative overflow-hidden mb-2">
                    <img
                      className="img-fluid w-100"
                      src="img/kuya-ate.jpg"
                      alt=""
                    />
                    <div className="portfolio-btn d-flex align-items-center justify-content-center">
                      <a href="img/kuya-ate.jpg" data-lightbox="portfolio">
                        <i className="bi bi-plus text-light" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 portfolio-item second">
                  <div className="position-relative overflow-hidden mb-2">
                    <img
                      className="img-fluid w-100"
                      src="img/kuya-me3.jpg"
                      alt=""
                    />
                    <div className="portfolio-btn d-flex align-items-center justify-content-center">
                      <a href="img/kuya-me3.jpg" data-lightbox="portfolio">
                        <i className="bi bi-plus text-light" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio End */}
        
        {/* Contact Start */}
        <section
          className="py-5 wow fadeInUp"
          data-wow-delay="0.1s"
          id="contact"
        >
          <h1 className="title pb-3 mb-5">Contact Me</h1>
          <p className="mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax &amp; PHP in a few minutes. Just copy and
            paste the files, add a little code and you're done.{" "}
            <a href="https://htmlcodex.com/contact-form">Download Now</a>
          </p>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 bg-secondary"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control border-0 bg-secondary"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 bg-secondary"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control border-0 bg-secondary"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 200 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </section>
        {/* Contact End */}
        {/* Footer Start */}
        <section className="wow fadeIn" data-wow-delay="0.1s">
          <div className="bg-secondary text-light text-center p-5">
            <div className="d-flex justify-content-center mb-4">
              <a className="btn btn-dark btn-square mx-1" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-dark btn-square mx-1" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-dark btn-square mx-1" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-dark btn-square mx-1" href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <a className="text-light px-3 border-end" href="#">
                Privacy
              </a>
              <a className="text-light px-3 border-end" href="#">
                Terms
              </a>
              <a className="text-light px-3 border-end" href="#">
                FAQs
              </a>
              <a className="text-light px-3" href="#">
                Help
              </a>
            </div>
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            <p className="m-0">
              © All Rights Reserved. Designed by{" "}
              <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
        </section>
        {/* Footer End */}
      </div>
    </div>
  </div>
  {/* Back to Top */}
  <a href="#" className="back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
</>

  )
}

export default App
