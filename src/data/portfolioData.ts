import { ProfileData, Project, SkillCategory } from '../types';

export const INITIAL_PROFILE_DATA: ProfileData = {
  name: "Isha Prajapati",
  role: "Software Developer | .NET Developer",
  tagline: "Turning Ideas Into Powerful Digital Solutions.",
  shortBio:
    "Hello! I'm Isha Prajapati, a passionate .NET Software Developer who enjoys building dynamic, scalable and user-friendly web applications. I love learning new technologies, solving problems and creating meaningful digital experiences.",
  detailedBio:
    "I'm Isha Prajapati, a dedicated .NET Software Developer with less than one year of professional experience. I enjoy developing dynamic web applications, working with databases and creating practical software solutions.\n\nMy primary focus is Microsoft .NET technologies, especially ASP.NET MVC, C#, SQL Server and Entity Framework.\n\nI believe in writing clean code, learning continuously and improving my development skills through real-world projects.",
  email: "lifeisha2002@gmail.com",
  location: "India",
  linkedin: "https://www.linkedin.com/in/ishaprajapati23",
  github: "https://github.com/ishaprajapati776-collab",
  experienceDuration: "Less than 1 Year",
  experience: [
    {
      id: "exp-1",
      position: ".NET Software Developer",
      company: "[Company / Organization Name]",
      location: "India",
      period: "[Joining Date] – Present",
      experienceDuration: "Less than 1 Year",
      description:
        "Working on web application development using Microsoft .NET technologies, database integration and responsive user interfaces.",
      keyAreas: [
        "ASP.NET MVC Development",
        "C# Programming",
        "SQL Server Database",
        "Entity Framework",
        "Bug Fixing and Debugging",
        "Responsive UI Development",
      ],
      technologies: ["C#", "ASP.NET MVC", "SQL Server", "Entity Framework", "LINQ", "JavaScript", "Bootstrap"],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "[Degree / Qualification]",
      institution: "[College / University Name]",
      period: "[Passing Year]",
      coursework: [
        "Object-Oriented Programming (C#)",
        "Database Management Systems (RDBMS)",
        "Data Structures & Algorithms",
        "Web Application Development",
        "Software Engineering Practices",
      ],
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "mandir-search-platform",
    name: "Mandir Search Platform",
    tagline: "Temple, Pandit & Pooja Service Management Ecosystem",
    description:
      "A dynamic web application designed to manage temple information, Pandit registrations, pooja services, location-based services and package management.",
    role: "Full-Stack .NET Developer",
    badge: "Full Stack .NET",
    category: "Full Stack",
    githubUrl: "https://github.com/ishaprajapati776-collab/mandir-search-platform",
    liveDemoUrl: "#",
    features: [
      "Pandit Registration and Management",
      "Temple Management",
      "Pooja Services",
      "Wallet Management",
      "Package Allocation",
      "Admin Dashboard",
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "SQL Server",
      "Entity Framework",
      "Bootstrap",
      "JavaScript",
    ],
    architectureDetails: {
      overview:
        "Engineered with ASP.NET MVC architecture using repository pattern and Entity Framework Code-First. Implements role-based access for devotees, pandits, and administrators with relational schema constraints.",
      keyHighlights: [
        "Structured controllers for temple directories, ritual catalogs, and pandit verified profiles",
        "Relational SQL Server database with indexes on location and service categories",
        "Admin control hub for vetting pandit registrations and auditing booking allocations",
        "Modular UI with responsive Bootstrap components and async jQuery AJAX requests",
      ],
      csharpSnippet: `// ASP.NET MVC - Pandit Pooja Booking Controller
[HttpPost]
[ValidateAntiForgeryToken]
public async Task<ActionResult> BookPooja(PoojaBookingViewModel model)
{
    if (!ModelState.IsValid)
        return View(model);

    var devoteeId = User.Identity.GetUserId();
    var hasSufficientBalance = await _walletService
        .CheckBalanceAsync(devoteeId, model.ServiceAmount);

    if (!hasSufficientBalance)
    {
        ModelState.AddModelError("", "Insufficient wallet balance to schedule this Pooja.");
        return View(model);
    }

    var allocation = await _poojaService.AllocatePanditAsync(model.TempleId, model.PoojaId, model.ScheduledDate);
    await _walletService.DebitAsync(devoteeId, model.ServiceAmount, $"Booking for {model.PoojaName}");
    
    return RedirectToAction("BookingConfirmation", new { id = allocation.Id });
}`,
      databaseStructure: [
        "Temples (TempleId, Name, Location, Contact, Description, CreatedAt)",
        "Pandits (PanditId, FullName, Specialization, VerificationStatus, Rating)",
        "PoojaServices (ServiceId, TempleId, Title, Duration, Fee, IsActive)",
        "Allocations (AllocationId, PoojaId, PanditId, DevoteeId, ScheduledAt, Status)",
        "Wallets (WalletId, UserId, Balance, LastUpdated)",
      ],
    },
  },
  {
    id: "wallet-package-management",
    name: "Wallet & Package Management System",
    tagline: "Financial Ledger, Package Allocation & Refund Engine",
    description:
      "A wallet and package management module that allows users to purchase packages, manage wallet balances, track credit/debit transactions and process package cancellations with proportional refunds.",
    role: "Backend & Database Developer",
    badge: "Backend & Logic",
    category: "Backend",
    githubUrl: "https://github.com/ishaprajapati776-collab/wallet-package-system",
    liveDemoUrl: "#",
    features: [
      "Wallet Balance Management",
      "Credit and Debit Transactions",
      "Package Purchase",
      "Package Allocation History",
      "Cancellation and Refund Calculation",
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "SQL Server",
      "Entity Framework",
    ],
    architectureDetails: {
      overview:
        "Core financial ledger and entitlement module enforcing transactional integrity. Incorporates strict decimal arithmetic, double-entry audit records, and dynamic proportional refund logic on package cancellations.",
      keyHighlights: [
        "Double-entry transaction tracking for credit/debit ledger with non-repudiation",
        "Deterministic refund calculator computing proportional deduction based on elapsed duration or used allocations",
        "SQL Server ACID transactions ensuring zero balance inconsistencies under concurrent loads",
        "Entity Framework LINQ query optimizations with projection and eager loading",
      ],
      csharpSnippet: `// C# Service - Proportional Cancellation Refund Algorithm
public async Task<RefundResult> ProcessCancellationAsync(int allocationId, string reason)
{
    using (var transaction = await _dbContext.Database.BeginTransactionAsync())
    {
        var allocation = await _dbContext.PackageAllocations
            .Include(a => a.Package)
            .FirstOrDefaultAsync(a => a.Id == allocationId);

        if (allocation == null || allocation.IsCancelled)
            throw new InvalidOperationException("Allocation invalid or already cancelled.");

        // Calculate proportional refund: Deduct completed sessions
        decimal completedFraction = (decimal)allocation.UsedSessions / allocation.TotalSessions;
        decimal deduction = allocation.TotalPaidAmount * completedFraction;
        decimal refundAmount = Math.Max(0, allocation.TotalPaidAmount - deduction);

        // Update ledger & refund to user's wallet
        await _walletRepository.CreditAsync(
            allocation.UserId, 
            refundAmount, 
            $"Refund for Package #{allocation.PackageId} ({reason})"
        );

        allocation.IsCancelled = true;
        allocation.RefundedAmount = refundAmount;
        allocation.CancelledDate = DateTime.UtcNow;

        await _dbContext.SaveChangesAsync();
        await transaction.CommitAsync();

        return new RefundResult { Success = true, RefundedAmount = refundAmount };
    }
}`,
      databaseStructure: [
        "Wallets (WalletId, UserId, CurrentBalance, Currency, RowVersion)",
        "WalletTransactions (TxId, WalletId, Amount, Type[Credit/Debit], Reference, Timestamp)",
        "Packages (PackageId, Title, TotalSessions, Price, ValidityDays, IsActive)",
        "PackageAllocations (Id, PackageId, UserId, TotalSessions, UsedSessions, PaidAmount, IsCancelled)",
        "RefundAuditLogs (RefundId, AllocationId, CalculatedRefund, Deduction, ProcessedAt)",
      ],
    },
  },
  {
    id: "developer-portfolio-website",
    name: "Developer Portfolio Website",
    tagline: "Modern, High-Performance Personal Web Showcase",
    description:
      "A modern and responsive personal portfolio website showcasing technical skills, projects and professional achievements.",
    role: "Frontend & UI/UX Developer",
    badge: "Web Application",
    category: "Frontend",
    githubUrl: "https://github.com/ishaprajapati776-collab/developer-portfolio",
    liveDemoUrl: "#",
    features: [
      "Responsive Fluid Layout",
      "Interactive Developer Code Visualizer",
      "Dynamic Skills Architecture Showcase",
      "Project Deep-Dive & Code Modal",
      "Accessible Semantic Structure",
      "SEO & Structured Data Optimization",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    architectureDetails: {
      overview:
        "Crafted with a mobile-first philosophy, clean DOM hierarchy, and high aesthetic standard. Emphasizes instant load times, accessible contrast ratios, and interactive component state without unnecessary bloat.",
      keyHighlights: [
        "Mobile-first responsive grid ensuring crisp rendering across smartphones, tablets, and ultrawide screens",
        "Custom developer workspace animation reflecting authentic .NET development workflows",
        "WCAG-compliant contrast on deep obsidian canvas (#09090F) with refined purple accents",
        "Clean event listeners and zero third-party font blocking for optimal Core Web Vitals",
      ],
      csharpSnippet: `<!-- Semantic HTML & Component Structure -->
<article class="project-card" data-category="web">
  <header class="project-header">
    <span class="eyebrow">Web Application</span>
    <h3 class="project-title">Developer Portfolio</h3>
  </header>
  <p class="project-desc">A modern and responsive personal portfolio...</p>
  <footer class="tech-stack">
    <span>HTML5</span> · <span>CSS3</span> · <span>JavaScript</span> · <span>Bootstrap</span>
  </footer>
</article>`,
      databaseStructure: [
        "Lightweight JSON state model for portfolio configurations",
        "Browser LocalStorage caching for user custom experience fields",
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Backend Development",
    description: "Core server-side engineering, business logic, ORM data mapping, and REST services",
    skills: [
      { name: "C#", description: "Object-oriented programming, async/await, delegates, collections, generics", highlight: true },
      { name: "ASP.NET MVC", description: "Controllers, Razor views, routing, model binding, filters, validation", highlight: true },
      { name: "ASP.NET Core", description: "Middleware pipeline, dependency injection, minimal APIs, cross-platform host", highlight: true },
      { name: "Entity Framework", description: "Code-First, DbContext, change tracking, migrations, navigation properties", highlight: true },
      { name: "LINQ", description: "Query syntax, method chaining, projection, filtering, lambda expressions" },
      { name: "REST API", description: "HTTP verbs, status codes, JSON serialization, endpoint routing" },
    ],
  },
  {
    name: "Database & Storage",
    description: "Relational database design, querying, data integrity, and normalization",
    skills: [
      { name: "Microsoft SQL Server", description: "RDBMS configuration, tables, primary/foreign keys, relational constraints", highlight: true },
      { name: "SQL Queries", description: "Complex JOINs, subqueries, aggregations, GROUP BY, indexes", highlight: true },
      { name: "Database Management", description: "Schema design, data normalization, backup/restore, transactional integrity" },
    ],
  },
  {
    name: "Frontend Technologies",
    description: "Building responsive, accessible, and dynamic user interfaces",
    skills: [
      { name: "HTML5", description: "Semantic markup, form validation, accessible DOM structure" },
      { name: "CSS3", description: "Flexbox, CSS Grid, media queries, keyframe animations, responsive design" },
      { name: "JavaScript", description: "DOM manipulation, ES6+ syntax, asynchronous fetch, event handling", highlight: true },
      { name: "Bootstrap", description: "Grid system, utilities, responsive navigation, modal dialogs" },
      { name: "jQuery", description: "AJAX requests, DOM traversal, event binding, dynamic page updates" },
    ],
  },
  {
    name: "Development Tools",
    description: "Engineering environment, version control, and API testing workflows",
    skills: [
      { name: "Visual Studio", description: "Solution management, integrated debugger, NuGet package manager, profiling", highlight: true },
      { name: "Git", description: "Branching, committing, staging, conflict resolution, rebase" },
      { name: "GitHub", description: "Remote repository hosting, pull requests, issue tracking, collaboration" },
      { name: "Postman", description: "API request crafting, environment variables, response inspection, testing" },
    ],
  },
];

export const HIGHLIGHT_CARDS = [
  {
    number: "01",
    title: "Problem Solver",
    tagline: "Translating Business Needs Into Structured Code",
    description:
      "Approaching development with analytical rigor. Focused on clean separation of concerns, robust error handling, database normalization, and systematically debugging issues.",
    bulletPoints: [
      "Relational schema integrity & foreign key constraints",
      "Clean controller and service layer separation",
      "Methodical bug isolation & resolution",
    ],
  },
  {
    number: "02",
    title: "Quick Learner",
    tagline: "Adaptable, Inquisitive & Self-Driven",
    description:
      "Rapidly mastering new technologies, libraries, and design patterns. Consistently exploring .NET evolutions, modern web standards, and developer productivity tools.",
    bulletPoints: [
      "Fast adoption of ASP.NET Core & modern C# features",
      "Proactive documentation research and implementation",
      "Iterative skill enhancement through real-world projects",
    ],
  },
  {
    number: "03",
    title: "Passionate Developer",
    tagline: "Dedicated to Craftsmanship & Code Quality",
    description:
      "Committed to writing maintainable, readable code that delivers meaningful digital experiences. Passionate about software architecture and creating tangible user value.",
    bulletPoints: [
      "Zero-compromise on code cleanliness and readability",
      "Commitment to scalable, long-term software health",
      "Enthusiasm for building impactful web applications",
    ],
  },
];
