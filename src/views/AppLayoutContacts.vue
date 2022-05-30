<template>
  <div>
    <header>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    </header>
    <!--Main Page-->
    <section id="body" class="">
      <!--Main Container-->
      <div class="container">
        <!--Menu Bar-->
        <div class="main-menu" id="main-menu">
          <ul class="main-menu-list">
            <li>
              <a href="#page-resume" class="link-home">Home</a>
            </li>
            <li>
              <a href="#page-resume" class="link-page">Resume</a>
              </li>
            <li>
              <a href="#page-skills" class= "link-page">Skills</a>
              </li>
            <li>
              <a href="#page-portfolio" class= "link-page">Portfolio</a>
              </li>
            <li>
              <a href="#page-contact" class= "link-page">Contact</a>
              </li>
          </ul>
        </div>
          <!--End of Menu Bar-->
        <!-- Profile Card-->
        <div class="vcard-body section-home" id="section-home">
          <!--vcard-profile photo-->
          <div class= "vcard-profile-photo">
            <!-- <img src= "https://avatars0.githubusercontent.com/u/16531064?v=3&s=460" id="profile-pic2" alt= ""/> -->
            <!-- <img src="https://media.licdn.com/media/AAEAAQAAAAAAAAjPAAAAJGVlODdjNjUxLTVjNGUtNDMyMC1hMmQ2LTc3NTQwYTkwNWNhMg.jpg" id="profile-pic1" class= "profileActive" alt= ""/> -->
          </div>
          <!--End of vcard-profile photo-->
          
          <!--vcard-Description-->
          <div class= "vcard-description">
            <!--vcard-Description-Profile-->
            <h1 class= "profile-title">Hi, i'm <span class="color1">Premnath!</span></h1>
            <h2 class= "profile-subtitle">Full Stack Developer</h2>
            <hr class="hr1">
            <!--End of vcard-Description-Profile-->
            <!--vcard-Description-Text-->
            <div class= "description-text">
              <p>Professional Developer, Programmer and Data enthusiast living in Charlotte, North Carolina. Strong Java, Swift and Python programming skills with 4+ years of IT experience.  </p>
            </div>
            <!--End of vcard-Description-Text-->
            <!--vcard-Description-footer-->
            <div class= "description-footer">
              <!--Item-->
              <div class= "description-footer-item">
                <p class="active">email : prem_chess@yahoo.co.in / phone : +1(312) 256-5711</p>
              </div>
              <!--End of Item-->
            </div>
            <!--End of vcard-Description-footer-->
          </div>
          <!--End of vcard-Description-->
            <!--Footer-->
          <div class= "vcard-footer">
            <!--social icons-->
            <div class="footer-icons">
                        <a href="https://www.linkedin.com/in/premnath-ramanathan-5110b538/" target="_blank" ><i class="fa fa-linkedin-square"></i></a>
                      <a href="https://twitter.com/dragonprem" target="_blank"><i class="fa fa-twitter"></i></a>
              <a href="https://github.com/PremnathRamanathan" target="_blank"><i class="fa fa-github"></i></a>
              <a href="https://www.facebook.com/dragonprem" target="_blank"><i class="fa fa-facebook-official"></i></a>

            </div>
              <!--End of social icons-->
          </div>
            <!--End of Footer-->
        </div>
          <!-- End of Profile card -->
        <!-- Extended View-->
        <!--Page: Resume-->
        <div class="vcard-body section-page" id="page-resume">
          <!--Section: Education-->
          <div class="section-education">
            <!--section title-->
            <h2 class="section-title"> Resume</h2>
            <!--end of section title-->
            
            <!--Buttons-->
            <div class="resume-buttons page-buttons">
              <!--Download CV button-->
              <a href="https://premnathramanathan.000webhostapp.com/Resume/PremnathRamanathan_resume_new.docx" class="btn btn-default btn-default2" download><i class="fa fa-download"></i>&nbsp; Download my resume</a>
              <!--/Download CV button-->
              <!--Get in Touch Button-->
              <a href="#page-contact" class="btn btn-default btn-default2 link-page"><i class="fa fa-download"></i>&nbsp; Get in touch</a>
              <!--/Get in Touch Button-->
            </div>
            <!--End of Buttons-->
            <!--Education Header-->
            <h2 class="section-title2"><i class="fa fa-university"></i>&nbsp; Education</h2> 
            <!-- /Education Header-->
            <!-- Resume Item-->
            <div class="resume-item">
              <!--item-title-->
              <h3 class="resume-item-title">MS in Management Information System</h3>
              <!--/item-title-->
              <!--item-text-->
              <h4 class="resume-item-text">University of Illinois, Chicago - <span class="grad-date">Graduation Dec 2016</span></h4>
              <!--/item-text-->
            </div>
            <!-- /Resume Item-->
            <!-- Resume Item-->
            <div class="resume-item">
              <!--item-title-->
              <h3 class="resume-item-title">BTech in Computer Science</h3>
              <!--/item-title-->
              <!--item-text-->
              <h4 class="resume-item-text">SRM University, Chennai(India) - <span class="grad-date">Graduation Dec 2012</span></h4>
              <!--/item-text-->
            </div>
            <!-- /Resume Item-->
          </div>
          <!--End of Section: Education-->
          <!--Section: Work Experience-->
          <div class="section-education">
            <!--Work Header-->
            <h2 class="section-title2"><i class="fa fa-flag"></i>&nbsp; Work Experience</h2>
            <!-- /Work Header-->
            <!-- Resume Item-->
            <div class="resume-item">
              <!--workplace-title-->
              <h3 class="resume-item-title">Loyola Medical Center</h3>
              <!--/item-title-->
              <!--item-text-->
              <h4 class="job">Data Science Intern - <span class="job-date">June 2016 - Dec 2016</span></h4>
              <!--/item-text-->
              <!--item-description-->
              <div class="resume-item-description">
                <p>The research project focuses on Agent Based Model simulations to explore several Hepatitis-C Virus treatments among substance users in metropolitan Chicago using Machine learning algorithms (Java, WEKA).<br>
     Performed data analysis of computational model simulations to explore several Hepatitis-C Virus treatment scale up strategies<br>
     Designed and implemented a strategy to process huge amount of simulation data using Pandas (Python) for data analysis<br>
     Extracted significant insights for research by visualizing the results through plots using matplotlib and other python libraries</p>
              </div>
              <!--/item-description-->
            </div>
            <!-- /Resume Item-->
                    <!-- Resume Item-->
            <div class="resume-item">
              <!--workplace-title-->
              <h3 class="resume-item-title">Accenture Pvt. Ltd.</h3>
              <!--/item-title-->
              <!--item-text-->
              <h4 class="job">Software Engineer - <span class="job-date">Jan 2014 - May 2015</span></h4>
              <!--/item-text-->
              <!--item-description-->
              <div class="resume-item-description">
                <p>Client: QBE NA Insurance<br>
                  Actively involved in development of Policy & Claims administration system in an agile (Scrum) environment<br>
     Communicated client’s business requirements by constructing Requirements Traceability Matrix, Use cases and reports.<br>
     Integrated the claims system using JSF for efficient management of claims – Increased the processing time by 50%<br>
     Evaluated risks related to requirements implementation, testing processes and project communications reducing the project cost by 40%<br>
                 Cleansed, transformed and processed claims and policy data to maintain data integrity and availability (Excel and SQL)<br>
                   Developed and maintained data mappings between source and destination data stores for ETL and consolidation
                  </p>
              </div>
              <!--/item-description-->
            </div>
            <!-- /Resume Item-->
                    <!-- Resume Item-->
            <div class="resume-item">
              <!--workplace-title-->
              <h3 class="resume-item-title">Accenture Services pvt. ltd.</h3>
              <!--/item-title-->
              <!--item-text-->
              <h4 class="job">Associate Software Engineer - <span class="job-date">June 2012 - Dec 2013</span></h4>
              <!--/item-text-->
              <!--item-description-->
              <div class="resume-item-description">
                <p>Client: State Farm<br>Actively involved in development and automation testing of client’s web portal<br>
                   Organized meetings with stakeholders to gather requirements and to present significant insights from data exploration<br> Developed test scripts using Java (Selenium) to automate the testing of client’s application – reduced manual effort by 50%<br>
                   Developed a system using Java (Spring) to integrate with existing policy system to improve customer experience</p>
              </div>
              <!--/item-description-->
            </div>
            <!-- /Resume Item-->
                    <!-- Resume Item-->
            <div class="resume-item">
              <!--workplace-title-->
              <h3 class="resume-item-title">PoundWishes - UIC</h3>
              <!--/item-title-->
              <!--item-text-->
              <h4 class="job">Project Intern - <span class="job-date">Sep 2016 - Dec 2016</span></h4>
              <!--/item-text-->
              <!--item-description-->
              <div class="resume-item-description">
                <p>Developed an iOS mobile application from scratch using Swift to help client increase their revenue and customer base<br>
     The mobile application integrates with AWS for backend services using AWS SDK, and MYSQL using PhpMyAdmin and web service calls, making it a secure and scalable app<br>
     Optimized data analytics tools on client’s dashboard by implementing gamification schemes to increase customer engagement</p>
              </div>
              <!--/item-description-->
            </div>
            <!-- /Resume Item-->
          </div>
          <!--End of Section: Work Experience-->
          <!-- Section: Testimonials-->
          <!--testimonial header-->
          <h2 class="section-title2"><i class="fa fa-commenting"></i>&nbsp; Testimonials</h2>
          <!--/testimonial header-->
          
          <div class="testimonials">
            <!--Testimonial slides-->
            <div class="testimonial-slides" id="testimonial-carousal">
              <!--item-->
              <div class="testimonial-item">
              <!--Testimonial-content-->
                <div class="testimonial-content">
                  <p>"Premnath has been a very good team player with strong technical skills and displayed very good problem solving and analytical abilities must-have for any role. He is also a very good team player and was able to successfully work with both LOB folks as well as development team. His communication skills and problem solving skills are exceptionally good and are always appreciated by the leadership. His strength is in staying across issues, pro-actively offering solutions and ideas and being adept at all aspects of communications make him a valuable contributor to any situation or team.
    I would highly recommend him for any endeavor he may follow"</p>
                </div>
                <!--/Testimonial-content-->
                <!--Testimonial-Author-->
                <div class="testimonial-author">
                  <!--Picture-->
                  <div class="testimonial-picture">
                    <!-- <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAdCAAAAJGMwOTEwNDE0LWZjYTItNDA1MC1hMGE1LWFhN2MwZWMzYTJmYQ.jpg" alt=""/> -->
                  </div>
                  <!--/Picture-->
                  <p class="author-name">Baldeep Singh</p>
                  <p class="author-firm">Accenture Services</p>
                </div>
                <!--/Testimonial-Author-->
              </div>
              <!--/item-->
            </div>
            <!--/Testimonial slides-->
          </div>
          <!-- /Section: Testimonials-->
          <!--Page Footer-->
          <div class="page-footer">
            <!--Buttons-->
            <div class="resume-buttons page-buttons">
              <!--Download CV button-->
              <a href="Resume/Premnath Ramanathan_resume_new.docx" class="btn btn-default btn-default2"><i class="fa fa-download"></i>&nbsp; Download my resume</a>
              <!--/Download CV button-->
              <!--Get in Touch Button-->
              <a href="#page-contact" class="btn btn-default btn-default2 link-page"><i class="fa fa-download"></i>&nbsp; Get in touch</a>
              <!--/Get in Touch Button-->
            </div>
            <!--End of Buttons-->
          </div>
          <!--/Page Footer-->
        </div>
        <!--End of Page Resume-->
        <!--Page: Skills-->
        <div class="vcard-body section-page" id="page-skills">
          <div class="section-skills">
            <!--skills-title-->
            <h2 class="section-title">Skills</h2>
            <!--/skills-title-->
            <!-- skills-subtitle-->
            <h3 class="section-item-title2"><i class="fa fa-users"></i>&nbsp;&nbsp; Professional Skills</h3>
            <!-- /skills-subtitle-->
            <!-- skill list-->
            <ul class="skill-list">
                            <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" data-percent="80%" style="width: 80%;">
                                <span class="sr-only">80% Complete</span>
                            </div>
                            <span class="progress-type">Communication</span>
                            <span class="progress-completed">8.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-2" role="progressbar" data-percent="75%" style="width: 75%;">
                                <span class="sr-only">75% Complete</span>
                            </div>
                            <span class="progress-type">Leadership</span>
                            <span class="progress-completed">7.5 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-3" role="progressbar" data-percent="90%" style="width: 90%;">
                                <span class="sr-only">90% Complete</span>
                            </div>
                            <span class="progress-type">Confidence</span>
                            <span class="progress-completed">9.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              </ul>
            <!-- /skill list-->
          
            <!-- skills-subtitle-->
            <h3 class="section-item-title2"><i class="fa fa-code"></i>&nbsp;&nbsp; Coding Skills</h3>
            <!-- /skills-subtitle-->
          <!-- Skils List -->
            <ul class="skill-list">
                        <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar" data-percent="80%" role="progressbar" style="width: 80%;">
                                <span class="sr-only">80% Complete</span>
                            </div>
                            <span class="progress-type">Java/J2EE</span>
                            <span class="progress-completed">8.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
                        <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-2" data-percent="70%" role="progressbar" style="width: 70%;">
                                <span class="sr-only">70% Complete</span>
                            </div>
                            <span class="progress-type">Python / SQL</span>
                            <span class="progress-completed">7.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
                        <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-3" data-percent="55%" role="progressbar" style="width: 55%;">
                                <span class="sr-only">55% Complete</span>
                            </div>
                            <span class="progress-type">HTML5 / CSS3 / Javascript / Swift</span>
                            <span class="progress-completed">5.0 /10</span>
                          </div>
                        </li>
                        <!-- /item list -->
                      </ul>
            <!-- /Skils List -->
          <!-- skills-subtitle-->
            <h3 class="section-item-title2"><i class="fa fa-database"></i>&nbsp;&nbsp; Database Skills</h3>
            <!-- /skills-subtitle-->
          <!-- skill list-->
            <ul class="skill-list">
                            <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" data-percent="75%" style="width: 75%;">
                                <span class="sr-only">75% Complete</span>
                            </div>
                            <span class="progress-type">SQL / MYSQL /T-SQL</span>
                            <span class="progress-completed">7.5 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-2" role="progressbar" data-percent="60%" style="width: 60%;">
                                <span class="sr-only">60% Complete</span>
                            </div>
                            <span class="progress-type">SQL Server / AWS DynamoDB</span>
                            <span class="progress-completed">6.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-3" role="progressbar" data-percent="40%" style="width: 40%;">
                                <span class="sr-only">40% Complete</span>
                            </div>
                            <span class="progress-type">NoSQL</span>
                            <span class="progress-completed">4.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              </ul>
            <!-- /skill list-->

          <!-- skills-subtitle-->
            <h3 class="section-item-title2"><i class="fa fa-laptop"></i>&nbsp;&nbsp; Software Skills</h3>
            <!-- /skills-subtitle-->
              <!-- Skils List -->
            <ul class="skill-list">
                        <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar" data-percent="90%" role="progressbar" style="width: 90%;">
                                <span class="sr-only">90% Complete</span>
                            </div>
                            <span class="progress-type">Eclipse / Xcode / SVN / Git </span>
                            <span class="progress-completed">9.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
                        <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-2" data-percent="70%" role="progressbar" style="width: 70%;">
                                <span class="sr-only">70% Complete</span>
                            </div>
                            <span class="progress-type">Tableau / R / SAS / RapidMiner </span>
                            <span class="progress-completed">7.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
                      </ul>
            <!-- /Skils List -->

                <!-- skills-subtitle-->
            <h3 class="section-item-title2"><i class="fa fa-cloud-download"></i>&nbsp;&nbsp; Web Services</h3>
            <!-- /skills-subtitle-->
            <!-- skill list-->
            <ul class="skill-list">
                            <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" data-percent="85%" style="width: 85%;">
                                <span class="sr-only">85% Complete</span>
                            </div>
                            <span class="progress-type">SOAP</span>
                            <span class="progress-completed">8.5 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-2" role="progressbar" data-percent="75%" style="width: 75%;">
                                <span class="sr-only">75% Complete</span>
                            </div>
                            <span class="progress-type">Aamazon Web Services (AWS)</span>
                            <span class="progress-completed">7.5 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-3" role="progressbar" data-percent="65%" style="width: 65%;">
                                <span class="sr-only">65% Complete</span>
                            </div>
                            <span class="progress-type">RESTful</span>
                            <span class="progress-completed">6.5 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              </ul>
            <!-- /skill list-->

            <!-- skills-subtitle-->
            <h3 class="section-item-title2"><i class="fa fa-puzzle-piece"></i>&nbsp;&nbsp; Frameworks</h3>
            <!-- /skills-subtitle-->
            <!-- skill list-->
            <ul class="skill-list">
                            <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" data-percent="75%" style="width: 75%;">
                                <span class="sr-only">75% Complete</span>
                            </div>
                            <span class="progress-type">Java Spring/ JSF / JSP</span>
                            <span class="progress-completed">7.5 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-2" role="progressbar" data-percent="60%" style="width: 60%;">
                                <span class="sr-only">60% Complete</span>
                            </div>
                            <span class="progress-type">Selenium / Cocoa Touch</span>
                            <span class="progress-completed">6.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              <!-- item-list -->
                        <li>
                          <div class="progress">
                            <div class="progress-bar progress-bar-3" role="progressbar" data-percent="40%" style="width: 40%;">
                                <span class="sr-only">40% Complete</span>
                            </div>
                            <span class="progress-type">AngularJS</span>
                            <span class="progress-completed">4.0 / 10</span>
                          </div>
                        </li>
                        <!-- /item list -->
              </ul>
            <!-- /skill list-->
          </div>
        </div>
        <!--/Page: Skills-->
        <!--Page: PortFolio-->
        <div class="vcard-body section-page" id="page-portfolio">
          <!--title-->
          <h2 class="section-title">Portfolio</h2>
          <!--/title-->
          <!-- Project List-->
          <div class="projects-list">
          <!-- Project Item-->
            <div class="project-item">
              <!-- Thumbnail Background-->
            <a href="" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('');">
                  <!-- project-description -->
                  <div class="project-description-wrapper">
                    <div class="project-description">
                      <!-- project name -->
                      <h2 class="project-title">Mobile app 1</h2>
                      <!-- /project name -->
                      <span class="see-more">Crowdsourcing app for pet donations</span>
                    </div>
                  </div>
                  <!-- /project-description -->
                </a>
            </div>
          <!-- /Project Item 2-->
                    <div class="project-item">
              <!-- Thumbnail Background-->
            <a href="" class="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style="background-image: url('https://premnathramanathan.000webhostapp.com/Content/PW_2.jpg');">
                  <!-- project-description -->
                  <div class="project-description-wrapper">
                    <div class="project-description">
                      <!-- project name -->
                      <h2 class="project-title">Mobile app 1</h2>
                      <!-- /project name -->
                      <span class="see-more">Crowdsourcing app for pet donations</span>
                    </div>
                  </div>
                  <!-- /project-description -->
                </a>
            </div>
          <!-- /Project Item-->
          </div>
          <!-- /Project List-->
          <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;"><div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div></div>
          <div class="ps-scrollbar-y-rail" style="top: 0px; height: 549px; right: 4px;"><div class="ps-scrollbar-y" style="top: 0px; height: 121px;"></div></div>
        </div>
        <!--/Page: PortFolio-->
        <!--Page: Contact-->
        <div class="vcard-body section-page" id="page-contact">
          <div class="section-contact">
          <!--title-->
          <h2 class="section-title">Contact</h2>
          <!--/title-->
            <!--Contact Form-->
            <h4 class="contact-email"><i class="fa fa-paper-plane-o"></i>&nbsp; Send Me a Message</h4>
            <form id="contact-form" method="post" class="form">
              <!--form element-->
              <div class="form-element">
              <input class="form-control required" id="name" name="name" placeholder="Name" type="text" required/>
              </div>
              <!--/form element-->
                      <!--form element-->
              <div class="form-element">
                        <input class="form-control required" id="email" name="email" placeholder="Email" type="email" required/>
              </div>
              <!--/form element-->
                      <!--form element-->
              <div class="form-element">
                        <input class="form-control required" id="subject" name="subject" placeholder="Subject" type="text" required/>
              </div>
              <!--/form element-->
                      <!--form element-->
              <div class="form-element">
                        <textarea class="form-control required" id="message" name="message" placeholder="Message" type="textarea" rows=5 required></textarea>
              </div>
              <!--/form element-->
              <!--form element-->
              <div class="form-element">
              <input type="submit" class="btn btn-default form-send" value="Send" />
              </div>
              <!--/form element-->
            </form>
            <!--/Contact Form-->
            <!--Contact Email-->
            <div class="contact-info">
            <h4 class="contact-email"><i class="fa fa-envelope"></i>&nbsp;   Email</h4>
          <p>prem_chess@yahoo.co.in</p>
            </div>
            <!--/Contact Email-->
            <!--map-->
            <h4 class="contact-email"><i class="fa fa-map"></i>&nbsp;   Location</h4>
            <div class="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.0886279169786!2d-87.66552678499464!3d41.86943957922295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d1b8952ef39%3A0x6f449a6100165115!2s1444+W+Taylor+St%2C+Chicago%2C+IL+60607!5e0!3m2!1sen!2sbr!4v1490514796830" width="300" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
            <!--/map-->
          </div>
        </div>
        <!--/Page: Contact-->
          <!--End of extended view-->
    </div>
      <!-- Nivo box Image slider-->
      <!--<div class="nivo-lightbox-overlay nivo-lightbox-theme-default nivo-lightbox-effect-fade nivo-lightbox-open">
        <div class="nivo-lightbox-wrap">
          <div class="nivo-lightbox-content"><div class="nivo-lightbox-image" style="line-height: 618px; height: 618px;"><img src="https://premnathramanathan.000webhostapp.com/Content/PW_2.jpg"></div>
          </div>
          <div class="nivo-lightbox-title-wrap"></div>
            </div>
        <a href="#" class="nivo-lightbox-nav nivo-lightbox-prev" style="display: inline;">Previous</a>
        <a href="#" class="nivo-lightbox-nav nivo-lightbox-next" style="display: inline;">Next</a>
        <a href="#" class="nivo-lightbox-close" title="Close">Close</a>

      </div>-->
      <!-- End of Nivo box slider-->
        <!--End of Main Container-->
    </section>
  </div>
</template>

<script>
// import AppLayoutLinks from "@/components/layouts/AppLayoutLinks"
export default {
  name: 'AppLayoutContacts',
  components: {
    // AppLayoutLinks
  }
}
</script>

<style scoped> 
/* ===============
General Styles
===================*/

.responsive-image{
  width: 100%;
}

/* ===============
End of General Styles
===================*/
/* ===============
Style for Section
===================*/
.section {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* ===============
End of Style for Section
===================*/

/* ===============
Style for Body
===================*/
body{
  background: url("https://images.unsplash.com/photo-1471201187657-6406da15e43b?") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-font-smoothing: subpixel-antialiased;
  background-size: cover;
}

.container {
  position: relative;
  padding-bottom: 80px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
/* ===============
End of Style for Body
===================*/


/* ===============
Style for Menu Bar
===================*/ 
.main-menu{
  width:15%;
  top:0;
  position: absolute;
  left:5%;
  padding-right:10px;
  margin-top: 36px;
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  display: none;
}
@media (min-width:992px) {
  .main-menu {
    display: block;
  }
}
@media (min-width: 1400px) {
  .main-menu {
    margin-top: 186px;
  }
}
.main-menu-pgactive {
  left: 0%;
}

.main-menu-list{
  margin:0;
  padding:0;
}
.main-menu-list li{
  margin-bottom: 5px;
  padding: 0;
  margin: 5px;
  list-style: none;
}
.main-menu-list a{
  display:block;
  background: #08aeac;
  color: #ffffff;
  padding: 7px;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.main-menu-list a:active, .main-menu-list a:visited{
text-decoration: none;
}
.main-menu-list a:before{
  content: '';
  display:block;
  position:absolute;
  top:0;
  left:0;
  height: 100%;
  width: 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background: #021533;
  z-index: -1;
}

.main-menu-list a:hover{
  color: red;
  border: 0px solid transparent!important;
  text-decoration: none;
  padding-left: 30px; 
}
.main-menu-list a:hover:before{
  width:100%;
}

.main-menu-list a.menuActive{
  text-decoration: none;
  background: #021533;
  padding-left: 15px;
}

/* ===============
End of Style for Menu Bar
===================*/

/* ===============
Style for section- vcard-body
===================*/ 
.vcard-body{
  width: 99%;
  margin: 0 auto;
  margin-top:20px;
  margin-bottom: 20px;
  padding: 20px;
  border-top: 6px solid #111;
  background: #f4f4f4;
  overflow-y: scroll;
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  border-radius: 0px;
    -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  -webkit-box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.46);
  border-bottom: 15px solid #f4f4f4;
}
@media (min-width:992px) {
  .container {
    min-height: 680px;
  }
}

@media (min-width:992px) {
  .vcard-body {
    position: absolute;
    margin-top: 30px;
    left: 20%;
    height: 570px;
    width: 40%;
    padding: 45px;
    padding-bottom: 20px;
  }
}
@media (min-width: 1400px) {
  .vcard-body {
    margin-top: 180px;
  }
}
.vcard-body-pgactive {
  left: 15%;
}

/* ===============
End of Style for section- vcard-body
===================*/ 

/* ===============
Style for section-Home
===================*/ 
.section-home {
  z-index: 88;
  opacity: 1;
  overflow-y: auto;
}

.vcard-profile-photo {
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
}
.vcard-profile-photo img {
  width: 100%;
  border-radius: 100%;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
   border: 5px solid #ddd;
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  top:0;
  left:0;
  position: absolute;
  opacity: 0;
}
.profileActive {
  opacity: 1!important;
}
.color1 {
  color: #08aeac;
}
.vcard-description {
  text-align: center;
}
.profile-title {
  text-align: center;
  font-weight: bold;
  margin-top: 0;
  font-size: 30px;
  letter-spacing: -2px;
  margin-bottom: 8px;
  color: #021533;
}
.profile-subtitle {
  text-align: center;
  margin-top: 0;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: bold;
}

.hr1{
  height: 1px;
  width: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  margin-top: 10px;
  margin-bottom: 5px;
}
.description-text {
  padding: 10px;
  padding-top: 5px;
  margin-bottom: 1px;
  font-family: 'Open Sans', sans-serif;
}
.description-text p {
  font-size: 13px;
}
.description-footer-item {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  padding: 2px;
  margin-bottom: 15px;
  background-color: #08aeac;
  color: white;
  font-family: 'Open Sans', sans-serif;
}
.description-footer-item p{
  margin-bottom: 0;
  color: #ffffff;
  font-size: 12px;
}



@media (min-width:992px) {
  .section-page-single {
    left: 55%;
    transform: translateY(-200px);
    -moz-transform: translateY(-200px);
    -webkit-transform: translateY(-200px);
    visibility: hidden;
    padding: 20px;
    padding-top: 0px;
  }
}
@media (min-width:992px) {
  .section-page {
    z-index: 11;
    opacity: 0;
  }
}
.section-page-active {
  opacity: 1;
  z-index: 22;
  left: 55%;
  visibility: visible;
  transform: translateY(0px);
  -moz-transform: translateY(0px);
  -webkit-transform: translateY(0px);
}
@media (min-width:992px) {
  .section-page-active {
    margin-top: 30px;
    margin-left: 10px;
  }
}
@media (min-width: 1400px) {
  .section-page-active {
    margin-top: 180px;
  }
}
@media (min-width:992px) {
  .page-mask {
    position: absolute;
    top: 605px;
    left: 30%;
    display: block;
    width: 40%;
    height: 20px;
    background: #333;
    z-index: 77;
    opacity: 0;
    -webkit-transition: all 0.6s ease-in-out;
    -moz-transition: all 0.6s ease-in-out;
    transition: all 0.6s ease-in-out;
  }
}
.page-mask-active {
  left: 55%;
  opacity: 1;
  margin-left: 10px;
}

/* ===============
End of Style for section-Home
===================*/ 

/* ===============
Style for Footer
===================*/ 
.footer-icons {
  text-align: center;
  font-size: 28px;
}
.footer-icons a {
  color: #ffffff;
  display: inline-block;
  width:30px;
  height:30px;
  text-align:center;
  background:#333333;
    -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  line-height: 30px;
  border-radius: 0px;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
}
.footer-icons a:hover{
  color: #ffffff;
  background: #08aeac;
}

/* ===============
End of Style for Footer
===================*/ 

/* ===============
Style for Resume Page
===================*/ 
.section-education {
  margin-bottom: 40px;
}
.resume-buttons {
  margin-bottom: 30px;
}
.page-buttons {
  margin-top: -10px;
}
.page-footer {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}
/* Content Styling */
.section-title {
  color:#181031;
  text-transform: uppercase;
  font-size: 26px;
  font-weight: bold;
  line-height: 29px;
  margin-top:10px;
  padding-bottom:10px;
  border-bottom: 1px solid #181031;
  margin-bottom: 20px;
}

.section-title2 {
  font-weight: bold;
  color: #009993;
  font-size: 27px;
  line-height: 14px;
  letter-spacing: -1px;
  padding-bottom: 10px;
  padding-left: 0;
  padding-top: 5px;
  padding-bottom: 5px;
}

/* Testimonials */

.testimonials {
  text-align: center;
  font-size: 20px;
}
.testimonial-item {
  width: 100%;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .testimonial-item {
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
.testimonial-author {
  margin-top: 30px;
}

.testimonial-picture{
  width: 110px;
  height: 110px;
  overflow: hidden;
  margin: 0 auto;
}
.testimonial-picture img{
  width: 100%;
  border-radius: 100%;
  -webkit-border-radius: 100%;
  border: 6px solid #ddd;
}


.testimonial-content {
  font-size: 12px;
  background: #08aeac;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  width: 100%;
  position: relative;
}
.testimonial-content p {
  font-size: 13px;
  line-height: 18px;
}
.testimonial-content:after {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 50%;
  bottom: -5px;
  margin-left: -5px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 888;
  background: #08aeac;
}

.author-name {
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 15px;
  font-weight: bold;
}
.author-firm {
  font-size: 11px;
  margin-bottom: 0;
  text-transform: uppercase;
  font-style: italic;
  font-weight: lighter;
}



/* ===============
End of Style for Resume Page
===================*/ 

/* ===============
Style for Buttons
===================*/

.btn {
  font-weight: bold;
  color: #ffffff;
  background: #009993;
  border-radius: 0;
  font-size: 12px;
  padding: 5px 10px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  margin-bottom: 2px;
}
.btn:hover {
  background: #000000;
  color: #ffffff;
}

.btn-default {
  display: inline-block;
  padding: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #008c8a !important;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  border: 0px solid transparent!important;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.btn-default:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background: #021533;
  z-index: -1;
}
.btn-default:hover {
  color: #ffffff;
  border: 0px solid transparent!important;
}
.btn-default:hover:before {
  width: 100%;
}
.btn-default2 {
  font-size: 10px;
  background: #021533;
  font-weight: lighter;
}
.btn-default3 {
  background: #d9212a;
  color: #ffffff;
  border: 0;
  text-transform: uppercase;
}
.btn-default3:hover {
  background: #009d9b;
  color: #ffffff;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
  
/* ===============
End of Style for Buttons
===================*/

/* ===============
Style for Content
===================*/

.resume-item {
  padding: 10px;
  border: 4px double #ccc;
  margin-bottom: 20px;
}
.resume-item-title {
  font-weight: bold;
  color: #021533;
  color: #333;
  padding-left: 0;
  margin-left: 0;
  font-size: 18px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
  letter-spacing: -1px;
}
.resume-item-text {
  line-height: 15px;
  font-style: italic;
  color: #555;
  font-size: 15px;
  margin-top: 15px;
  padding-bottom: 5px;
}
.grad-date {
 line-height: 15px;
  font-style: italic;
  font-size: 12px;
}

.job {
  line-height: 15px;
  font-style: italic;
  color: #555;
  font-size: 14px;
  margin-top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
}
.job-date {
 line-height: 15px;
  font-style: italic;
  font-size: 12px;
}
.resume-item-description p{
  font-size: 14px;
}
.section-item-title2 {
  font-weight: bold;
  color: #021533;
  color: #333;
  padding-left: 0;
  margin-left: 0;
  line-height: 22px;
  margin: 0;
  margin-bottom: 8px;
  letter-spacing: -1px;
  border-bottom: 1px dotted #021533;
  padding-bottom: 5px;
  font-size: 20px;
}
/* ===============
End of Style for Content
===================*/
/* ===============
Style for Skills page
===================*/
.skill-list {
  padding-left: 0;
  margin-left: 0;
  list-style: none;
  margin-bottom: 40px;
}
.progress {
  position: relative;
  height: 25px;
  margin-bottom: 10px;
}
.progress > .progress-type {
  position: absolute;
  left: 0px;
  font-size: 13px;
  padding: 8px 10px 8px 10px;
  color: #ffffff;
  background-color: rgba(25, 25, 25, 0.2);
}
.progress > .progress-completed {
  position: absolute;
  right: 0px;
  font-weight: 800;
  padding: 3px 10px 2px;
  color: grey;
  font-size: 15px;
}
.progress-bar {
  background: #08aeac;
  width: 20%;
}
.progress-bar-2 {
  background: #111175;
}
.progress-bar-3 {
  background: #69057A;
}

/* ===============
End of Style for Skills page
===================*/

/* ===============
Style for Portfolio page
===================*/
.project-item {
  padding: 0;
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
  opacity: 1;
  -webkit-transition: all 0.8s ease-in-out;
  -moz-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
  transform: translateY(0px);
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
}
.project-item a {
  cursor: url('../assets/images/avatar.png'), projetos !important;
  border-radius: 6px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
}
.project-thumbnail {
  display: block;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  height: 250px;
  text-align: center;
  color: #ffffff;
  padding: 15px;
}
.project-thumbnail:hover {
  color: #ffffff;
}
.project-thumbnail:hover .project-description-wrapper {
  opacity: 1;
  transform: translateY(0px);
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
}
.project-thumbnail:hover .project-title,
.project-thumbnail:hover span.see-more {
  transform: translateY(0px);
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
}
.project-description-wrapper {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  color: #ffffff;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
}
.project-description {
  position: absolute;
  top: 50%;
  margin-top: -55px;
  width: 100%;
}
.project-title {
  text-transform: uppercase;
  font-size: 20px;
  transform: translateY(10px);
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.project-title:after {
  content: '';
  display: block;
  height: 1px;
  border-bottom: 1px solid #ffffff;
  width: 50%;
  margin: 0 auto;
  opacity: 0.5;
  margin-top: 10px;
  margin-bottom: 10px;
}
.project-thumbnail {
  display: block;
  color: #ffffff;
  position: relative;
}
span.see-more {
  font-style: italic;
  text-transform: lowercase;
  letter-spacing: 3px;
  font-size: 12px;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  transform: translateY(10px);
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
}

.form-element {
  margin-bottom: 8px;
}

.form-control{
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  height: 50px;
}

.form-send {
 width: 100%; 
}
.form-send:hover{
  background: #d9212a !important;
}
::-webkit-input-placeholder {
  font-style: italic;
  color: #999999 !important;
}
:-moz-placeholder {
  font-style: italic;
  color: #999999 !important;
}
::-moz-placeholder {
  font-style: italic;
  color: #999999 !important;
}
:-ms-input-placeholder {
  font-style: italic;
  color: #999999 !important;
}

.contact-email {
  font-size:13px;
  margin-bottom: 10px;
  margin-top: 25px;
  font-weight: bold;
  color: #099993;
  padding-bottom: 5px;
  border-bottom: 1px dotted #099993;
}
.contact-info p{
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -1px;
}

.contact-map{
  position:relative;
  margin-bottom:20px;
}
</style>