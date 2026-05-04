
import './App.css'

function App() {


  return (
    <div className='p-1'>
      <heading className='m-0.5'>
        <h1  className=" text-white font-bold bg-green-900 text-2xl p-2 mb-3 rounded-b-lg shadow-gray-700 shadow-lg flex" >Anil Chaudhary</h1>
        <h4 className='text-left'>Full Stack Developer</h4>
      </heading>
      <div className='grid grid-cols-1 md:grid-cols-3 bg-gray-200 text-black gap-2'>
        <side className="col-start-1 col-end-2 text-sm">
          <h2>DETAILS</h2>
          <info className='text-left'>
            📩 chaudharyanil543@gmail.com <br></br>
            📞 + 224 249 2282
          </info>
          <h2>SKILLS</h2>
          <ul className='text-left text-xs'>
            <li>Next.js(App Router, Pages Router)</li>
            <li>React.js(Hooks, Functional Components, State Management)</li>
            <li>JavaScript </li>
            <li>TypeScript</li>
            <li>Server-Side Rendering(SSR)</li>
            <li>Static Site Generation(SSG)</li>
            <li>Incremental Static Regeneration(ISR) </li>
            <li>Authentication</li>
            <li>Database Integration with MongoDB and Prisma ORM</li>
            <li>Tailwind CSS</li>
            <li>Responsive Web Design</li>
            <li>Code Splittig and Lazy loading</li>
            <li>Git and GitHub</li>
            <li>Deployment</li>
            <li>Debugging and Error Handling</li>
          </ul>

        </side>

        <main className='md:col-span-2 p-2 '>
          <h2>SUMMARY</h2>
          <p className='text-left text-xs'>
            Full Stack developer with proficiency in Next.js and React, specializing in building efficient,
            scalable and secure web applications like authentication, e-commerce,
            payments, and AI-based applications. Proven experience in building a complete authentication
            platform using OAuth and two-factor authentication (2FA). Designed and implemented a state-driven architecture
            of an e-commerce application with features like real-time carts and reviews.
            Also built an efficient workflow to perform payments.

            Moreover, designed a low latency system for AI voice applications using OpenAI technologies like Whisper,
            GPT, TTS that helps in real-time speech processing with support for multiple languages
            including Nepali. Holds strong technical skills in server-client architecture, state management,
            API development, and optimizations.
          </p>

          <h2>PROJECTS</h2>
          <strong>Froms Management with Next.js</strong>
          <ul className='text-left text-xs'>
            <li>Create form UI using Tailwind CSS and shadcn.</li>
            <li>Implement schema validation with Zod to data integrity across client and server.</li>
            <li>Managing State with React Hook Form.</li>
            <li>Four unique methods for submitting form data:
              <li >  •Send a JSON payload to an API endpoint. </li>
              <li>  •Send form data payload to an API endpoint.</li>
              <li>  •Passing a data object to a server action.</li>
              <li>  •Sending form data object to another server action.</li>
            </li>
          </ul>
          <strong>Full-Stack Auth System with Session Management</strong>
          <ul className='text-left text-xs'>
            <li>•A full stack authentication solution was created which included both the traditional combination of an email ID and password along with the use of social logins using Better Auth.</li>
            <li>•The server-side authentication along with secure session management with Next.js made sure there were secure ways of logging in.</li>
            <li>•Security and flexibility of the application were further  added by including 2FA using TOTP done uisng the plugin architecure approach.</li>
          </ul>
          <strong>E-commerce Website</strong>
          <ul className='text-left text-xs'>
            <li>•This project encompasses the developement of a complete stack e-commerce website uisng Next.js with React Server Components and Client Components to ensure state management and efficient rendering.</li>
            <li>•The global car was built using the React Context API. As a result, the cart can be updated dynamically across components, as well as perform the tasks of adding items and clearing the cart.</li>
            <li>•The necessary server actions were  created to provide smooth client actins were created to provide smooth client-server synchronization for all cart-related and review-related actions.</li>
            <li>•Product reviews have been implemented using a dynamic product review system with real-time updates and automatic averaging og product ratings.</li>
            <li>•State management and persistence have been ensured during the page of routing of related products and dynamic products. Common components that can be reused include Header, CartPopup, ProductDetail.</li>
          </ul>
          <strong>Nepali AI Voice Assistant</strong>
          <ul className='text-left text-xs'>
            <li>•Using Next.js along with the OpenAI API, a real-time AI voice assistant was built to make text-to-speech, speech-to-text, and AI generated responses easier.</li>
            <li>•A framework for building GPT-based conversational AI was combined with voice recognition through Whisper technology to produce more natural responses in the Nepali language.</li>
            <li>•Building an audio pipeline with low latency, starting from audio input to transcription to generating an AI response and generating speech was built.</li>
            <li>•Working on reducing memory consumption and handling file streams properly by converting Blob to File was done to improve performance in the backend.</li>
            <li>•Setting response size limits and proper error handling to avoid server crashes while improving API performance was implemented.</li>

          </ul>
          <h2>EDUCATION</h2>
          <strong>Bachelor of Computer Science, NorthEastern University</strong><br></br>
          2020-2023<br></br>
          Graduated summa cum laude. <br />

          <strong>High School Diploma, Harry S Truman College, Chicago</strong><br></br>
          2017-2020



        </main>
      </div>
    </div>
  )
}

export default App
