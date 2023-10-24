'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return <div>
    <div className="container mx-auto max-w-4xl">
      <div className="min-h-full bg-base-100 py-16 flex-wrap justify-center xl:justify-between gap-5">
        <div className="hover:cursor-pointer" onClick={() => router.push('/')}>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight">Resume Review AI</h1>
        </div>
      </div>
    </div>

    <div className="container mx-auto max-w-4xl">
      <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter !leading-tight">Resume Worded vs. automix.ai: Elevating Your Resume with AI</h1>
      <div className="prose">
        <blockquote className="my-4 border-l-4 border-stone-700 font-normal">
          <a href="https://automix.ai">automix.ai</a> stands out with in-depth analysis, clear steps, affordability, privacy, and innovative features. It&apos;s your key to an exceptional job search.
        </blockquote>
      </div>
      <div>
        <Image src="/post0001.png" width={1216} height={832} alt="Resume Worded vs. automix.ai: Elevating Your Resume with AI" className="w-full" />
      </div>
      <div className="prose py-8 max-w-full">
        <p>
          In the competitive world of job hunting, your resume is your first opportunity to make a lasting impression on potential employers. Ensuring your resume stands out and accurately reflects your skills and experiences is paramount. Resume optimization tools have gained popularity for helping job seekers achieve this, but not all platforms are created equal. In this article, we&apos;ll compare two such tools: Resume Worded and <a href="https://automix.ai">automix.ai</a>, and explore how <a href="https://automix.ai">automix.ai</a> offers a superior solution for job seekers.
        </p>
        <h3>1. Detailed Analysis and Clear Action Steps</h3>
        <p>
          <a href="https://automix.ai">automix.ai</a> goes the extra mile by providing a comprehensive and in-depth analysis of your resume. It doesn&apos;t just highlight potential issues; it offers clear, actionable suggestions on how to improve your document. This hands-on approach gives users specific steps to enhance their resumes, making it easier to implement improvements.
        </p>
        <h3>2. Affordable, One-time Payment</h3>
        <p>
          While Resume Worded often comes with subscription models, <a href="https://automix.ai">automix.ai</a> is tailored for the budget-conscious job seeker. Offering a one-time payment option, <a href="https://automix.ai">automix.ai</a> eliminates the need for recurrent financial commitments, ensuring that users get the most value for their money.
        </p>
        <h3>3. Privacy-Safe Approach</h3>
        <p>
          Privacy is a paramount concern in today&apos;s digital landscape. Resume Worded may require users to share personal data, potentially raising privacy concerns. In contrast, <a href="https://automix.ai">automix.ai</a> ensures that your data is kept secure and doesn&apos;t share it with any third parties, providing peace of mind to users.
        </p>
        <h3>4. Innovative Features</h3>
        <p>
          <a href="https://automix.ai">automix.ai</a> offers an array of innovative features designed to help job seekers not just create a compelling resume but also excel in the job market. Features like mock interviews with AI, resume consultation with AI advisors, access to online courses, and the ability to generate tailored resumes using the job description set <a href="https://automix.ai">automix.ai</a> apart from its competitors, making it a one-stop platform for career enhancement.
        </p>
        <h3>5. Tailored Resume Generation</h3>
        <p>
          One of the standout features of <a href="https://automix.ai">automix.ai</a> is its ability to generate tailored resumes by analyzing job descriptions. This ensures that your resume aligns perfectly with the specific requirements of the job you&apos;re targeting. Resume Worded may not offer this level of customization.
        </p>
        <p>
          In conclusion, while both Resume Worded and <a href="https://automix.ai">automix.ai</a> are valuable tools for job seekers, <a href="https://automix.ai">automix.ai</a> takes the lead by offering a more detailed analysis, clear action steps, affordability, enhanced privacy protection, and a rich set of features that empower users to not only create impressive resumes but also excel in their job search journey. With its commitment to user-centric innovation, <a href="https://automix.ai">automix.ai</a> is the ideal choice for anyone looking to make their resume truly stand out in the competitive job market. Don&apos;t just optimize your resume; elevate your entire job search strategy with <a href="https://automix.ai">automix.ai</a>.
        </p>
        <p className="text-center py-8">
          <Link className="btn btn-block md:btn-wide mx-auto btn-primary" href="https://automix.ai">Try automix.ai</Link>
        </p>
      </div>
    </div>
  </div>
}
