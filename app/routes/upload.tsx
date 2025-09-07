import { useState, type FormEvent } from 'react'
import FileUploader from '~/components/FileUploader';
import Navbar from '~/components/Navbar'


const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false); 
    const [statusText, setStatusText] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {}

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback for you dream job</h1>
                    {isProcessing ? (
                        <>
                        <h2>{statusText}</h2>
                        <img src="/images/resume-scan-2.gif" className="w-full" />
                        </>
                        ) : (
                            <h2>Drop your resume for an ATS score and improvement tips</h2>
                        )}
                        {!isProcessing && (
                            <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                                <div className="form-div">
                                    <label htmlFor="company-name">Company name</label>
                                    <input type="text"  name="Company-name" placeholder="Company Name" id="company-name" />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="job-title">Job title</label>
                                    <input type="text"  name="job-title" placeholder="Job Title" id="job-title" />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="job-description">Job description</label>
                                    <textarea rows={5} name="job-description" placeholder="Paste the job description here..."></textarea>
                                </div>
                                <div className="form-div">
                                    <label htmlFor="uploader">Upload resume</label>
                                    <FileUploader />
                                </div>

                                <button className="primary-button" type="submit">
                                    Upload & Analyze
                                </button>

                            </form>
                        )}
                </div>
            </section>
        </main>
    )
}

export default Upload