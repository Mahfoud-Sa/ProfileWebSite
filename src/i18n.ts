import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "projects": "Projects",
        "portfolio": "Portfolio",
        "contact": "Contact",
        "getStarted": "Get Started"
      },
      "hero": {
        "badge": "Full-Stack Developer",
        "title": "Building Digital Solutions for Your Business",
        "description": "I specialize in React, Next.js, ASP.NET Core, and API development to create scalable and efficient systems.",
        "startProject": "Start a Project",
        "viewPortfolio": "View Portfolio",
        "satisfaction": "Client Satisfaction"
      },
      "skills": {
        "title": "My Skills",
        "subtitle": "Technical Expertise",
        "list": ["React", "Next.js", "ASP.NET Core", "RESTful APIs", "Figma", "Swagger", "SQL Server", "Azure"]
      },
      "services": {
        "title": "My Services",
        "description": "Comprehensive digital solutions tailored to your business needs.",
        "viewAll": "View All Services",
        "expertise": "Expertise",
        "scaleVision": "Solutions that scale with your vision.",
        "expertiseDesc": "I offer a wide range of digital services including mobile applications, website development, and complex systems integration.",
        "mobile": "Mobile Application Development",
        "web": "Website Development",
        "integration": "Systems Integration",
        "processTitle": "Development Process",
        "processDesc": "A transparent, agile process ensuring quality from discovery to deployment.",
        "steps": [
          "Discovery & Requirements",
          "UI/UX Design (Figma)",
          "Agile Development",
          "API Documentation (Swagger)",
          "Deployment & Support"
        ]
      },
      "projects": {
        "title": "Featured Projects",
        "description": "A showcase of successful digital solutions delivered to clients.",
        "viewAll": "View All Projects",
        "work": "Portfolio",
        "innovative": "Innovative solutions that drive growth.",
        "workDesc": "Explore projects like Herfah and Accounting Project Management systems that solve real-world business challenges.",
        "herfah": "Herfah - Artisan Marketplace",
        "accounting": "Accounting & Project Management System"
      },
      "chat": {
        "title": "AI Assistant",
        "placeholder": "Ask me anything about my skills or projects...",
        "welcome": "Hi! I'm an AI agent representing the developer. How can I help you today?",
        "error": "Sorry, I'm having trouble connecting. Please try again later."
      },
      "portfolio": {
        "showcase": "Showcase",
        "latestCreations": "Our Latest Creations",
        "categories": {
          "all": "All",
          "webApp": "Web App",
          "mobileApp": "Mobile App",
          "uiUx": "UI/UX Design",
          "branding": "Branding"
        }
      },
      "about": {
        "badge": "About Me",
        "title": "A developer dedicated to building high-quality digital products.",
        "description": "With a strong foundation in both frontend and backend technologies, I help businesses transform their ideas into scalable and efficient digital solutions. My approach combines technical excellence with a deep understanding of business needs.",
        "mission": "My Mission",
        "missionDesc": "To provide high-quality, scalable, and innovative digital solutions that help businesses achieve their goals and stay ahead in a rapidly evolving technological landscape.",
        "vision": "My Vision",
        "visionDesc": "To be a trusted partner in digital transformation, recognized for technical excellence and creative problem-solving.",
        "expertise": "My Expertise",
        "expertiseDesc": "Over the years, I have mastered a diverse set of technologies to build robust systems."
      },
      "contact": {
        "badge": "Contact Us",
        "title": "Let's build something extraordinary.",
        "description": "Have a project in mind? Or just want to say hello? We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.",
        "emailUs": "Email Us",
        "callUs": "Call Us",
        "visitUs": "Visit Us",
        "visitUsAddress": "123 Tech Avenue, Innovation District\nSan Francisco, CA 94103",
        "form": {
          "name": "Full Name",
          "email": "Email Address",
          "message": "Your Message",
          "placeholderName": "John Doe",
          "placeholderEmail": "john@example.com",
          "placeholderMessage": "Tell us about your project...",
          "send": "Send Message",
          "successTitle": "Message Sent!",
          "successDesc": "Thank you for reaching out. We'll be in touch soon.",
          "sendAnother": "Send another message"
        }
      },
      "cta": {
        "title": "Ready to start your digital journey?",
        "description": "Let's collaborate to build something amazing. Our team is ready to turn your ideas into reality.",
        "getInTouch": "Get in Touch"
      },
      "footer": {
        "description": "Empowering businesses with cutting-edge digital solutions. We build the future, one line of code at a time.",
        "services": "Services",
        "company": "Company",
        "newsletter": "Newsletter",
        "newsletterDesc": "Stay updated with our latest news and offers.",
        "newsletterPlaceholder": "Enter your email",
        "subscribe": "Subscribe",
        "rights": "All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service",
        "cookies": "Cookie Policy"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "about": "من نحن",
        "services": "خدماتنا",
        "projects": "المشاريع",
        "portfolio": "الأعمال",
        "contact": "اتصل بنا",
        "getStarted": "ابدأ الآن"
      },
      "hero": {
        "badge": "مطور متكامل (Full-Stack)",
        "title": "بناء حلول رقمية لأعمالك",
        "description": "أنا متخصص في React و Next.js و ASP.NET Core وتطوير الـ API لإنشاء أنظمة قابلة للتوسع وفعالة.",
        "startProject": "ابدأ مشروعاً",
        "viewPortfolio": "عرض الأعمال",
        "satisfaction": "رضا العملاء"
      },
      "skills": {
        "title": "مهاراتي",
        "subtitle": "الخبرة التقنية",
        "list": ["React", "Next.js", "ASP.NET Core", "RESTful APIs", "Figma", "Swagger", "SQL Server", "Azure"]
      },
      "services": {
        "title": "خدماتي",
        "description": "حلول رقمية شاملة مصممة لتناسب احتياجات عملك.",
        "viewAll": "عرض جميع الخدمات",
        "expertise": "الخبرة",
        "scaleVision": "حلول تتوسع مع رؤيتك.",
        "expertiseDesc": "أقدم مجموعة واسعة من الخدمات الرقمية بما في ذلك تطبيقات الجوال وتطوير المواقع وتكامل الأنظمة المعقدة.",
        "mobile": "تطوير تطبيقات الجوال",
        "web": "تطوير المواقع الإلكترونية",
        "integration": "تكامل الأنظمة",
        "processTitle": "عملية التطوير",
        "processDesc": "عملية شفافة ورشيقة تضمن الجودة من الاكتشاف إلى النشر.",
        "steps": [
          "الاكتشاف والمتطلبات",
          "تصميم الواجهة (Figma)",
          "التطوير الرشيق (Agile)",
          "توثيق الـ API (Swagger)",
          "النشر والدعم"
        ]
      },
      "projects": {
        "title": "المشاريع المميزة",
        "description": "معرض للحلول الرقمية الناجحة التي تم تقديمها للعملاء.",
        "viewAll": "عرض جميع المشاريع",
        "work": "الأعمال",
        "innovative": "حلول مبتكرة تدفع النمو.",
        "workDesc": "استكشف مشاريع مثل 'حرفة' وأنظمة إدارة المشاريع المحاسبية التي تحل تحديات الأعمال الحقيقية.",
        "herfah": "حرفة - سوق الحرفيين",
        "accounting": "نظام المحاسبة وإدارة المشاريع"
      },
      "chat": {
        "title": "المساعد الذكي",
        "placeholder": "اسألني أي شيء عن مهاراتي أو مشاريعي...",
        "welcome": "مرحباً! أنا وكيل ذكاء اصطناعي أمثل المطور. كيف يمكنني مساعدتك اليوم؟",
        "error": "عذراً، أواجه مشكلة في الاتصال. يرجى المحاولة لاحقاً."
      },
      "portfolio": {
        "showcase": "معرض الأعمال",
        "latestCreations": "أحدث إبداعاتنا",
        "categories": {
          "all": "الكل",
          "webApp": "تطبيقات الويب",
          "mobileApp": "تطبيقات الجوال",
          "uiUx": "تصميم واجهة المستخدم",
          "branding": "العلامة التجارية"
        }
      },
      "about": {
        "badge": "عني",
        "title": "مطور مكرس لبناء منتجات رقمية عالية الجودة.",
        "description": "مع أساس قوي في تقنيات الواجهة الأمامية والخلفية، أساعد الشركات على تحويل أفكارها إلى حلول رقمية قابلة للتوسع وفعالة. يجمع نهجي بين التميز التقني والفهم العميق لاحتياجات العمل.",
        "mission": "مهمتي",
        "missionDesc": "تقديم حلول رقمية عالية الجودة ومبتكرة تساعد الشركات على تحقيق أهدافها والبقاء في الصدارة في مشهد تكنولوجي سريع التطور.",
        "vision": "رؤيتي",
        "visionDesc": "أن أكون شريكاً موثوقاً في التحول الرقمي، معروفاً بالتميز التقني والحل الإبداعي للمشكلات.",
        "expertise": "خبراتي",
        "expertiseDesc": "على مر السنين، أتقنت مجموعة متنوعة من التقنيات لبناء أنظمة قوية."
      },
      "contact": {
        "badge": "اتصل بنا",
        "title": "لنقم ببناء شيء استثنائي.",
        "description": "هل لديك مشروع في الاعتبار؟ أو تريد فقط إلقاء التحية؟ نود أن نسمع منك. املأ النموذج وسيقوم فريقنا بالرد عليك في غضون 24 ساعة.",
        "emailUs": "راسلنا عبر البريد",
        "callUs": "اتصل بنا",
        "visitUs": "قم بزيارتنا",
        "visitUsAddress": "123 شارع التكنولوجيا، منطقة الابتكار\nسان فرانسيسكو، كاليفورنيا 94103",
        "form": {
          "name": "الاسم الكامل",
          "email": "البريد الإلكتروني",
          "message": "رسالتك",
          "placeholderName": "أحمد محمد",
          "placeholderEmail": "ahmed@example.com",
          "placeholderMessage": "أخبرنا عن مشروعك...",
          "send": "إرسال الرسالة",
          "successTitle": "تم إرسال الرسالة!",
          "successDesc": "شكراً لتواصلك معنا. سنقوم بالرد عليك قريباً.",
          "sendAnother": "إرسال رسالة أخرى"
        }
      },
      "cta": {
        "title": "جاهز لبدء رحلتك الرقمية؟",
        "description": "دعنا نتعاون لبناء شيء مذهل. فريقنا مستعد لتحويل أفكارك إلى واقع.",
        "getInTouch": "تواصل معنا"
      },
      "footer": {
        "description": "تمكين الشركات بحلول رقمية متطورة. نحن نبني المستقبل، سطراً برمجياً تلو الآخر.",
        "services": "الخدمات",
        "company": "الشركة",
        "newsletter": "النشرة الإخبارية",
        "newsletterDesc": "ابق على اطلاع بأحدث أخبارنا وعروضنا.",
        "newsletterPlaceholder": "أدخل بريدك الإلكتروني",
        "subscribe": "اشتراك",
        "rights": "جميع الحقوق محفوظة.",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الخدمة",
        "cookies": "سياسة ملفات الارتباط"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  });

export default i18n;
