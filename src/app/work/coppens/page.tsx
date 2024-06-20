import { Header } from "@/components/Header";
import Image from "next/image";

export default function coppens() {
  return (
    <>
      <section className={"text-main_color"}>
        <Header />
        <Image
          className={"-z-20"}
          src={"/assets/images/coppens_macbook.jpg"}
          alt={"cabinet coppens macbook mockup"}
          fill={true}
        />
        <div>
          <p
            className={`text-7xl font-black transition hover:translate-x-6 ease-in-out duration-700 pb-[550px]`}
          >
            Cabinet Coppens <br />
            Experts Comptables
          </p>
          <p>
            web integration <br />
            web development
          </p>
        </div>
        {/*<p className={'text-justify text-main_color'}>*/}
        {/*    Cabinet Coppens Website Development*/}

        {/*    During my internship at Mobil Studio as a web developer, I had the opportunity to work on the Cabinet Coppens website project, which allowed me to apply and expand my skills in WordPress development and Adobe XD integration. This project was a comprehensive experience where I was responsible for building the website from A to Z, showcasing my ability to manage and execute a web development project independently.*/}

        {/*    Project Overview*/}
        {/*    The Cabinet Coppens website  serves as an online presence for a law firm, providing information about their services, team, and contact details. The site needed to be professional, user-friendly, and visually appealing to convey the firm's credibility and expertise.*/}

        {/*    Design and Development Process*/}
        {/*    Adobe XD Integration: The project began with a detailed design phase where the layout and aesthetics were crafted in Adobe XD. This phase involved understanding the client's requirements, brainstorming design concepts, and finalizing the design blueprint.*/}

        {/*    WordPress and Elementor: With the design ready, I transitioned to the development phase using WordPress as the CMS platform, leveraging its robust capabilities for content management. Elementor, a powerful drag-and-drop page builder, was instrumental in bringing the Adobe XD designs to life. I ensured that the website was not only visually consistent with the initial design but also responsive and easy to navigate.*/}

        {/*    Custom Development: Beyond the basic functionalities provided by WordPress and Elementor, I implemented custom coding to enhance the website's performance and user experience. This included optimizing the site for speed, ensuring cross-browser compatibility, and integrating any necessary third-party plugins to extend the site's functionality.*/}

        {/*    Key Achievements*/}
        {/*    - Responsive Design: Ensured that the website is fully responsive, providing an optimal viewing experience across a wide range of devices, from desktops to mobile phones.*/}
        {/*    - SEO Optimization: Implemented SEO best practices to improve the site's visibility on search engines, helping Cabinet Coppens reach a broader audience.*/}
        {/*    - Performance Optimization: Optimized the site’s performance for faster load times, improving the overall user experience.*/}

        {/*    This project not only reinforced my technical skills in WordPress and front-end development but also highlighted the importance of effective communication and collaboration in delivering a successful project. My experience with the Cabinet Coppens website stands as a testament to my capability to handle full-cycle web development projects, from initial design to final deployment.*/}

        {/*    VISIT CABINET COPPENS WEBSTE HERE*/}
        {/*</p>*/}
      </section>
    </>
  );
}
