# OSUT - Official Website

The official portal for **OSUT (Organizația Studenților din Universitatea Tehnică din Cluj-Napoca)**. This project is a modern, high-performance web application designed to keep students informed, represent their interests, and showcase the organization's initiatives.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS
- **Data Store**: [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) (JSON-based serverless storage)
- **Deployment**: [Vercel](https://vercel.com/)
- **Icons**: [Iconoir](https://iconoir.com/)

## ✨ Key Features

- **Dynamic Blog system**: "OSUT te informează" - fully manageable news feed.
- **Admin Dashboard**: Secure panel at `/admin` to Create, Edit, and Delete posts.
- **Optimized Performance**: 100% `next/image` usage with proper sizing and LCP strategies.
- **Full SEO**: Dynamic `sitemap.xml`, `robots.txt`, and metadata optimized for `osut.org`.
- **Sustainability Hub**: Dedicated section for green initiatives and activity reports.
- **Responsive Design**: Mobile-first approach with premium animations and gradients.

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- A Vercel account (for Blob storage)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/osutcj/osut.git
   cd osut
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root directory:
   ```env
   # Secure password for the /admin dashboard
   ADMIN_PASSWORD=your_secure_password

   # Required for production storage (Get from Vercel Dashboard)
   BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📖 Project Structure

- `app/`: Contains all routes and API endpoints.
- `components/`: Modular UI building blocks.
- `lib/`: Shared utility logic, including the `posts.ts` data layer.
- `public/`: Static assets, images, and PDF documents.

## 🔒 Administration

To manage the website content:
1. Navigate to `/admin`.
2. Enter the `ADMIN_PASSWORD` defined in your environment variables.
3. Use the dashboard to publish news. Changes typically propagate within 1-3 seconds due to Vercel Blob's global sync.

## 📄 License

This project is maintained by OSUT Cluj. All rights reserved.
