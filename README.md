# KNIT College Website - Modern Education Portal

A comprehensive, modern website for Kamla Nehru Institute of Technology (KNIT), built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This project modernizes the KNIT college website (knit.ac.in) with a fresh design, improved user experience, and contemporary web technologies. The website serves as the primary digital gateway for students, faculty, and prospective applicants.

## ✨ Features

### 🏠 **Homepage**
- Hero section with compelling messaging
- Quick statistics and key metrics
- Academic programs overview
- Latest news and events
- Call-to-action sections for admissions

### 📚 **Academic Programs**
- Comprehensive program listings (B.Tech, M.Tech, Ph.D)
- Department-wise information
- Course curricula and specializations
- Academic calendar integration

### 🎓 **Admissions**
- Detailed admission process
- Eligibility criteria and requirements
- Fee structure with transparency
- Application timeline and deadlines
- Document requirements checklist

### ℹ️ **About KNIT**
- Institution history and legacy
- Vision and mission statements
- Leadership team profiles
- Accreditation and rankings
- Key achievements and milestones

### 📞 **Contact**
- Multiple contact methods
- Interactive contact form
- Campus location with directions
- Department-wise contact information
- Office hours and availability

## 🛠 Tech Stack

- **Framework:** Next.js 15.5.0 with App Router
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x
- **UI Components:** Custom React components
- **Icons:** Heroicons & Custom SVG icons
- **Fonts:** Geist Sans & Geist Mono
- **Performance:** Turbopack for faster development

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd aca-portal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
aca-portal/
├── app/                          # App Router directory
│   ├── components/              # Reusable components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── about/                   # About page
│   │   └── page.tsx
│   ├── academics/               # Academic programs
│   │   └── page.tsx
│   ├── admissions/              # Admission information
│   │   └── page.tsx
│   ├── contact/                 # Contact page
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx              # Loading component
│   ├── not-found.tsx           # 404 page
│   └── page.tsx                # Homepage
├── public/                      # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#1E40AF` (Blue-700)
- **Secondary Blue:** `#1E3A8A` (Blue-800)
- **Accent Yellow:** `#F59E0B` (Amber-500)
- **Success Green:** `#10B981` (Emerald-500)
- **Gray Scale:** Various shades for content hierarchy

### Typography
- **Headings:** Geist Sans (Bold weights)
- **Body:** Geist Sans (Regular/Medium)
- **Code:** Geist Mono

### Components
- Consistent spacing using Tailwind's scale
- Responsive design patterns
- Accessibility-first approach
- Modern card-based layouts

## 🔧 Development Guidelines

### Code Style
- TypeScript with strict mode enabled
- ESLint configuration for code quality
- Functional components with React hooks
- Tailwind CSS for styling

### Component Structure
- Each component in its own file
- Clear prop interfaces with TypeScript
- Responsive design considerations
- Accessibility attributes included

### Performance Optimizations
- Next.js Image component for optimized images
- Turbopack for faster development builds
- Code splitting and lazy loading
- SEO optimization with metadata

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `out/` directory to web server
3. Configure server for SPA routing

## 📱 Responsive Design

The website is fully responsive across:
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+
- **Large Screens:** 1440px+

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Color contrast optimization

## 🔮 Future Enhancements

### Planned Features
- [ ] Student portal integration
- [ ] Faculty dashboard
- [ ] Online application system
- [ ] Virtual campus tour
- [ ] Alumni network portal
- [ ] Research publication system
- [ ] Event management system
- [ ] Multi-language support

### Technical Improvements
- [ ] Content Management System (CMS) integration
- [ ] Database connectivity
- [ ] User authentication system
- [ ] API integrations
- [ ] Advanced SEO optimization
- [ ] Performance monitoring

## 📊 Analytics & Monitoring

- Google Analytics integration ready
- Performance monitoring setup
- User behavior tracking
- Conversion funnel analysis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Kamla Nehru Institute of Technology.

## 📧 Support

For technical support or questions:
- Email: webmaster@knit.ac.in
- Development Team: developers@knit.ac.in

---

**Built with ❤️ for KNIT College**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
