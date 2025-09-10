# 📝 AI Resume Analyzer

Welcome to **AI Resume Analyzer** – an intelligent platform that helps you get smart, AI-powered feedback on your resume for your dream job!

![AI Resume Analyzer Banner](./public/images/banner.png)

---

## 🚀 What is this project?

AI Resume Analyzer is a web application that allows users to upload their resume (PDF), select a job description, and instantly receive actionable feedback and an ATS (Applicant Tracking System) score. The platform leverages AI to analyze your resume against the job requirements, highlighting strengths and suggesting improvements to boost your chances of landing interviews.

---

## ✨ Features

- **Easy Resume Upload:** Drag and drop your PDF resume.
- **Job Matching:** Enter the company, job title, and job description for tailored analysis.
- **AI Feedback:** Get instant, detailed feedback and improvement tips.
- **ATS Score:** See how your resume performs against automated screening systems.
- **Visual Preview:** See a generated image preview of your resume’s first page.

---

## 🖥️ Demo

![Demo GIF](./public/images/demo.gif)

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai-resume-analyzer.git
   cd ai-resume-analyzer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Copy the PDF.js worker to the public folder:**
   ```bash
   cp node_modules/pdfjs-dist/build/pdf.worker.min.mjs public/pdf.worker.min.mjs
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

---

## ⚙️ Configuration

- Make sure you have the correct API keys and environment variables set up for any AI or storage services you use.
- The PDF.js worker must match the version of `pdfjs-dist` installed.

---

## 🛠️ Technologies Used

- **React** & **Remix** – Modern web UI and routing
- **TypeScript** – Type safety
- **pdfjs-dist** – PDF parsing and rendering
- **Tailwind CSS** – Styling
- **OpenAI / AI API** – Resume analysis (customizable)
- **Cloud Storage** – For file uploads

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Inspiration

Built to help job seekers improve their resumes and land their dream jobs with the power of AI!

---

> **Made with ❤️ using React Router.**
